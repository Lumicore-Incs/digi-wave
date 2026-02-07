import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(req) {
    try {
        const { firstName, lastName, email, phone, message } = await req.json();

        // Validate required fields
        if (!firstName || !email) {
            return Response.json(
                { error: 'First name and email are required' },
                { status: 400 }
            );
        }

        // Send email
        await transporter.sendMail({
            from: `"Digiwave.lk" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: 'New Quote Request | Digiwave Website',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
              }
              .logo-section {
                background: linear-gradient(135deg, #001f3f 0%, #003d7a 100%);
                padding: 30px;
                text-align: center;
                border-bottom: 4px solid #4caf50;
              }
              .logo {
                max-width: 180px;
                height: auto;
                max-height: 60px;
              }
              .header {
                color: Black;
                padding: 30px 30px 40px 30px;
                text-align: center;
                border-bottom: none;
              }
              .header h1 {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 8px;
              }
              .header p {
                font-size: 14px;
                opacity: 0.9;
                letter-spacing: 0.5px;
              }
              .content {
                padding: 40px 30px;
              }
              .message-box {
                background: #f8f9fa;
                border-left: 4px solid #4caf50;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 30px;
              }
              .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 30px;
              }
              .info-item {
                background: #f0f4f8;
                padding: 20px;
                border-radius: 10px;
                border: 1px solid #e0e8f0;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                margin-bottom: 20px;
              }
              .info-label {
                font-size: 12px;
                font-weight: 700;
                color: #001f3f;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 8px;
                display: block;
              }
              .info-value {
                font-size: 15px;
                color: #333;
                font-weight: 500;
                word-break: break-all;
              }
              .divider {
                height: 1px;
                background: linear-gradient(90deg, transparent, #e0e8f0, transparent);
                margin: 30px 0;
              }
              .message-label {
                font-size: 13px;
                font-weight: 700;
                color: #001f3f;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 15px;
                display: block;
              }
              .message-content {
                background: white;
                border: 1px solid #e0e8f0;
                padding: 20px;
                border-radius: 8px;
                font-size: 15px;
                line-height: 1.8;
                color: #333;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                background: linear-gradient(135deg, #f8f9fa 0%, #f0f4f8 100%);
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e0e8f0;
              }
              .footer-text {
                font-size: 13px;
                color: #666;
                margin-bottom: 10px;
              }
              .footer-logo {
                font-size: 16px;
                font-weight: 700;
                color: #001f3f;
                letter-spacing: 2px;
              }
              .footer-logo span {
                color: #4caf50;
              }
              .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
                color: white;
                padding: 12px 30px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                margin-top: 20px;
                transition: all 0.3s ease;
              }
              @media (max-width: 600px) {
                .info-grid {
                  grid-template-columns: 1fr;
                }
                .header h1 {
                  font-size: 24px;
                }
                .content {
                  padding: 25px 20px;
                }
              }
            </style>
          </head>
          <body>
            <div class="container">
                <div class="logo-section">
              </div>
              <div class="header">
                <h1>💼 New Quote Request</h1>
                <p>Quote Request from Digiwave Website</p>
              </div>
              
              <div class="content">
                <div class="info-grid">
                  <div class="info-item">
                    <span class="info-label">👤 Name</span>
                    <div class="info-value">${firstName} ${lastName || ''}</div>
                  </div>
                  <div class="info-item">
                    <span class="info-label">📧 Email</span>
                    <div class="info-value"><a href="mailto:${email}" style="color: #4caf50; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="info-item">
                    <span class="info-label">📱 Phone</span>
                    <div class="info-value"><a href="tel:${phone}" style="color: #4caf50; text-decoration: none;">${phone || 'Not provided'}</a></div>
                  </div>
                  <div class="info-item">
                    <span class="info-label">🕐 Time</span>
                    <div class="info-value">${new Date().toLocaleString()}</div>
                  </div>
                </div>

                <div class="divider"></div>

                <span class="message-label">💬 Quote Details</span>
                <div class="message-content">${message || 'No details provided'}</div>

                <a href="mailto:${email}?subject=Re: Your Quote Request" class="cta-button">Reply to Quote Request</a>
              </div>

              <div class="footer">
                <p class="footer-text">This quote request was sent from your Digiwave quote form</p>
                <div class="footer-logo">DIGI<span>WAVE</span></div>
                <p class="footer-text" style="margin-top: 10px; font-size: 12px;">
                  <a href="https://www.digiwave.lk" style="color: #001f3f; text-decoration: none;">www.digiwave.lk</a> • 
                  <a href="tel:+9477 441 9900" style="color: #001f3f; text-decoration: none;">+94 77 441 9990</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
        });

        return Response.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email error:', error.message, error);
        return Response.json(
            { error: `Failed to send email: ${error.message}` },
            { status: 500 }
        );
    }
}
