This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form Setup

The portfolio includes a contact form that sends messages to your email address. To set up the email functionality:

1. Create a `.env.local` file in the root directory (if not already present)
2. Add the following environment variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

For Gmail users:

- You'll need to create an App Password instead of using your regular password
- Go to [Google Account Security Settings](https://myaccount.google.com/security)
- Enable 2-Step Verification if not already enabled
- Under "App passwords", create a new app password for "Mail"
- Copy the generated password and use it for EMAIL_PASS

For deployment to Vercel:

- Add these environment variables in your Vercel project settings
- Go to Project Settings > Environment Variables and add the same variables

Without these credentials, the contact form will still work, but emails won't be sent. The form submissions will only be logged to the console.
