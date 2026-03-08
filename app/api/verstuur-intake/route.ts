import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const requiredFields = ['naam', 'bedrijf', 'email', 'locatie', 'dienst']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `Veld '${field}' is verplicht` }, { status: 400 })
      }
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error('RESEND_API_KEY ontbreekt')
      return NextResponse.json({ error: 'Mailservice niet geconfigureerd' }, { status: 500 })
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Bouwbeveiliging Nederland <noreply@praesidion.nl>'

    const htmlContent = `
      <h3>Nieuwe intake-aanvraag via bouwbeveiligingnederland.nl</h3>
      <table>
        <tr><td><b>Naam:</b></td><td>${data.naam}</td></tr>
        <tr><td><b>Bedrijf:</b></td><td>${data.bedrijf}</td></tr>
        <tr><td><b>E-mail:</b></td><td>${data.email}</td></tr>
        <tr><td><b>Telefoon:</b></td><td>${data.telefoon || 'Niet opgegeven'}</td></tr>
        <tr><td><b>Locatie:</b></td><td>${data.locatie}</td></tr>
        <tr><td><b>Dienst:</b></td><td>${data.dienst}</td></tr>
        <tr><td><b>Startdatum project:</b></td><td>${data.startdatum || 'Niet opgegeven'}</td></tr>
        <tr><td><b>Extra info:</b></td><td>${data.bericht || 'Geen'}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;">Deze aanvraag is automatisch gegenereerd via bouwbeveiligingnederland.nl</p>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: ['bouw@praesidion.nl'],
        subject: 'Nieuwe intake-aanvraag via bouwbeveiligingnederland.nl',
        html: htmlContent,
        reply_to: data.email,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Resend fout:', response.status, errorBody)
      return NextResponse.json({ error: 'Fout bij verzenden' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Fout bij versturen intake via Resend:', err)
    return NextResponse.json({ error: 'Fout bij verzenden' }, { status: 500 })
  }
}
