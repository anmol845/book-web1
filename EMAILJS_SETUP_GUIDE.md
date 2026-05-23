# EmailJS Setup Guide for Contact Form

## Overview
Your contact form is now configured to send emails using **EmailJS**, a free service that lets you send emails directly from your React app without needing a backend server.

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email

## Step 2: Set Up Email Service
1. In the EmailJS dashboard, click **"Add Service"**
2. Choose your email provider:
   - **Gmail** (Recommended - easiest)
   - Outlook
   - Custom SMTP
3. Follow the provider-specific setup instructions
4. Click "Connect Account" and authorize EmailJS
5. Copy the **Service ID** (looks like: `service_xxxxx`)

## Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Name it (e.g., "contact_form_template")
4. Set up your email template with these variables:

```
From: {{from_email}}
To: your-email@gmail.com
Subject: {{subject}} - New Contact Form Message
From Name: {{from_name}}

---

Message from: {{from_name}} ({{from_email}})
Subject: {{subject}}

{{message}}
```

5. Copy the **Template ID** (looks like: `template_xxxxx`)

## Step 4: Get Your Public Key
1. Go to **Account Settings** → **API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxx`)

## Step 5: Update Contact.jsx
Open `src/pages/Contact.jsx` and replace these values at the top:

```javascript
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";
```

Also replace the recipient email:
```javascript
to_email: "your-email@gmail.com", // Replace with your email
```

## Step 6: Install EmailJS Package
Run this command in your `book-ui` directory:
```bash
npm install @emailjs/browser
```

## Step 7: Test Your Form
1. Start your React app: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your email inbox!

## Troubleshooting

### Issue: "Service not found"
- Make sure your Service ID is correct
- Check that the service is enabled in EmailJS dashboard

### Issue: "Template not found"
- Verify your Template ID matches exactly
- Make sure template is published

### Issue: Emails not sending
- Check browser console for error messages
- Verify your email provider is properly connected in EmailJS
- For Gmail: You may need to allow "Less secure apps" or use Gmail App Password

### Rate Limiting
- Free EmailJS plan: 200 emails/day
- Check your usage in EmailJS dashboard

## Email Template Variables
In your template, use these variables:
- `{{from_name}}` - User's name from form
- `{{from_email}}` - User's email from form
- `{{subject}}` - Message subject
- `{{message}}` - Full message body
- `{{to_email}}` - Your receiving email

## Optional: Add Receiving Email Notification
To send a confirmation email to the user after they submit:
1. Create another template in EmailJS
2. Set recipient to `{{from_email}}`
3. Add the template ID to `Contact.jsx`
4. Add another emailjs.send() call for the confirmation email

## Security Notes
- Your Public Key is safe to expose in frontend code
- Never expose your Service ID or Template ID in production
- Implement rate limiting on backend for production use

## Resources
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/sdk/installation/)
