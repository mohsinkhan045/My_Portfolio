# Portfolio Deployment Instructions for Netlify

Follow these steps to deploy your portfolio on Netlify with proper email functionality.

## Pre-deployment Setup

1. Make sure you have a Gmail account set up with 2-Step Verification enabled
2. Generate an App Password for Gmail:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled
   - Go to App Passwords (under 2-Step Verification)
   - Select "Mail" from the app dropdown and "Other" (name it "Portfolio")
   - Click "Generate"
   - Copy the 16-character password (no spaces)

## Netlify Deployment Steps

1. Push your code to GitHub

   - Make sure all changes are committed and pushed

2. Sign up/Log in to Netlify

   - Go to https://www.netlify.com/
   - Sign up or login with your GitHub account

3. Create a new site

   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Choose the branch to deploy (usually "main")

4. Configure build settings

   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

5. Set up environment variables (CRITICAL for email functionality)

   - Once deployment starts, go to "Site settings" → "Environment variables"
   - Add the following environment variables:
     - `EMAIL_SERVICE`: `gmail`
     - `EMAIL_USER`: `ms0547884@gmail.com` (or your email)
     - `EMAIL_PASS`: Your 16-character Gmail App Password
     - `NEXT_PUBLIC_SITE_URL`: Your Netlify site URL (e.g., https://your-site.netlify.app)

6. Trigger a new deploy

   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Deploy site"
   - This ensures your new environment variables are used

7. Test the contact form
   - Once deployment is complete, visit your site
   - Fill out and submit the contact form
   - Check your email to confirm the message was received

## Troubleshooting Email Issues

If you still have email sending issues:

1. Check Netlify function logs:

   - Go to "Functions" tab in your Netlify dashboard
   - Look for errors in the "api/contact" function

2. Verify Gmail settings:

   - Confirm 2-Step Verification is enabled
   - Ensure the App Password was generated correctly
   - Try generating a new App Password if needed

3. Update your EMAIL_PASS environment variable:
   - Go to "Site settings" → "Environment variables"
   - Update the EMAIL_PASS variable with the new App Password
   - Trigger a new deploy

## Custom Domain Setup (Optional)

1. Go to "Domain settings" in your Netlify dashboard
2. Click "Add custom domain"
3. Follow the instructions to configure DNS settings

Remember to update your NEXT_PUBLIC_SITE_URL environment variable if you switch to a custom domain.
