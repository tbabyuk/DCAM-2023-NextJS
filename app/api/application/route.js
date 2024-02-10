import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(request) {


    console.log("application route fired")

    const { 
        full_name, 
        phone, 
        email, 
        instruments, 
        type_of_work, 
        teaching_experience, 
        source,
        comments,
        // resume,
        resume_name,
        resume_url
    } = await request.json()


    console.log("from server:",
        full_name, 
        phone, 
        email, 
        instruments, 
        type_of_work, 
        teaching_experience, 
        source,
        comments,
        // resume
        resume_name,
        resume_url
    )


    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "info@dacapomusic.ca",
        pass: "kwrmhfzqejjsnmry"
    }
    })


    // const emailOptions =
    //     {
    //         from: "info@dacapomusic.ca",
    //         to: "terry@dacapomusic.ca",
    //         subject: "New Teacher Application",
    //         html: `
    //             <strong>Applicant Name</strong><br />
    //             <small>${full_name}</small>
    //             <hr>
    //             <strong>Phone</strong><br />
    //             <small>${phone}</small>
    //             <hr>
    //             <strong>Email</strong><br />
    //             <small>${email}</small>
    //             <hr>
    //             <strong>Instrument</strong><br />
    //             <small>Piano:${instruments.piano}</small><br />
    //             <small>Guitar:${instruments.guitar}</small><br />
    //             <small>Bass guitar:${instruments.bass}</small><br />
    //             <small>Drums:${instruments.drums}</small><br />
    //             <small>Vocals:${instruments.vocals}</small><br />
    //             <small>Toddlers:${instruments.toddlers}</small>
    //             <hr>
    //             <strong>Type of work</strong><br />
    //             <small>Permanent:${type_of_work.permanent}</small><br />
    //             <small>Substitute:${type_of_work.substitute}</small>
    //             <hr>
    //             <strong>Experience</strong><br />
    //             <small>${teaching_experience}</small>
    //             <hr>
    //             <strong>Source</strong><br />
    //             <small>${source}</small>
    //             <hr>
    //             <strong>Comments</strong><br />
    //             <small>${comments}</small>
    //             <hr>
    //         `,
    //         attachments: [{
    //             filename: resumeName,
    //             href: resumeURL
    //         }]
    //     }

        return NextResponse.json({message: "application data received"}, {status: 200})

        
        // try {
        //     await transporter.sendMail(emailOptions);
        //     console.log("try block fired in Node.js")
        //     return NextResponse.json({message: "application notice email sent successfully"}, {status: 200})
        // } catch (error) {
        //     console.log("catch block fired in Node.js")
        //     return NextResponse.json({error: "application notice email failed to send", details: error}, {status: 500})
        // }

}