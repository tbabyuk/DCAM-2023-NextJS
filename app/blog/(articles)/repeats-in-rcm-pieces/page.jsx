import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { PostSource } from "@/app/components/PostSource"


export const metadata = {
    title: "Should We Observe Repeats in RCM Pieces? | Da Capo Academy of Music",
    description: "Do we observe repeat signs for RCM examinations? What about Da Capo and Dal Segno signs? Here is what the Royal Conservatory says about this.",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Should We Observe Repeats in RCM Pieces? | Da Capo Academy of Music",
        description: "Do we observe repeat signs for RCM examinations? What about Da Capo and Dal Segno signs? Here is what the Royal Conservatory says about this.",
        url: "https://dacapomusic.ca/blog/repeats-in-rcm-pieces",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2022-10-22T03:10:28+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Frepeat_signs_cover.jpg?alt=media&token=c875bbad-a456-4ffd-80b4-5088f126ee6b",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostRepeatsInRCMPieces = () => {
  return (
            <main className="text-gray-700">
            <PostTitle title="Should we observe repeats in RCM pieces?" date="October 21, 2022" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Frepeat_signs_cover.jpg?alt=media&token=c875bbad-a456-4ffd-80b4-5088f126ee6b" alt="Repeats in RCM Pieces cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-14">A common question asked by students preparing for their RCM exams is whether repeat signs and other similar markings should be observed or ignored. This is the question we are going to answer once and for all in this short article, so that you are confident knowing that you are preparing for your exam in the right way. The information here refers to both Repertoire and Etudes pieces and holds true for all instruments, not just piano. So let's get started!</p>
                <PostSource source="RCM Practical Examinations Syllabus (2021), RCM Piano Syllabus (2022)" />
            </section>

            <PostHeading heading="Repeat Signs" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Frepeat_sign.PNG?alt=media&token=d2b9fe32-91fe-4dad-8bda-a406d005137c" alt="repeat sign" style={{width: "100px"}} className="rounded-md" />
                    <figcaption className="text-gray-500"><small>a repeat sign</small></figcaption>
                </figure>
                <p className="font-bold mb-6">Repeat signs in Repertoire and Etudes should be <span className="underline">ignored</span> unless stated otherwise.</p>
                <p className="leading-8 mb-10">Whenever repeat signs are to be observed, it will say so at the bottom of the first page of the piece you are preparing. See below for an example.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Frepeat_example.jpg?alt=media&token=9541f09d-0f92-4e7e-8149-35e8063b1577" alt="repeat sign" style={{width: "250px"}} className="rounded-md" />
                    <figcaption className="text-gray-500"><small>Source: RCM Level 2 Piano Repertoire (2015), "Turkish Bazaar" (p.30)
                    </small></figcaption>
                </figure>
                <p className="leading-8">At higher levels such as the Associate Diploma (ARCT) or Licentiate Diploma (LRCM), the RCM states that "repeats may be observed at the candidate's discretion, within the allotted time" <span className="italic">(RCM Piano Syllabus, 2022)</span>.</p>
            </section>

            <PostDivider />

            <PostHeading heading="Da Capo & Dal Segno Signs" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="text-center flex justify-evenly md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Fdc_al_coda.PNG?alt=media&token=4cffa092-25eb-4dc3-9911-c7f268ab763a" alt="da capo al coda sign sign" style={{width: "150px"}} className="rounded-md" />
                    </figure>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Fdc_al_fine.PNG?alt=media&token=5f8ed619-bf00-4ef7-9f43-64a2861145f9" alt="da capo al fine sign" style={{width: "150px"}} className="rounded-md" />
                    </figure>
                </div>
                <div className="text-center flex justify-evenly md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Fds_al_coda.PNG?alt=media&token=5a919348-f4bf-4a37-b317-a9504b352156" alt="dal segno al coda sign" style={{width: "150px"}} className="rounded-md" />
                    </figure>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Fds_al_fine.PNG?alt=media&token=56078873-b59a-4bc3-a351-f0acf2ea893a" alt="dal segno al fine sign" style={{width: "150px"}} className="rounded-md" />
                    </figure>
                </div>
                <p className="font-bold mb-6">Da Capo signs in Repertoire and Etudes should be <span className="underline">observed</span> unless stated otherwise.</p>
                <p className="leading-8 mb-10">In practice, you will almost always be observing Da Capo and Dal Segno signs in your pieces for examinations. It is very rare to find examples where RCM tells us not to observe them. One such rare example is illustrated below.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frepeats-in-rcm-pieces%2Fdal_segno_example.jpg?alt=media&token=dcab8293-313e-4652-913c-8e3912ae5afa" alt="dal segno sign example" style={{width: "400px"}} className="rounded-md" />
                    <figcaption className="text-gray-500"><small>Source: RCM Level 9 Piano Etudes (2022), "Atraente" (p.16)</small></figcaption>
                </figure>
            </section>

            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-6">The general motivation behind guidelines such as ignoring repeat signs is to save time during examinations. By saving time, RCM is also able to accommodate more students on a given day. Also, repeating a musical passage can be seen as superfluous on an exam since the examiner has already heard it once and was able to evaluate it the first time around.</p>
                <p className="leading-8">While observing repeat signs may hardly be felt in beginner pieces, it becomes much more noticeable with higher RCM Levels, where pieces themselves get longer and more difficult, therefore extending your exam time quite a bit. So do your best to follow the RCM guidelines as much as possible!</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostRepeatsInRCMPieces