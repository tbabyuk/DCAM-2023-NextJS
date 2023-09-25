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
        shipping_address_collection: {
            allowed_countries: ["CA"],
        },
        // shipping_options: [
        //     {
        //         shipping_rate: "shr_1NsU8nBzVRorr5QY9hRRIQHs",
        //     }
        // ],
        shipping_options: [
            {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 0,
                    currency: 'cad',
                  },
                  display_name: 'Store pickup',
                },
              },
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 1000,
                    currency: 'cad',
                  },
                  display_name: 'Ground shipping',
                  delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 5,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 7,
                    },
                  },
                },
              },
        ],
        success_url: "http://localhost:3000/checkout/success",
        cancel_url: "http://localhost:3000/checkout/cancel"
    })

    if(session) {
        console.log("logging session:", session)
    }

    return NextResponse.json({
        url: session.url
    })
}
