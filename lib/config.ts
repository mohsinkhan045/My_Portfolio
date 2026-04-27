import { profile } from '@/data/profile';

// Configuration variables with defaults
export const config = {
  email: {
    service: process.env.EMAIL_SERVICE || "gmail",
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || "",
    recipient: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER || "",
  },
  siteMetadata: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.metaDescription,
    author: profile.name,
  },
  isProduction: process.env.NODE_ENV === 'production'
};

// Verify that email is configured properly
export function isEmailConfigured() {
  const hasUser = !!config.email.user;
  const hasPass = !!config.email.pass;
  
  // Log configuration status in development only
  if (process.env.NODE_ENV !== 'production') {
    console.log('Email configuration status:', { 
      hasUser, 
      hasPass,
      user: config.email.user,
      // Don't log the actual password for security reasons
      passLength: config.email.pass ? config.email.pass.length : 0
    });
    
    if (!hasPass) {
      console.log('\n📧 EMAIL SETUP REQUIRED 📧');
      console.log('To enable email functionality, create a .env.local file with:');
      console.log('EMAIL_SERVICE=gmail');
      console.log('EMAIL_USER=your-email@example.com');
      console.log('EMAIL_PASS=your_gmail_app_password');
      console.log('EMAIL_RECIPIENT=your-email@example.com');
      console.log('\nFor Gmail, you need an App Password:');
      console.log('1. Go to https://myaccount.google.com/security');
      console.log('2. Enable 2-Step Verification');
      console.log('3. Go to "App passwords"');
      console.log('4. Generate password for "Mail"');
      console.log('5. Use the 16-character password (no spaces)');
      console.log('📧 END EMAIL SETUP 📧\n');
    }
  }
  
  return hasUser && hasPass;
} 