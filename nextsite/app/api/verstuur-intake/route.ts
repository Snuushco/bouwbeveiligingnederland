import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    // Valideer verplichte velden
    const requiredFields = ['naam', 'bedrijf', 'email', 'locatie', 'dienst']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `Veld '${field}' is verplicht` }, { status: 400 })
      }
    }
    // SMTP instellen
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
    // E-mail opstellen
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
        <tr><td><b>KvK:</b></td><td>97640794</td></tr>
      </table>
      <p style="color:#888;font-size:12px;">Deze aanvraag is automatisch gegenereerd via bouwbeveiligingnederland.nl</p>
    `
    await transporter.sendMail({
      from: 'Bouwbeveiliging Nederland <bouw@praesidion.nl>',
      to: 'bouw@praesidion.nl',
      subject: 'Nieuwe intake-aanvraag via bouwbeveiligingnederland.nl',
      html: htmlContent,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Fout bij verzenden' }, { status: 500 })
  }
} 