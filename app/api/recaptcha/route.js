import { NextResponse } from "next/server";


export async function POST(request) {
    const {response} = await request.json()

    const verificationResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${response}`
      })

    if(!verificationResponse.ok) {
        console.log("Failed to communicate with the reCAPTCHA server")
        return NextResponse.json({
            error: "Failed to communicate with the reCAPTCHA server"
        })
    }

    const data = await verificationResponse.json();

    console.log("Logging verification response from Google:", data);

    return NextResponse.json({
        success: true,
        data: data
    })

}