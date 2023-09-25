

import { NextResponse } from "next/server";


export async function GET(request) {


  return NextResponse.json({
    greeting: "Hello"
})
}


// export async function POST(request, response) {

//   const {age, job} = await request.json()

//   console.log("logging:", age, job)


//   return NextResponse.json({
//     greeting: "Hello to a post event!",
//     payload: {
//       age,
//       job
//     }
// })
// }




export async function POST(request, response) {

  const {data} = await request.json()

  const {amount_total} = data.object
  const {name, email, phone, address} = data.object.customer_details

  console.log("customer info:", amount_total, name, email, phone, address)



  return NextResponse.json({
    greeting: "Hello to a post event!"
})
}



