# Deployment Guide

This guide covers how to deploy the portfolio website with backend functionality for the contact form.

## Frontend Deployment (GitHub Pages)

The frontend is already configured for GitHub Pages deployment:

1. **Automatic Deployment**: The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys the site when you push to the `main` branch.

2. **Manual Deployment**: You can also deploy manually:
   ```bash
   npm run build
   npm run deploy
   ```

## Backend Deployment Options

The contact form requires a backend service. Here are several deployment options:

### Option 1: Netlify (Recommended)

1. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Netlify will automatically detect and deploy the functions in `netlify/functions/`

2. **Environment Variables** (if using email service):
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

3. **Update API URL**:
   - Update the `API_BASE_URL` in `src/services/contactService.js` with your Netlify URL

### Option 2: Vercel

1. **Create `api/contact.js`**:
   ```javascript
   // Move the function from netlify/functions/contact.js to api/contact.js
   // and adjust the export format for Vercel
   export default async function handler(req, res) {
     // Your function code here
   }
   ```

2. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Option 3: AWS Lambda + API Gateway

1. **Package the function** for AWS Lambda
2. **Create API Gateway** endpoint
3. **Update CORS settings**
4. **Update API URL** in the service file

### Option 4: Traditional Server (Express.js)

1. **Create Express server**:
   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();
   
   app.use(cors());
   app.use(express.json());
   
   app.post('/api/contact', async (req, res) => {
     // Your contact form logic here
   });
   
   app.listen(process.env.PORT || 3001);
   ```

2. **Deploy to**:
   - Heroku
   - Railway
   - DigitalOcean App Platform
   - AWS EC2

## Email Service Integration

To actually send emails, integrate with an email service:

### SendGrid Integration

1. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```

2. **Update the function**:
   ```javascript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
   const msg = {
     to: 'ankuranubhav1994@gmail.com',
     from: 'noreply@yourdomain.com', // Use your verified domain
     subject: `New Contact Form Message from ${name}`,
     html: `
       <h2>New Contact Form Message</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Message:</strong></p>
       <p>${message.replace(/\n/g, '<br>')}</p>
     `
   };
   
   await sgMail.send(msg);
   ```

### Alternative Email Services

- **Mailgun**: Similar to SendGrid
- **AWS SES**: Cost-effective for high volume
- **Nodemailer**: Use with SMTP providers

## Environment Variables

Set these environment variables in your deployment platform:

```
SENDGRID_API_KEY=your_api_key
CONTACT_EMAIL=ankuranubhav1994@gmail.com
NODE_ENV=production
```

## Testing the Backend

1. **Local Development**:
   ```bash
   # For Netlify functions
   npm install -g netlify-cli
   netlify dev
   
   # Your site will be available at http://localhost:8888
   ```

2. **Test the API**:
   ```bash
   curl -X POST http://localhost:8888/.netlify/functions/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

## Security Considerations

1. **Rate Limiting**: Implement rate limiting to prevent spam
2. **Input Validation**: Always validate and sanitize input
3. **CORS**: Configure CORS properly for your domain
4. **Environment Variables**: Never commit API keys to version control
5. **Spam Protection**: Consider adding reCAPTCHA or similar

## Monitoring and Analytics

1. **Error Tracking**: Use services like Sentry
2. **Analytics**: Monitor form submissions
3. **Uptime Monitoring**: Ensure your backend is always available

## Fallback Strategy

The current implementation includes a fallback to email client if the backend is unavailable. This ensures users can always contact you even if there are technical issues.

## Support

If you need help with deployment, please refer to the documentation of your chosen platform or contact the repository maintainer.
