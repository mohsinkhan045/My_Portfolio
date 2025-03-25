// Configuration variables with defaults
export const config = {
  email: {
    service: process.env.EMAIL_SERVICE || 'gmail',
    user: process.env.EMAIL_USER || 'ms0547884@gmail.com',
    pass: process.env.EMAIL_PASS || '',
    recipient: process.env.EMAIL_RECIPIENT || 'ms0547884@gmail.com'
  },
  siteMetadata: {
    title: 'Muhammad Mohsin Saleem | Full Stack Blockchain Developer',
    description: 'Portfolio of Muhammad Mohsin Saleem, a Full Stack Blockchain Developer specializing in DeFi, NFTs, and Web3 applications',
    author: 'Muhammad Mohsin Saleem',
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
  }
  
  return hasUser && hasPass;
} 