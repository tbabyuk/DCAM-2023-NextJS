/** @type {import('next').NextConfig} */

// NOT SURE IF BELOW IS REQUIRED
const nextConfig = {}

// module.exports = nextConfig


module.exports = {
    // nextConfig,
    async redirects() {
        return [
        {
            source: "/abrsm-exams-complete-guide",
            destination: "/blog/abrsm-exams-complete-guide",
            permanent: true,
        },
        {
            source: "/the-3-easiest-debussy-pieces",
            destination: "/blog/easy-debussy-pieces",  // big change
            permanent: true,
        },
        {
            source: "/build-a-chromatic-scale",
            destination: "/blog/build-a-chromatic-scale",
            permanent: true,
        },
        {
            source: "/famous-bands-from-toronto",
            destination: "/blog/famous-toronto-bands",  // big change
            permanent: true,
        },
        {
            source: "/build-a-melodic-minor-scale",
            destination: "/blog/build-a-melodic-minor-scale",
            permanent: true,
        },
        {
            source: "/easy-clementi-sonatinas",
            destination: "/blog/easy-clementi-sonatinas",
            permanent: true,
        },
        {
            source: "/rcm-violin-repertoire-all-pieces",
            destination: "/blog/rcm-violin-repertoire-all-pieces",
            permanent: true,
        },
        {
            source: "/easy-chopin-nocturnes",
            destination: "/blog/easy-chopin-nocturnes",
            permanent: true,
        },
        {
            source: "/repeats-in-rcm-pieces",
            destination: "/blog/repeats-in-rcm-pieces",
            permanent: true,
        },
        {
            source: "/how-grace-notes-work",
            destination: "/blog/grace-notes-explained",  // big change
            permanent: true,
        },
        {
            source: "/placement-of-accidentals-in-chords",
            destination: "/blog/placement-of-accidentals-in-chords",
            permanent: true,
        },
        {
            source: "/how-to-raise-a-musical-child",
            destination: "/blog/how-to-raise-a-musical-child",
            permanent: true,
        },
        {
            source: "/easy-piano-sonatinas",
            destination: "/blog/easy-piano-sonatinas",
            permanent: true,
        },
        {
            source: "/rcm-guitar-exam-mark-guide",
            destination: "/blog/rcm-guitar-exam-mark-guide",
            permanent: true,
        },
        {
            source: "/famous-canadian-pianists",
            destination: "/blog/famous-canadian-pianists",
            permanent: true,
        },
        {
            source: "/how-to-play-a-trill-correctly-piano",
            destination: "/blog/piano-trills-explained",  // big change
            permanent: true,
        },
        {
            source: "/easy-chopin-etudes",
            destination: "/blog/easy-chopin-etudes",
            permanent: true,
        },
        {
            source: "/was-chopin-a-good-pianist",
            destination: "/blog/was-chopin-a-good-pianist",
            permanent: true,
        },
        {
            source: "/easy-beethoven-sonatas",
            destination: "/blog/easy-beethoven-sonatas",
            permanent: true,
        },
        {
            source: "/why-take-rcm-exams",
            destination: "/blog/why-take-rcm-exams",
            permanent: true,
        },
        {
            source: "/can-you-skip-rcm-levels",
            destination: "/blog/can-you-skip-rcm-levels",
            permanent: true,
        },
        {
            source: "/best-age-to-start-music-lessons",
            destination: "/blog/best-age-to-start-music-lessons",
            permanent: true,
        },
        {
            source: "/scale-fingering-piano",
            destination: "/blog/scale-fingering-piano",
            permanent: true,
        },
        {
            source: "/how-to-write-a-tie-in-music",
            destination: "/blog/how-to-write-a-tie-music-notation", //big change
            permanent: true,
        },
        {
            source: "/easy-czerny-etudes",
            destination: "/blog/easy-czerny-etudes",
            permanent: true,
        },
        {
            source: "/easy-mozart-sonatas",
            destination: "/blog/easy-mozart-sonatas",
            permanent: true,
        },
        {
            source: "/rcm-piano-etudes-all-pieces",
            destination: "/blog/rcm-piano-etudes-all-pieces",
            permanent: true,
        },
        {
            source: "/rcm-piano-repertoire-all-pieces",
            destination: "/blog/rcm-piano-repertoire-all-pieces",
            permanent: true,
        },
        {
            source: "/how-pickup-measures-work",
            destination: "/blog/pickup-measures-explained",  //big change
            permanent: true,
        },
        {
            source: "/easy-chopin-waltzes",
            destination: "/blog/easy-chopin-waltzes",
            permanent: true,
        },
        {
            source: "/child-guitar-sizes",
            destination: "/blog/child-guitar-sizes",
            permanent: true,
        },
        {
            source: "/online-vs-in-person-music-lessons",
            destination: "/blog/online-vs-in-person-music-lessons",
            permanent: true,
        },
        {
            source: "/adult-piano-student-tips",
            destination: "/blog/learning-piano-as-an-adult", //big change
            permanent: true,
        },
        {
            source: "/signs-of-musical-talent",
            destination: "/blog/signs-of-musical-talent",
            permanent: true,
        },
        {
            source: "/how-music-intervals-work",
            destination: "/blog/music-intervals-explained",  // big change
            permanent: true,
        },
        {
            source: "/rcm-violin-exam-mark-guide",
            destination: "/blog/rcm-violin-exam-mark-guide",
            permanent: true,
        },
        {
            source: "/rcm-piano-exam-mark-guide",
            destination: "/blog/rcm-piano-exam-mark-guide",
            permanent: true,
        },
        {
            source: "/actors-who-play-piano",
            destination: "/blog/actors-who-play-piano",
            permanent: true,
        },
        {
            source: "/famous-toronto-musicians",
            destination: "/blog/famous-toronto-musicians",
            permanent: true,
        },
        {
            source: "/build-a-harmonic-minor-scale",
            destination: "/blog/build-a-harmonic-minor-scale",
            permanent: true,
        },
        {
            source: "/build-a-natural-minor-scale",
            destination: "/blog/build-a-natural-minor-scale",
            permanent: true,
        },
        {
            source: "/build-a-major-scale",
            destination: "/blog/build-a-major-scale",
            permanent: true,
        },
        {
            source: "/5-best-practice-tips",
            destination: "/blog/5-best-practice-tips",
            permanent: true,
        },
        {
            source: "/rcm-exams-complete-guide",
            destination: "/blog/rcm-exams-complete-guide",
            permanent: true,
        }
        ]
    },
}

// module.exports = {
//     async redirects() {
//       return [
//         {
//           source: '/easy-chopin-etudes',
//           destination: '/blog/easy-chopin-etudes',
//         //   permanent: true,
//         },
//       ]
//     },
//   }
