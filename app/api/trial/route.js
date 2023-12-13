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


        const emailOptions1 =
            {
                from: "info@dacapomusic.ca",
                to: "info@dacapomusic.ca",
                subject: "New Trial Lesson Submission",
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

        // AUTOMATIC EMAIL SENT TO THE CLIENT, REMOVED ON 12.13.23 SINCE IT DID NOT SEEM TO GENERATE DESIRED RESULTS, I.E. ALMOST NO CUSTOMERS ACTUALLY REPLIED TO THE EMAIL, NOR DID IT HELP TO CONVERT -TB

        // const emailOptions2 =
        //     {
        //         from: "info@dacapomusic.ca",
        //         to: email,
        //         subject: `${instrument[0].toUpperCase() + instrument.slice(1)} trial for ${student[0].toUpperCase() + student.slice(1)}`,
        //         html: `
        //             <div style="min-width: 350px; width: 80%; margin: auto;">
        //                 <div style="text-align: center; padding-top: 10px; padding-bottom: 20px;">
        //                     <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2FDC%20-%20rounded%20-%20red%20-%20horizontal%20-%20small.png?alt=media&token=e41864c7-fd27-4498-84f6-9a002d676c41&_gl=1*1fsb5y5*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5Njg4MzM0NS44NS4xLjE2OTY4ODM0MTIuNjAuMC4w"
        //                     alt="dcam logo" width="200px" />
        //                 </div>
        //                 <p>Hi ${parent[0].toUpperCase() + parent.slice(1)}!<br /><br />
        //                 Thank you for submitting a trial lesson request for ${instrument} on our website!<br /><br />
        //                 We have received your submission and will get in touch over the next 1-2 business days.<br /><br />
        //                 Meanwhile, it would be helpful for us to get a bit more information from you, which would help us with scheduling your trial lesson.<br /><br />
        //                 Please take a moment to answer these questions and reply back to this email:<br /><br />
        //                 <ol style="font-size: 0.9rem; padding: 0; list-style-position: inside;">
        //                     <li><i>Would the lessons be for you or your child?</i></li>
        //                     <li><i>Have you had ${instrument} lessons before? If so, for how long?</i></li>
        //                     <li><i>Are you interested in doing lessons in-person at our studio (270 The Kingsway, Etobicoke) or online via Zoom?</i></li>
        //                     <li><i>What days/times would you be available for a trial lesson? Please choose days/times that would also work for your regular lessons should you decide to sign up (the more options you give us, the better!).</i></li>
        //                 </ol><br />
        //                 Thank you and we look forward to connecting with you soon!<br /><br />
        //                 p.s. Feel free to take a look at the attached PDF to learn more about how our lessons work!<br /><br /><br />
        //                 <span style="font-weight: bold">- DCAM Admin</span>
        //                 </p>
        //             </div>
        //         `,
        //         attachments: [
        //             {
        //                 filename: "dcam_info_pack_2022_2023_sm.pdf",
        //                 href: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2Fdcam_info_pack_2022_2023_sm.pdf?alt=media&token=f4dc1cb2-b619-430e-8dda-134dce7ae5e3&_gl=1*1v9cxge*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5Njg5MDUwNS44Ni4xLjE2OTY4OTA1NjQuMS4wLjA."
        //             }]
        //     }


        try {
            await transporter.sendMail(emailOptions1);
            // await transporter.sendMail(emailOptions2);
            console.log("try block fired in Node.js")
            return NextResponse.json({message: "trial notification email sent successfully"}, {status: 200})
        } catch (error) {
            console.log("catch block fired in Node.js")
            return NextResponse.json({error: "trial notification email failed to send", details: error}, {status: 500})
        }

}