import NodeMailer from 'nodemailer'

export async function sendMail(body: string, subject: string, to: string, from: string = process.env.EMAIL_FROM as string) {
    const transporter = NodeMailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT as string),
        secure: false,
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
        }
    });
    
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: to,
        subject: subject,
        html: body
    };
    
    return await transporter.sendMail(mailOptions);
}

export async function sendContactMail(name: string, email: string, phone: string | null, subject: string | null, message: string) {
    const body = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>${subject ? subject : 'Contact Form Submission'}</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone ? phone : 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject ? subject : 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
    `;

    return await sendMail(body, subject ? subject : 'Contact Form Submission', process.env.EMAIL_FROM as string, email ?? process.env.EMAIL_FROM as string);
}