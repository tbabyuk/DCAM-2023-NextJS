import { NextResponse } from "next/server"

// import stripe
const stripe = require("stripe")("sk_test_51NrvqIBzVRorr5QYX7X3ILvIwrMespiDXDK14KgthaosgHtnh9guKBnzU9v8GWmWTvDAxoT0vWMXWB2tHbWYtWkc00aqvuzFNh")


export async function POST(request) {
    const {items} = await request.json()


    let lineItems = [];

    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })


    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        automatic_tax: {
            enabled: true,
        },
        success_url: "http://localhost:3000/checkout/success",
        cancel_url: "http://localhost:3000/checkout/cancel"
    })

    return NextResponse.json({
        url: session.url
    })
}
