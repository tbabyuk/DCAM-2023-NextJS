import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(request) {

    const { 
        applicationFormData,
        resume_name,
        resume_URL
    } = await request.json()


    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "info@dacapomusic.ca",
        pass: "kwrmhfzqejjsnmry"
    }
    })

    
    const emailOptions =
        {
            from: "info@dacapomusic.ca",
            to: "terry@dacapomusic.ca",
            subject: "New Teacher Application",
            html: `
                <strong>Applicant Name</strong><br />
                <small>${applicationFormData.full_name}</small>
                <hr>
                <strong>Phone</strong><br />
                <small>${applicationFormData.phone}</small>
                <hr>
                <strong>Email</strong><br />
                <small>${applicationFormData.email}</small>
                <hr>
                <strong>Instrument</strong><br />
                <small>Piano:${applicationFormData.instruments.piano}</small><br />
                <small>Guitar:${applicationFormData.instruments.guitar}</small><br />
                <small>Bass guitar:${applicationFormData.instruments.bass}</small><br />
                <small>Drums:${applicationFormData.instruments.drums}</small><br />
                <small>Vocals:${applicationFormData.instruments.vocals}</small><br />
                <small>Toddlers:${applicationFormData.instruments.toddlers}</small>
                <hr>
                <strong>Type of work</strong><br />
                <small>Permanent:${applicationFormData.type_of_work.permanent}</small><br />
                <small>Substitute:${applicationFormData.type_of_work.substitute}</small>
                <hr>
                <strong>Experience</strong><br />
                <small>${applicationFormData.teaching_experience}</small>
                <hr>
                <strong>Source</strong><br />
                <small>${applicationFormData.source}</small>
                <hr>
                <strong>Comments</strong><br />
                <small>${applicationFormData.comments}</small>
                <hr>
            `,
            attachments: [{
                filename: resume_name,
                href: resume_URL
            }]
        }

        
        try {
            await transporter.sendMail(emailOptions);
            console.log("try block fired in Node.js")
            return NextResponse.json({message: "application notice email sent successfully"}, {status: 200})
        } catch (error) {
            console.log("catch block fired in Node.js")
            return NextResponse.json({error: "application notice email failed to send", details: error}, {status: 500})
        }

}