import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(request) {

    const {student_name, parent_name, phone, email, instrument, lesson_type, lesson_duration, lesson_frequency, preferred_days, source, comments} = await request.json()


    // console.log("from API:", student_name, parent_name, phone, email, instrument, lesson_type, lesson_duration, lesson_frequency, preferred_days, source, comments)



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
                        <small>${student_name}</small>
                        <hr>
                        <strong>Parent/Guardian Name</strong><br />
                        <small>${parent_name}</small>
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
                        <small>${lesson_type}</small>
                        <hr>
                        <strong>Lesson Duration</strong><br />
                        <small>${lesson_duration}</small>
                        <hr>
                        <strong>Lesson Frequency</strong><br />
                        <small>${lesson_frequency}</small>
                        <hr>
                        <strong>Lesson Days</strong><br />
                        <small>Mondays: ${preferred_days.monday}</small><br />
                        <small>Tuesdays: ${preferred_days.tuesday}</small><br />
                        <small>Wednesdays: ${preferred_days.wednesday}</small><br />
                        <small>Thursdays: ${preferred_days.thursday}</small><br />
                        <small>Saturdays: ${preferred_days.saturday}</small>
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