'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummykey');

export async function submitContactForm(formData) {
  const name = formData.get('name');
  const company = formData.get('company');
  const email = formData.get('email');
  const message = formData.get('message');
  
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Simulating form submission to contact@bandtconsulting.com...");
      console.log('Received Form Submission:', { name, company, email, message });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return { success: true, message: 'Simulated submission successful!' };
    }

    const { data, error } = await resend.emails.send({
      from: 'B&T Consulting Inquiry <onboarding@resend.dev>',
      to: 'contact@bandtconsulting.com',
      replyTo: email,
      subject: `New Inquiry from ${name} at ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #0b1329; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 20px;">New Website Contact Form Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563; width: 120px;">Name:</td>
              <td style="padding: 10px 0; color: #111827;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Company:</td>
              <td style="padding: 10px 0; color: #111827;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Email:</td>
              <td style="padding: 10px 0; color: #111827;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 15px; background: #f8fafc; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #4b5563; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</h3>
            <p style="color: #111827; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Contact action error:', error);
    return { success: false, error: 'Failed to send submission.' };
  }
}
