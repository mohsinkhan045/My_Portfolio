/**
 * Simple deployment helper for Vercel
 * This will open the browser to the Vercel dashboard for easy deployment
 */

const { exec } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=== Portfolio Deployment Helper ===\n');
console.log('1. This script will help you deploy your portfolio to Vercel');
console.log('2. You will need to create or log in to a Vercel account');
console.log('3. Follow the prompts to complete the deployment\n');

rl.question('Ready to deploy to Vercel? (y/n): ', (answer) => {
  if (answer.toLowerCase() === 'y') {
    console.log('\nOpening Vercel dashboard...');
    
    // Open Vercel dashboard in default browser
    const command = process.platform === 'win32' 
      ? 'start https://vercel.com/new' 
      : process.platform === 'darwin' 
        ? 'open https://vercel.com/new' 
        : 'xdg-open https://vercel.com/new';
    
    exec(command, (error) => {
      if (error) {
        console.error('Failed to open browser:', error);
        console.log('\nPlease visit https://vercel.com/new manually to deploy your project.');
      } else {
        console.log('\nFollow these steps:');
        console.log('1. Sign up or log in to Vercel');
        console.log('2. Import your GitHub repository (create one if needed)');
        console.log('3. Configure your project (Next.js should be auto-detected)');
        console.log('4. Add the following environment variables:');
        console.log('   - EMAIL_SERVICE: gmail');
        console.log('   - EMAIL_USER: ms0547884@gmail.com');
        console.log('   - EMAIL_PASS: (your Gmail app password)');
        console.log('   - NEXT_PUBLIC_SITE_URL: (your Vercel domain)');
        console.log('5. Click Deploy and wait for deployment to complete');
      }
      
      rl.close();
    });
  } else {
    console.log('\nDeployment cancelled. When ready, run "node deploy.js" to try again.');
    rl.close();
  }
}); 