import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"
import { PostSubheading } from "@/app/components/PostSubheading"


export const metadata = {
    title: "Learning Piano as an Adult | Da Capo Academy of Music",
    description: "The myth about adult piano learners, advantages of learning piano as an adult, five tips for success, recommended books for adult piano learners, and more!",
    keywords: ["adult piano student advice", "piano tips for adults"],
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Learning Piano as an Adult | Da Capo Academy of Music",
        description: "The myth about adult piano learners, advantages of learning piano as an adult, five tips for success, recommended books for adult piano learners, and more!",
        url: "https://dacapomusic.ca/blog/learning-piano-as-an-adult",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-07-10T03:26:36+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Fadult_piano_student_tips_cover.jpg?alt=media&token=03b5ed4d-e655-469d-8329-c4e5eb44987c&_gl=1*q22h3e*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMjkxOTYuMjguMC4w",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostLearningPianoAsAnAdult = () => {

  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="Learning Piano as an Adult: Tips and Advice" date="July 9, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Fadult_piano_student_tips_cover.jpg?alt=media&token=03b5ed4d-e655-469d-8329-c4e5eb44987c&_gl=1*q22h3e*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMjkxOTYuMjguMC4w" alt="adult piano student tips cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24">
                <p className="mb-6">Sure starting to learn piano as a child may have its benefits, but not all of us had parents who made us take piano lessons as kids. Or, perhaps some of us started with another instrument but have always secretly wanted to play the piano, and now we&apos;ve finally found time to do it! Whatever your situation was - good on you for finally making the decision to take up piano! Piano is truly an amazing instrument (I am not biased, I swear!) that can bring immeasurable joy and pleasure to your life and learning it is worth it no matter what age you are.</p>
                <p>In this guide, I aim to dispel the common myth surrounding adult piano learners and arm you with advice and resources that, if used, will make your piano learning faster, funner, and more effective! Above all - I wish you luck and success with your piano studies!</p>
            </section>

            <SectionDivider />

            <PostHeading heading="Myth: I am too old to start learning piano" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8 flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Fmyth.png?alt=media&token=c610112d-ba65-4378-82a3-f5dc75e642db&_gl=1*omfqn4*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMjk3MDAuNTIuMC4w" alt="dictionary definition" style={{width: "200px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10">
                        <p>This is the most common (and unproductive) argument that many adults use to justify not starting to learn the piano. If you have found yourself with this thought, ask yourself: why do I want to learn the piano? Is it to become a concert pianist? Well, in that case yes, it might be a bit late for that. Or, as is the case with most people, maybe you want to learn mainly for yourself and perhaps to be able to entertain family members and friends? In that case, age is absolutely not a factor. Just as not everyone who plays soccer becomes a professional soccer player, so not everyone who plays the piano becomes a professional pianist. Do it for yourself!</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Advantages to learning piano as an adult" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-14">When it comes to learning the piano (or any other instrument for that matter), adults in fact have several advantages that children don&apos;t. Here are some of the most important ones:</p>
                <PostSubheading subheading="1. You are learning because you want to, not because you are being made to" bottom="mb-6" />
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>Most children take lessons because their parents make them, not necessarily because they asked for them. With adults, the situation is reversed. This is an important distinction as it means you are going to be motivated to learn, which increases your chances of success.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Fdesire.png?alt=media&token=e23622fd-f22f-445c-99c6-f04583333a92&_gl=1*hr0tr7*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMzAzNzUuNTQuMC4w" alt="desire to learn" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>            
                <PostSubheading subheading="2. You are more focused and disciplined (hopefully)" bottom="mb-6" />
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>Your experience and maturity have given you time to develop these two qualities, which most children do not have yet. Combined with the fact that you are learning of your own free will, this is another powerful advantage that is on your side.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Ffocus.png?alt=media&token=5489e644-b1fe-410a-b857-76b4931df947&_gl=1*cbqein*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMzA3NTIuNjAuMC4w" alt="an archery target representing focus" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>            
                <PostSubheading subheading="3. You are capable of understanding complex and abstract concepts" bottom="mb-6" />
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>This means you will be much better at understanding musical concepts and directions that your teacher will be throwing at you. Music teachers appreciate adults learners because they simply don&apos;t require as much explanation as children do.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Fsmart.png?alt=media&token=edb58e5a-c4ac-4551-a8c7-9bd6a9e340e4&_gl=1*eyn1kp*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMzA2ODguMjcuMC4w" alt="a man lost in thought" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>            
            </section>

            <PostDivider />

            <PostHeading heading="My top 5 tips for adult piano students" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-14">These tidbits of advice is what I like to share with my own adult students in order to keep them positive, motivated, and focused on their goal. They are all a result of my own experience teaching piano to adults.</p>
                <PostSubheading subheading="1. Get into the habit of regular practice" bottom="mb-6" />
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10">
                        <p>Here is a shocking fact: the most successful students are those who make practicing a routine. If you are serious about learning the piano, you can find at least 20 minutes a day (or every other day if you are super busy) to practice. Remember: shorter practice sessions 4 or 5 times a week yield much better results than longer practice sessions once or twice a week.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Fpractice.png?alt=media&token=1b66ed3d-0b45-4d31-8ae7-39b8238681d8&_gl=1*s7prbw*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMzEyNzEuNTUuMC4w" alt="an alarm clock representing discipline" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>            
                <PostSubheading subheading='2. Don&apos;t feel discouraged if you sound "childish" at the piano' bottom="mb-6" />
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <p>You may be/have been an expert at your job, but at the piano you are complete beginner.  Do not let this fact discourage you in any way from learning. Know that it takes time to get to the level where you can play the pieces you have always wanted to play and be ready to stick it out to the end.</p>
                </div>            
                <PostSubheading subheading="3. Don't feel you have to learn everything as quickly as possible" bottom="mb-6" />
                <div className="bio flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Fstress.png?alt=media&token=2aed294a-105f-4c5d-be44-ebac674f9f80&_gl=1*11fjj40*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMzEzNzYuNTYuMC4w" alt="a woman with her hand to her forehead, frustrated" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10">
                        <p>Sure, you are an adult and you might feel pressure to learn as fast as you can to "catch up". But this kind of attitude is often unproductive and can lead to feelings of anxiety and burnout. In addition, it might make you try and take short-cuts at the piano, skipping over material that is fundamental to the development of proper technique. Remember the answer to the good old question about how to eat an elephant: “one bite at a time”.</p>
                    </div>
                </div>            
                <PostSubheading subheading="4. Don't compare yourself to other piano players" bottom="mb-6" />
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <p>This is an axiom that applies to many aspects of life, but in learning an instrument it&apos;s especially relevant. It is easy to feel discouraged or inferior after watching a YouTube video of a concert pianist or a child prodigy. But don&apos;t let this daunt you in any way. You should only compare yourself today to yourself yesterday and be proud of the progress you are making, no matter how small.</p>
                </div>            
                <PostSubheading subheading="5. Don't hesitate to tell your teacher what you want to learn" bottom="mb-6" />
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10">
                        <p>As an adult with a formed personality, interests, and tastes, don&apos;t hesitate to be direct with your teacher about the kind of music that interests you and that you want to learn to play. Playing material that you feel passionate about is a great motivator and will also give you and your teacher a clear goal to work towards.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Fstudent_teacher.png?alt=media&token=9462f392-9192-4453-899a-0c45828b7d37&_gl=1*akaluy*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMzE2MjQuMzcuMC4w" alt="student and teacher learning" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>            
            </section>

            <PostDivider />

            <PostHeading heading="Recommended books for adult piano students" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-14">While there is nothing wrong with starting your piano journey with books designed for children, there are also many good piano books designed specifically for adult learners such as yourself. Here is one that I have used with some of my adult students and have found to be quite good.</p>

                <PostSubheading subheading="Alfred's Basic Adult Piano Course Series" bottom="mb-6" />
                <div className="bio flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fadult-piano-student-tips%2Falfred-book-series.png?alt=media&token=b811e2bd-b450-4cd2-8515-0ad53987df02&_gl=1*1eb95qu*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAyODYwMy42NC4xLjE2OTYwMzE4MDkuNTIuMC4w" alt="alfred's adult piano book series" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10">
                        <p>This series takes the “chord” approach to teaching beginners and has plenty of pieces for students to play, arranged progressively according to level of difficulty. There are a total of three books in this series, each building on the previous one. For best results, it is recommended that students work through these books with an experienced teacher.</p>
                    </div>
                </div>
                <div className="mb-20 flex flex-col justify-center items-center">
                    <p className="mb-6">You can find these books on Amazon from the following links:</p>
                    <ul className="leading-8">
                        <li className="mb-4"><a href="https://www.amazon.ca/gp/product/0882846167/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=0882846167&linkCode=as2&tag=dcam08-20&linkId=c32bb7a685da13fd5e5bda55b7b04e54" target="_blank" className="dcam-link">Alfred's Basic Adult Piano Course - Book 1</a></li>
                        <li className="mb-4"><a href="https://www.amazon.ca/gp/product/B017OBN784/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B017OBN784&linkCode=as2&tag=dcam08-20&linkId=ebc17deebdb39f2890601fe02671d297" target="_blank" className="dcam-link">Alfred's Basic Adult Piano Course - Book 2</a></li>
                        <li><a href="https://www.amazon.ca/gp/product/B017OBN7QQ/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B017OBN7QQ&linkCode=as2&tag=dcam08-20&linkId=0b5b372bab4de73e81b8eec3581b5b3c" target="_blank" className="dcam-link">Alfred's Basic Adult Piano Course - Book 3</a></li>
                    </ul>
                </div>
            </section>
            <PageBottomTrialButton />
        </main>

  )
}

export default PostLearningPianoAsAnAdult