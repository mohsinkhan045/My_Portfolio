# Vercel Deployment Guide

Follow these steps to deploy your portfolio to Vercel:

## Method 1: Using Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   - Create a new GitHub repository
   - Push your code to this repository
2. **Sign up/Log in to Vercel**

   - Go to https://vercel.com/
   - Sign up or log in with GitHub

3. **Import your repository**
   - Click "Add New..."
   - Select "Project"
   - Find and select your GitHub repository
4. **Configure project settings**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
5. **Set environment variables**
   - Add the following environment variables:
     - `EMAIL_SERVICE`: `gmail`
     - `EMAIL_USER`: `ms0547884@gmail.com`
     - `EMAIL_PASS`: (your Gmail app password)
     - `NEXT_PUBLIC_SITE_URL`: (your Vercel domain, will be available after first deployment)
6. **Deploy**
   - Click "Deploy"
   - Wait for the deployment to complete
7. **Update NEXT_PUBLIC_SITE_URL**
   - After deployment, go to Settings > Environment Variables
   - Update NEXT_PUBLIC_SITE_URL with your actual Vercel URL

## Method 2: Using Vercel CLI (Alternative)

1. **Log in to Vercel CLI**
   ```
   vercel login
   ```
2. **Deploy from your project directory**
   ```
   vercel
   ```
3. **Follow the CLI prompts**
   - Set up and deploy project? Yes
   - Link to existing project? No
   - What's your project name? (your-project-name)
   - In which directory is your code located? ./
   - Want to override settings? No
4. **Set environment variables after deployment**
   - Go to the Vercel dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add the same variables listed in Method 1, step 5

## After Deployment

1. **Test your site**
   - Visit your deployed site
   - Test all features, especially the contact form
2. **Custom Domain (Optional)**
   - In your Vercel dashboard, go to Settings > Domains
   - Add your custom domain and follow the instructions

## Troubleshooting

If you encounter issues:

1. **Build Errors**
   - Check the build logs in the Vercel dashboard
   - Make sure all dependencies are installed
2. **API Routes Not Working**

   - Verify your environment variables are set correctly
   - Check that API routes are properly structured

3. **Email Sending Issues**
   - Ensure you're using an App Password for Gmail
   - Verify all email-related environment variables
