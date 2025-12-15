'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailForm {
  name: string
  email: string
  message: string
}

export async function sendMail(data: EmailForm) {
  const { name, email, message } = data

  if (!name || !email || !message) {
    return { success: false, error: 'Missing fields' }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `📩 New Contact from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: 'Failed to send email' }
  }
}
