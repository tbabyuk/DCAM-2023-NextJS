import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(request) {

    const { 
        fullName, 
        phone, 
        email, 
        instruments, 
        typeOfWork, 
        teachingExperience, 
        source,
        comments,
        resumeName,
        resumeURL
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
            to: "info@dacapomusic.ca",
            subject: "New Teacher Application",
            html: `
                <strong>Applicant Name</strong><br />
                <small>${fullName}</small>
                <hr>
                <strong>Phone</strong><br />
                <small>${phone}</small>
                <hr>
                <strong>Email</strong><br />
                <small>${email}</small>
                <hr>
                <strong>Instrument</strong><br />
                <small>Piano:${instruments.piano}</small><br />
                <small>Guitar:${instruments.guitar}</small><br />
                <small>Bass guitar:${instruments.bass}</small><br />
                <small>Drums:${instruments.drums}</small><br />
                <small>Vocals:${instruments.vocals}</small><br />
                <small>Toddlers:${instruments.toddlers}</small>
                <hr>
                <strong>Type of work</strong><br />
                <small>Permanent:${typeOfWork.permanent}</small><br />
                <small>Substitute:${typeOfWork.substitute}</small>
                <hr>
                <strong>Experience</strong><br />
                <small>${teachingExperience}</small>
                <hr>
                <strong>Source</strong><br />
                <small>${source}</small>
                <hr>
                <strong>Comments</strong><br />
                <small>${comments}</small>
                <hr>
            `,
            attachments: [{
                filename: resumeName,
                href: resumeURL
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