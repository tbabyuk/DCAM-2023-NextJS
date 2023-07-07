"use client"

import { useEffect, useState } from "react"

// const fetchReviews = async () => {
//     const res = await fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJxzCGYLs3K4gR0hG4dhYU8mk&key=AIzaSyBsgmarEZJSDJk7FOFv13x2cbSIwoi7aH8&language=en')
//     const data = await res.json()
// } 



const Reviews = async () => {
    // const reviews = await fetchReviews()

    const [reviews, setReviews] = useState([])

    // console.log(reviews)

    // useEffect(() => {
    //     const fetchReviews = async () => {
    //         const res = await fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJxzCGYLs3K4gR0hG4dhYU8mk&key=AIzaSyBsgmarEZJSDJk7FOFv13x2cbSIwoi7aH8&language=en',{ mode: 'no-cors'})
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