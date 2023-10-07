import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"



export async function POST(request) {

    const {student, parent, instrument, phone, email, source} = await request.json()
    
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
            to: "tbabyuk@gmail.com",
            subject: "Trial Lesson Submission",
            text: "testing for now",
            html: `
                    <strong>Student Name</strong><br />
                    <small>${student}</small>
                    <hr>
                    <strong>Parent/Guardian Name</strong><br />
                    <small>${parent}</small>
                    <hr>
                    <strong>Instrument</strong><br />
                    <small>${instrument}</small>
                    <hr>
                    <strong>Phone</strong><br />
                    <small>${phone}</small>
                    <hr>
                    <strong>Email</strong><br />
                    <small>${email}</small>
                    <hr>
                    <strong>How did you hear about us?</strong><br />
                    <small>${source}</small>
                    <hr>
            `
        }

        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({message: "trial notification email sent successfully"})
        } catch (error) {
            return NextResponse.json({message: "trial notification email failed to send", details: error})
        }

}