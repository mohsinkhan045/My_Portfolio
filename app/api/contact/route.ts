import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { config, isEmailConfigured } from '@/lib/config';
import { addMessage } from '@/lib/messageStore';

// No global transporter - create a fresh one for each request to avoid connection timeout issues
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Store message in shared message store
    const messageId = addMessage({
      name,
      email,
      subject,
      message
    });
    
    // Only log in development mode
    if (process.env.NODE_ENV !== 'production') {
      console.log(`New message from ${name} (${email}): ${subject}`);
    }
    
    // Check if email is configured
    if (!isEmailConfigured()) {
      // Different response in production vs development
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { 
            message: 'Message received. Thank you for contacting us.',
            messageId
          }, 
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { 
            message: 'Message received. Email delivery is not configured, but your message has been saved.',
            to: config.email.recipient,
            messageId
          }, 
          { status: 200 }
        );
      }
    }

    try {
      // Create a new transporter for each request - use OAuth2
      const transporter = nodemailer.createTransport({
        service: config.email.service,
        auth: {
          user: config.email.user,
          pass: config.email.pass,
        },
        // Only enable debug in development
        debug: process.env.NODE_ENV !== 'production', 
      });

      // Only log in development
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Attempting to send email to ${config.email.recipient} using ${config.email.user}`);
      }

      // Create email options with specific formatting
      const mailOptions = {
        from: `"Portfolio Contact Form" <${config.email.user}>`, // Format the from field properly
        replyTo: email, // Set reply-to as the visitor's email
        to: config.email.recipient,
        subject: `Contact Form: ${subject}`,
        text: `
Name: ${name}
Email: ${email}
          
Message:
${message}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Send email
      const info = await transporter.sendMail(mailOptions);
      if (process.env.NODE_ENV !== 'production') {
        console.log('Email sent successfully:', info.response);
      }
      
      // Return success
      return NextResponse.json({ 
        message: 'Message sent successfully! Thank you for contacting us.',
        success: true 
      });
    } catch (error: any) {
      // Log error only in development
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error sending email:', error);
        console.error('Error details:', error.message);
      }
      
      // Check for Gmail authentication errors
      if (error.code === 'EAUTH' && error.message.includes('Username and Password not accepted')) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('\n\n-------- EMAIL AUTHENTICATION ERROR --------');
          console.error('Your regular Gmail password will NOT work!');
          console.error('You MUST create an App Password in your Google Account:');
          console.error('1. Go to https://myaccount.google.com/security');
          console.error('2. Under "Signing in to Google", find "App passwords"');
          console.error('3. Generate a new app password for "Mail"');
          console.error('4. Copy the 16-character password (no spaces)');
          console.error('5. Update your .env.local file with this password');
          console.error('------------------------------------------\n\n');
        }
        
        // In production, don't reveal details about the authentication error
        if (process.env.NODE_ENV === 'production') {
          return NextResponse.json({ 
            message: 'Thank you for your message. We will get back to you soon.',
            success: false
          });
        } else {
          return NextResponse.json({ 
            message: 'Message saved but email delivery failed. Gmail requires an App Password - please check server logs.',
            success: false
          });
        }
      }
      
      // General error with different messaging for production
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ 
          message: 'Thank you for your message. We will get back to you soon.',
          success: false 
        });
      } else {
        return NextResponse.json({ 
          message: 'Message saved but email delivery failed. Please check server logs.',
          success: false
        });
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error processing request:', error);
    }
    return NextResponse.json(
      { message: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
} 