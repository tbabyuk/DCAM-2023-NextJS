import { NextResponse } from 'next/server'




export async function GET(request, response) {

    return NextResponse.json({message: "you're trying to access the success page"})

}