# Small Business Website

See it live: [Small Business Website](https://www.dacapomusic.ca/)

## Description
A website / web app for a local music school business. The website includes a home page, lesson offerings page, rates page, teachers page, reviews page, about page, contact page, and a blog page with multiple blog articles. It is also optimized for SEO.  

## Technologies
The current version of this project was done with:
* HTML + Tailwind CSS
* React/Next.js
* Firebase Storage
* Google Reviews API

## Background & Motivation
This project was built for a local business school business. Its primary is information - i.e. to provide customers with information on the services the school offers. The other important factor was SEO. I had to optimize the website to make sure it follows best current SEO practices, so that the site ranks well on Google search. I took advantage of Next.js's server side rendering to help achieve this, along with proper metadata and og configurations.

## State of Completion
Completed and live. I continue to update and add to the site on a per-need basis. One of my next goals is to add a "Shop" section, which will be integrated with the Stripe API to allow users to make book purchases straight from the website.

## Learning Lessons & Challenges
### Google Reviews API
I enjoyed figuring out how to work with the Google Reviews API to be able to display Google Reviews for the business right on the website. The reviews are being fetched in a server component and rendered by Next.js at build time.

### Using Google Storage
This project gave me an opportunity to use Firebase Storage for the first time, which I used to store data for the multiple blog articles, such as images, audio files, etc.

## Summary
I am happy with how this project turned out and that it's currently being visited by hundreds of users every day (mostly due to the blog articles). As mentioned earlier, my next big task here is to create a "Shop" page where visitors could purchase books and other music-related products straight from the website, via Stripe.




