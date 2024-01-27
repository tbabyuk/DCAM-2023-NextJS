import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(request) {

    const {student, parent, phone, email, instrument, lessonType, lessonDuration, lessonFrequency, preferredDays, source, comments} = await request.json()

    
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
                subject: "New Lesson Registration",
                html: `
                        <strong>Student Name</strong><br />
                        <small>${student}</small>
                        <hr>
                        <strong>Parent/Guardian Name</strong><br />
                        <small>${parent}</small>
                        <hr>
                        <strong>Phone</strong><br />
                        <small>${phone}</small>
                        <hr>
                        <strong>Email</strong><br />
                        <small>${email}</small>
                        <hr>
                        <strong>Instrument</strong><br />
                        <small>${instrument}</small>
                        <hr>
                        <strong>Lesson Type</strong><br />
                        <small>${lessonType}</small>
                        <hr>
                        <strong>Lesson Duration</strong><br />
                        <small>${lessonDuration}</small>
                        <hr>
                        <strong>Lesson Frequency</strong><br />
                        <small>${lessonFrequency}</small>
                        <hr>
                        <strong>Lesson Days</strong><br />
                        <small>Mondays: ${preferredDays.monday}</small><br />
                        <small>Tuesdays: ${preferredDays.tuesday}</small><br />
                        <small>Wednesdays: ${preferredDays.wednesday}</small><br />
                        <small>Thursdays: ${preferredDays.thursday}</small><br />
                        <small>Saturdays: ${preferredDays.saturday}</small>
                        <hr>
                        <strong>Source</strong><br />
                        <small>${source}</small>
                        <hr>
                        <strong>Comments</strong><br />
                        <small>${comments}</small>
                        <hr>
                `
            }

        try {
            await transporter.sendMail(emailOptions);
            console.log("try block fired in Node.js")
            return NextResponse.json({message: "trial notification email sent successfully"}, {status: 200})
        } catch (error) {
            console.log("catch block fired in Node.js")
            return NextResponse.json({error: "trial notification email failed to send", details: error}, {status: 500})
        }

}