import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"

 
export async function POST(request, response) {

    const {to, subject, message} = await request.json()
    

    console.log("From API route", to, subject, message)

        const transporter = nodemailer.createTransport({
        service: "gmail",
        // host: "smtp.gmail.com",
        auth: {
            user: "info@dacapomusic.ca",
            pass: "kwrmhfzqejjsnmry"
        }
        })

        const mailOptions = {
            from: "info@dacapomusic.ca",
            to,
            subject,
            text: message
        }

        // return NextResponse.json(mailOptions)

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent:", info.response)
            return NextResponse.json({message: "Email sent successfully"})
        } catch (error) {
            console.error("Error sending email:", error)
            return NextResponse.json({message: "Error sending email"})
        }


//   return NextResponse.json({to, subject, message})
}
