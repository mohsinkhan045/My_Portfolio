# Email Setup Guide for Contact Form

## Problem
The contact form is not sending emails because the email configuration is not set up properly.

## Solution

### Step 1: Create Environment File
Create a file named `.env.local` in the root directory of your project with the following content:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=ms0547884@gmail.com
EMAIL_PASS=lvas myzl tfra pjzv
EMAIL_RECIPIENT=ms0547884@gmail.com
```

### Step 2: Get Gmail App Password
You cannot use your regular Gmail password. You need to create an App Password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Go to **"App passwords"** under "Signing in to Google"
4. Select **"Mail"** as the app
5. Click **"Generate"**
6. Copy the **16-character password** (no spaces)
7. Replace `your_gmail_app_password_here` in the `.env.local` file with this password

### Step 3: Restart Development Server
After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

### Step 4: Test the Contact Form
1. Go to your contact page
2. Fill out the form
3. Submit the form
4. Check your email (ms0547884@gmail.com) for the message

## Troubleshooting

### If emails still don't work:
1. Check the browser console for errors
2. Check the terminal where you're running `npm run dev` for error messages
3. Make sure the App Password is exactly 16 characters with no spaces
4. Ensure 2-Step Verification is enabled on your Google account

### Alternative: Use a Different Email Service
If Gmail doesn't work, you can use other services like:
- Outlook/Hotmail
- Yahoo
- Custom SMTP server

Just change the `EMAIL_SERVICE` in `.env.local` accordingly.

## Security Notes
- Never commit the `.env.local` file to git
- The `.env.local` file is already in `.gitignore`
- Keep your App Password secure and don't share it 