import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { config, isEmailConfigured } from '@/lib/config';

export async function POST() {
  try {
    console.log('Testing email configuration...');
    
    if (!isEmailConfigured()) {
      console.log('Email not properly configured');
      return NextResponse.json(
        { success: false, message: 'Email is not configured properly. Make sure you have set up an APP PASSWORD for Gmail in .env.local' },
        { status: 400 }
      );
    }

    try {
      // Create a new transporter for the test
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.email.user,
          pass: config.email.pass,
        },
        debug: true, // Enable debug output
      });

      // First verify the connection
      await transporter.verify();
      console.log('SMTP connection verified successfully');

      // Create test email
      const testMailOptions = {
        from: `"Portfolio Test Email" <${config.email.user}>`,
        to: config.email.recipient,
        subject: 'Test Email from Portfolio',
        text: `This is a test email sent at ${new Date().toLocaleString()}`,
        html: `
          <h2>Test Email</h2>
          <p>This is a test email sent from your portfolio contact form at ${new Date().toLocaleString()}</p>
          <p>If you received this email, it means your email configuration is working correctly.</p>
          <hr>
          <p><strong>Email User:</strong> ${config.email.user}</p>
          <p><strong>Email Recipient:</strong> ${config.email.recipient}</p>
          <p><strong>App Password Working:</strong> Yes</p>
        `,
      };

      // Send the test email
      const info = await transporter.sendMail(testMailOptions);
      console.log('Test email sent successfully:', info.messageId);

      return NextResponse.json(
        { 
          success: true, 
          message: 'Test email sent successfully!',
          details: {
            messageId: info.messageId,
            from: config.email.user,
            to: config.email.recipient,
            timestamp: new Date().toISOString()
          }
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending test email:', emailError);
      
      let errorMessage = 'Unknown error';
      if (emailError instanceof Error) {
        errorMessage = emailError.message;
        console.error('Error details:', errorMessage);
      }
      
      // Provide specific error for authentication issues
      if (errorMessage.includes('535') || errorMessage.includes('Username and Password not accepted')) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Gmail rejected your password. You MUST use an App Password from your Google Account.',
            error: errorMessage,
            help: 'Go to https://myaccount.google.com, enable 2-Step Verification, then create an App Password for Mail'
          },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send test email',
          error: errorMessage,
          config: {
            user: config.email.user,
            recipient: config.email.recipient,
            // Don't log the password for security reasons
            passwordProvided: Boolean(config.email.pass)
          }
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in test email endpoint:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 