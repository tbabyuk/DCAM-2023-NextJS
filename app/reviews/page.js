"use client"

import { useEffect, useState } from "react"

// const fetchReviews = async () => {
//      const res = await fetch('https://.................')
//     const data = await res.json()
// } 



const Reviews = async () => {
    // const reviews = await fetchReviews()

    const [reviews, setReviews] = useState([])

    // console.log(reviews)

    // useEffect(() => {
    //     const fetchReviews = async () => {
    //         const res = await fetch('https://.................')
    //         // const res = await fetch("https://api.github.com/users/bradtraversy/repos")
    //         const data = await res.json()
    //         setReviews(data)
    //     }     
    //     fetchReviews()
    // }, [])

    return ( 
        <>
        <h2>Reviews go here</h2>
        </>
     );
}
 
export default Reviews;