import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { config, isEmailConfigured } from '@/lib/config';

export async function POST(request: Request) {
  try {
    // Check if email is configured
    if (!isEmailConfigured()) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Email is not configured. Please set up EMAIL_PASS in .env.local file.',
          instructions: [
            '1. Create a .env.local file in the project root',
            '2. Add EMAIL_PASS=your_gmail_app_password',
            '3. Get App Password from https://myaccount.google.com/security',
            '4. Restart the development server'
          ]
        },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: config.email.service,
      auth: {
        user: config.email.user,
        pass: config.email.pass,
      },
      debug: true, // Enable debug for testing
    });

    // Test email options
    const mailOptions = {
      from: `"Portfolio Test" <${config.email.user}>`,
      to: config.email.recipient,
      subject: 'Test Email from Portfolio Contact Form',
      text: `
This is a test email from your portfolio contact form.

Configuration:
- Service: ${config.email.service}
- User: ${config.email.user}
- Recipient: ${config.email.recipient}

If you receive this email, your email configuration is working correctly!
      `,
      html: `
        <h3>Test Email from Portfolio Contact Form</h3>
        <p>This is a test email to verify your email configuration.</p>
        <h4>Configuration:</h4>
        <ul>
          <li><strong>Service:</strong> ${config.email.service}</li>
          <li><strong>User:</strong> ${config.email.user}</li>
          <li><strong>Recipient:</strong> ${config.email.recipient}</li>
        </ul>
        <p>If you receive this email, your email configuration is working correctly!</p>
      `,
    };

    // Send test email
    const info = await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ 
      success: true,
      message: 'Test email sent successfully!',
      messageId: info.messageId,
      response: info.response
    });
    
  } catch (error: any) {
    console.error('Test email error:', error);
    
    // Check for specific Gmail authentication errors
    if (error.code === 'EAUTH' && error.message.includes('Username and Password not accepted')) {
      return NextResponse.json({
        success: false,
        message: 'Gmail authentication failed. You need to use an App Password, not your regular password.',
        instructions: [
          '1. Go to https://myaccount.google.com/security',
          '2. Enable 2-Step Verification',
          '3. Go to "App passwords"',
          '4. Generate password for "Mail"',
          '5. Use the 16-character password (no spaces)',
          '6. Update your .env.local file'
        ]
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'Failed to send test email',
      error: error.message
    }, { status: 500 });
  }
} 