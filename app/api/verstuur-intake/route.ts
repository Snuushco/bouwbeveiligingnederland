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
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json({ error: 'Server configuratiefout' }, { status: 500 })
    }

    const htmlContent = `
      <h3>Nieuwe intake-aanvraag via bouwbeveiligingnederland.nl</h3>
      <table>
        <tr><td><b>Naam:</b></td><td>${data.naam}</td></tr>
        <tr><td><b>Bedrijf:</b></td><td>${data.bedrijf}</td></tr>
        <tr><td><b>E-mail:</b></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td><b>Telefoon:</b></td><td>${data.telefoon || '—'}</td></tr>
        <tr><td><b>Locatie:</b></td><td>${data.locatie}</td></tr>
        <tr><td><b>Dienst:</b></td><td>${data.dienst}</td></tr>
        <tr><td><b>Startdatum project:</b></td><td>${data.startdatum || '—'}</td></tr>
        <tr><td><b>Extra info:</b></td><td>${(data.bericht || '—').replace(/\n/g, '<br>')}</td></tr>
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
        from: 'Bouwbeveiliging Nederland <noreply@snelrie.nl>',
        to: 'bouw@praesidion.nl',
        reply_to: data.email,
        subject: `Nieuwe intake-aanvraag van ${data.naam} — Bouwbeveiliging Nederland`,
        html: htmlContent,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Resend error:', errorBody)
      return NextResponse.json({ error: 'Email verzenden mislukt' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
