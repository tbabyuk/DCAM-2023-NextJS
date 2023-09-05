import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { PostSubheading } from "@/app/components/PostSubheading"

export const metadata = {
    title: "6 Reasons to Take RCM Exams (Royal Conservatory of Music) | Da Capo Academy of Music",
    description: "Are RCM exams right for my child? Here are our top 6 reasons why it is beneficial to take RCM exams and why you should do it!",
    keywords: ["why take rcm exams", "benefits of rcm exams"]
}

const PostWhyTakeRCMExams = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="6 Reasons to Take RCM Exams (Royal Conservatory of Music)" date="November 26, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwhy-take-rcm-exams%2Fwhy_take_rcm_exams_cover.jpg?alt=media&token=69927c65-1e36-4346-bd0d-d843bb717df8" alt="Why Take RCM Exams cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction px-5 lg:px-36 xl:px-64 mb-28">
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p className="leading-8 mb-6">If your child is studying music in Canada (or the U.S. to a lesser extent), chances are you have heard about RCM (Royal Conservatory) exams. But what exactly are these exams and are they the right choice for your child? Having gone through the RCM system myself and prepared numerous students for these exams, I have compiled for your benefit my top six reasons for doing RCM exams!</p>
                        <p>*While this article focuses on children, keep in mind that RCM exams are open to music students of all ages!*</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwhy-take-rcm-exams%2Frcm_logo.jpg?alt=media&token=7ce798f8-8073-493f-94a5-3fabd2233ea0" alt="RCM logo" style={{width: "160px"}} className="rounded-md" />
                    </figure>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="#1. Your child will get a solid, well-rounded music education" bottom="mb-10" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwhy-take-rcm-exams%2Fsmart_girl.png?alt=media&token=318880e9-1ea7-4482-88c7-86b5a0975693" alt="young student" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8">The RCM Certificate Program has been carefully designed to ensure that students get exposed to a wide variety of musical styles and genres. You can expect to play inventions, minuets, sonatinas, sonatas, and nocturnes, just to name a few. In addition, the co-requisite theory, history, and harmony exams that begin at intermediate levels help ensure that students also know about how music works and how it evolved.</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="#2. Your child will make faster progress on their chosen instrument" bottom="mb-10" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p className="leading-8">Participating in RCM examinations keeps students on their toes and forces them to practice more often in order to meet their exam goals. This means students achieve results and progress much faster on their instruments that those not partaking in an exam program.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwhy-take-rcm-exams%2Faccelerate.png?alt=media&token=b471eed6-a95a-44ae-8c3c-7169941800e2" alt="progress chart" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="#3. You get valuable feedback from professionals" bottom="mb-10" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwhy-take-rcm-exams%2Ffeedback.png?alt=media&token=67987ac5-1485-4cd7-95ab-7ef43e5f83ab" alt="teacher and student" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8">When students receive their official exam score, they also get individualized feedback from an RCM examiner, which includes detailed comments on each part of the exam. All RCM examiners are professionals in their field, so you can be sure that the feedback you get is valuable and will tell your child exactly what they need to do to improve.</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="#4. Your child will learn about discipline and goal-setting" bottom="mb-10" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p className="leading-8">Preparing for an exam is no easy task – it takes patience, discipline, and many hours of practice. This is an important lesson that children get to learn fist-hand when they partake in the RCM exam system and one that will hopefully transfer over to other aspects of their lives.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwhy-take-rcm-exams%2Fgoals.png?alt=media&token=d60cb0ea-e530-4b12-b5f4-6bdd3d7a5517" alt="achieving goals" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="#5. They make a valuable addition to applications and resumes" bottom="mb-10" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwhy-take-rcm-exams%2Fresume.png?alt=media&token=9879cff6-9762-42c1-9cc0-6a46450ebdc6" alt="resume" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8">For students who want to make music their career, having an RCM certificate will look great on music school applications and can give them an important competitive advantage. But even for those who don’t plan to pursue music professionally, they are a neat addition to any resume and are often great conversation-starters at job interviews!</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="#6. They can help your child graduate high school" bottom="mb-10" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p className="leading-8">High school students all across Canada can earn credits towards graduation with RCM exams. The specifics differ depending on the province, but in Ontario, where we are located, students can earn 2 out of the 30 credits required to graduate by successfully completing the RCM Gr. 7 and Gr. 8 practical exams along with their theory co-requisites. For information on other provinces, <a href="https://www.rcmusic.com/learning/examinations/high-school-credits-canada" target="_blank" className="dcam-link">click here</a>. For US test takers, it is up to each state/school board to decide whether to count successful completion of RCM examinations towards high school credits.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwhy-take-rcm-exams%2Fgraduate.png?alt=media&token=d25e86f3-ee08-44e4-8217-6bef831b0754" alt="high school graduate" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>
            </section>






            <PageBottomTrialButton />
        </main>

  )
}

export default PostWhyTakeRCMExams