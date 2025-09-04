import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Your POST function implementation...



export async function POST(request) {
  const body = await request.json();
  const { 
    fullName, 
    email, 
    phone, 
    carType, 
    travelers, 
    travelDate, 
    pickupTime, 
    pickupLocation, 
    dropLocation, 
    notes 
  } = body;


  if (!fullName || !email) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: 'roadtripcabs@gmail.com', // replace this
      subject: `New booking from ${fullName}`,
      text: 
        `Full Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Car Type: ${carType}\n` +
        `Number of Travelers: ${travelers}\n` +
        `Date of Travel: ${travelDate}\n` +
        `Pick Up Time: ${pickupTime}\n` +
        `Pick Up Location: ${pickupLocation}\n` +
        `Drop Location: ${dropLocation}\n` +
        `Driver Notes / Return Details: ${notes || 'N/A'}\n`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'We have received your details and will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again after some time.' },
      { status: 500 }
    );
  }
}
