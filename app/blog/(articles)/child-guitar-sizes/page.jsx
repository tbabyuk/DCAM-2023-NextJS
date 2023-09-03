import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"

export const metadata = {
    title: "An Illustrated Guide to Child Guitar Sizes | Da Capo Academy of Music",
    description: "Ukulele? Guitalele? 1/2 size? 3/4 size? What does it all mean? Learn all about child guitar sizes to help you make the right purchase decision today!",
    keywords: ["child guitar sizes", "guitars for children", "small guitars"]
}

const PostChildGuitarSizes = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="An Illustrated Guide to Child Guitar Sizes" date="July 19, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fchild_guitar_sizes_cover.jpg?alt=media&token=1524c4ed-97f0-4891-bd12-de8f606278b7" alt="Child Guitar Sizes cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64 mb-32">
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>If your child is about to start guitar lessons, you might wonder what the right guitar size for them is, given all the available options. This guide is designed to help you answer this question, with lots of other useful information to help you make the right buying decision. Read on!</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fguitar_boy%20150.png?alt=media&token=5f9bdea8-4864-4442-a19a-f76fb839081d" alt="music interval example" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>            
            </section>

            <PostHeading heading="What to look for when choosing a guitar" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fguitar_girl.png?alt=media&token=0876fbe5-5f84-4bc8-bb9f-5dd749533415" alt="music interval example" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>The right guitar must not be too big or too small for a child, must be comfortable to hold, and must allow the child to easily reach the top frets. If a child struggles to reach around the body of the guitar with one arm and/or can barely reach the frets with the other - you need a different guitar.</p>
                    </div>
                </div>
                <p className="leading-8">Ideally, you would be able to go to a physical store with your child and try out several different guitars before deciding on one. But if you are too busy to go guitar shopping, live too far away from a music store, or simply prefer to shop online - no problem! You can pretty reliably choose the correct guitar size for your child based on their age and a few other considerations that we talk about in this article.</p>          
            </section>

            <PostDivider />

            <PostHeading heading="Your Options" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <p className="leading-8 mb-8">The four most popular options for child size guitars (from smallest to biggest) are the ukulele, guitalele, 1/2 size, and 3/4 size guitars. At around age 12, most children are grown enough to start using the full size guitar. Some manufacturers also offer a 1/4, 1/8  and 7/8 size guitars, but there are not very common and the sizes described here are entirely suitable and even preferable alternatives.</p>

                <p className="leading-8 mb-10">Having said that - let's take a closer look at our options.</p>       

                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fguitar_comparison.jpg?alt=media&token=2a0f31d9-e883-42e4-89c9-74bce1ddca05" alt="comparison of guitar sizes" style={{width: "400px"}} className="rounded-md" />
                    <figcaption className="text-gray-500"><small>A. ukulele | B. guitalele | C. 1/2 size guitar | D. 3/4 size guitar | E. full size guitar</small></figcaption>
                </figure>
                <p className="mb-10">Use the table below to tell you the approximate age range for each type of guitar, along with length specifications. Although children can differ quite a bit in size, the guidelines in this table will definitely work for most.</p>
                <table className="mx-auto bg-gray-100 w-full md:w-[50%] blog-table mb-14">
                    <thead>
                        <tr>
                            <th>Child's Age</th>
                            <th>Recommended Guitar</th>
                            <th>Guitar Size</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>2-5</td>
                            <td>ukulele</td>
                            <td>~ 21 in (54 cm)</td>
                        </tr>
                        <tr>
                            <td>3-5</td>
                            <td>guitalele</td>
                            <td>~ 28 in (71 cm)</td>
                        </tr>
                        <tr>
                            <td>5-8</td>
                            <td>1/2 size</td>
                            <td>~ 34 in (86 cm)</td>
                        </tr>
                        <tr>
                            <td>8-12</td>
                            <td>3/4 size</td>
                            <td>~ 36 in (92 cm)</td>
                        </tr>
                        <tr>
                            <td>12 +</td>
                            <td>full size</td>
                            <td>~ 40 in (100 cm)</td>
                        </tr>
                    </tbody>
                </table>

                <p>Now, let's talk about each instrument in a bit more detail.</p>
            </section>
            
            <PostDivider />
            
            <PostHeading heading="Ukulele" bottom="mb-4" />
            <h3 className="text-lg text-center font-bold px-5 lg:px-36 xl:px-64 mb-20">Age group: ~ 2 - 5</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col md:flex-row mb-8">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fukulele_200.jpg?alt=media&token=63dacc55-03a4-4855-9b82-a8e3bf95dd5f" alt="picture of a ukulele" style={{width: "200px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Kala nylon-string soprano ukulele</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8 mb-8">Although technically not a guitar, the ukulele can be a great starter instrument for little kids. Children as young as 2 can start plucking away at the strings and experiment with the different sounds they make. It is small, light-weight, and uses nylon strings, which are easy on the fingers.</p>
                        <p className="leading-8">An important distinctive feature of the ukulele is that it has 4 strings as opposed to the standard 6 of the guitalele or other guitars. This definitely makes it easier for kids to play, but those who plan to move on to a guitar will eventually have to make the transition to 6 strings.</p>
                    </div>
                </div>            
                <p className="leading-8 mb-8">There are 4 main types of ukuleles: <span className="font-bold">soprano</span>, <span className="font-bold">concert</span>, <span className="font-bold">tenor</span> and <span className="font-bold">baritone</span>. Each one is slightly bigger and has a slightly different sound. The one we discuss here (see photo above) is a soprano ukulele, which is by far the most popular type and is what is considered a “standard” ukulele.</p>
                <p className="leading-8 mb-8">In addition to being a neat starter instrument for kids, the ukulele is also an instrument in its own right. Plenty of adults play the ukulele instead of guitar and really enjoy its compact size and distinctive sound.</p>
                <div className="border-2 border-gray-200 bg-green-100 p-5">
                    <p className="font-bold mb-8">Thinking of buying a ukulele? Here are our recommendations based on our students' experience and feedback:</p>
                    <p className="mb-8">A basic, cheaper option:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/Mahalo-Ukuleles-MK1-TBR-Soprano-Transparent/dp/B00MWRYZWI?crid=2CSB71PJ3TO03&keywords=Soprano%2BUkulele&qid=1669657327&qu=eyJxc2MiOiI2LjUyIiwicXNhIjoiNi4xNiIsInFzcCI6IjQuODIifQ%3D%3D&s=musical-instruments&sprefix=soprano%2Bukulele%2Cmi%2C77&sr=1-4&th=1&linkCode=sl1&tag=dcam08-20&linkId=d21b2617d7ab0aa40657a05639ed4212&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Soprano Ukulele</a> (External Link)</li>
                    </ul>
                    <p className="mb-8">A fancier, brand-name option:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/KALA-KA-S-Soprano-Mahogany-Ukulele/dp/B00172UV6S?crid=ZD1B5T9AAJJC&keywords=kala%2Bsoprano%2Bukulele&qid=1669657690&qu=eyJxc2MiOiI0LjI2IiwicXNhIjoiNC4xNSIsInFzcCI6IjIuNDIifQ%3D%3D&s=musical-instruments&sprefix=kala%2Bsoprano%2Bukulele,mi,84&sr=1-5&th=1&linkCode=sl1&tag=dcam08-20&linkId=e62459efbbed77171d2eb6cbda943a3a&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Kala KA-S Soprano Ukulele</a> (External Link)</li>
                    </ul>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Guitalele" bottom="mb-4" />
            <h3 className="text-lg text-center font-bold px-5 lg:px-36 xl:px-64 mb-20">Age group: ~ 3 - 5</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col md:flex-row mb-8">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fguitalele_200.jpg?alt=media&token=f7ca366c-3391-4f41-b2b2-53338f548a00" alt="picture of a ukulele" style={{width: "200px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Yamaha nylon-string guitalele</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8 mb-8">Another great option for little kids is the guitalele, which is ideal for 3 to 5 year-olds. The manufacturer Yamaha, who first introduced this instrument, describes it as “Half guitar, half ukulele…100% fun!”</p>
                        <p className="leading-8">As the name suggests, the guitalele is a sort of hybrid between the guitar and the ukulele. It is closer to the ukulele in the way it sounds and closer to a guitar in its more mature shape and its number of strings (6). Also like the ukulele, it uses nylon strings.</p>
                    </div>
                </div>            
                <p className="leading-8 mb-8">Although it resembles a guitar - it is actually tuned differently than a guitar - a 4th up. So, from bottom to top, the guitalele's strings are A-D-G-C-E-A as opposed to the guitar's E-A-D-G-B-E. This means that the chord shapes on a guitalele won't give you the same chords as on the guitar. Despite this, it will get your child accustomed to 6 strings.</p>
                <p className="leading-8 mb-8">Some people prefer the guitalele to the ukulele precisely because it has the standard 6 strings of a regular guitar, which makes a later transition to a guitar a bit easier.</p>
                <div className="border-2 border-gray-200 bg-green-100 p-5">
                    <p className="font-bold mb-8">Thinking of buying a guitalele? Here are our recommendations based on our students' experience and feedback:</p>
                    <p className="mb-8">A solid and reliable choice:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/gp/product/B00AC0OBYE?ie=UTF8&th=1&linkCode=sl1&tag=dcam08-20&linkId=0a008e8bf59c3c96edfab17ded46104f&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Yamaha GL Series Guitalele</a> (External Link)</li>
                    </ul>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="1/2 (half-size) Guitar" bottom="mb-4" />
            <h3 className="text-lg text-center font-bold px-5 lg:px-36 xl:px-64 mb-20">Age group: ~ 5 - 8</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col md:flex-row mb-8">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fhalf_size_200.jpg?alt=media&token=33061534-32d9-4317-931c-534ecda9ddba" alt="picture of a ukulele" style={{width: "200px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>1/2 size Denver nylon-string</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8 mb-8">Half size guitars are aimed at 5 to 8 year-olds, which makes them quite popular since many children start taking guitar lessons at this age.</p>
                        <p className="leading-8 mb-8">1/2 size guitars are tuned just like real guitars, so children get a genuine guitar experience with this instrument.</p>
                        <p className="leading-8">They come in classical (nylon strings) and acoustic (steel strings) versions, though the nylon-string versions are recommended and preferred by most for learning as they are easier on the fingers.</p>
                    </div>
                </div>            
                <p className="leading-8 mb-8">Some electric versions of the 1/2 guitar also exist on the market, though most teachers would not recommend an electric guitar at this stage (unless your child is absolutely set on one!).</p>
                <div className="border-2 border-gray-200 bg-green-100 p-5">
                    <p className="font-bold mb-8">Thinking of buying a 1/2 guitar? Here are our recommendations based on our students' experience and feedback:</p>
                    <p className="mb-8">A cheap, beginner option (30"):</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/CB-SKY-ACOUSTIC-Acoustic-instrument/dp/B07TJW9KMT?crid=1H7BSF8Q3NA53&keywords=half%2Bsize%2Bdenver%2Bnylon%2Bstring%2Bguitar&qid=1669703628&qu=eyJxc2MiOiIwLjk3IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=musical-instruments&sprefix=half%2Bsize%2Bdenver%2Bnylon%2Bstring%2Bguita,mi,100&sr=1-22&th=1&linkCode=sl1&tag=dcam08-20&linkId=e62d6c56c6bd1075cc84a9730f83ecaa&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">CB Sky Acoustic Guitar</a> (External Link)</li>
                    </ul>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="3/4 (three-quarter size) Guitar" bottom="mb-4" />
            <h3 className="text-lg text-center font-bold px-5 lg:px-36 xl:px-64 mb-20">Age group: ~ 8 - 12</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col md:flex-row mb-8">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fthree_quarter_200.jpg?alt=media&token=ab19fc40-ee86-47ba-b776-069d8028bb33" alt="picture of a ukulele" style={{width: "200px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>3/4 size Denver steel-string</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8 mb-8">The 3/4 size guitar is another very popular guitar size for young children and is best suited for 8 to 12 year-olds. As with the 1/2 size guitar, it also comes in classical, acoustic, and electric versions.</p>
                        <p className="leading-8 mb-8">The 3/4 guitar has standard guitar tuning (E-A-D-G-B-E) and, at 36″ inches, is very close in size and feel to the full size guitar.</p>
                        <p className="leading-8">Although the classical (nylon strings) version is still the preferred choice for most, some students at this stage will already begin using acoustic versions (steel strings) to start preparing their fingers for the real, full size acoustic guitar.</p>
                    </div>
                </div>            
                <p className="leading-8 mb-8">Because of its slightly smaller size, some adults actually prefer to play the 3/4 size guitar as opposed to a full size one. In fact, the famous singer/songwriter Ed Sheeran is known to prefer 3/4 size guitars.</p>
                <div className="border-2 border-gray-200 bg-green-100 p-5">
                    <p className="font-bold mb-8">Thinking of buying a 3/4 size guitar? Here are our recommendations based on our students' experience and feedback:</p>
                    <p className="mb-8">Cheaper option:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/Classical-Acoustic-Starter-Beginners-Student/dp/B07LH31N5H?crid=2KLGHFLJQRIZC&keywords=nylon%2Bstring%2Bguitar%2B3/4&qid=1669657897&qu=eyJxc2MiOiIyLjQ3IiwicXNhIjoiMS45MiIsInFzcCI6IjAuMDAifQ%3D%3D&s=musical-instruments&sprefix=nylon%2Bstring%2Bguitar%2B3/4,mi,83&sr=1-8&th=1&linkCode=sl1&tag=dcam08-20&linkId=59758f75695f83a0ddf9aad1926ab327&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">J&Z 3/4 Size Acoustic Classical Guitar</a> (External Link)</li>
                    </ul>
                    <p className="mb-8">More expensive option:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/gp/product/B00009J580?ie=UTF8&linkCode=sl1&tag=dcam08-20&linkId=adef856ef3e702a4bbb00b061e89e88c&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Yamaha 3/4 Acoustic Guitar </a> (External Link)</li>
                    </ul>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Full Size Guitar" bottom="mb-4" />
            <h3 className="text-lg text-center font-bold px-5 lg:px-36 xl:px-64 mb-20">Age group: ~ 12 +</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col md:flex-row mb-8">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Ffull_size_200.jpg?alt=media&token=efb80f62-d667-481b-a0e8-833aeee3d790" alt="picture of a ukulele" style={{width: "200px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Full size Yamaha steel-string</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8 mb-8">When we hear the word “guitar”, we usually mean a full size guitar. This is the famous instrument that many of your favourite bands and artists use and the one we usually hear on the radio or on recordings.</p>
                        <p className="leading-8 mb-8">There are numerous brands and varieties of acoustic, classical, and electric full size guitars to choose from, so you are sure to find something that appeals to your taste.</p>
                        <p className="leading-8">Except for classical versions, full size guitars mostly come with steel strings.</p>
                    </div>
                </div>            
                <div className="border-2 border-gray-200 bg-green-100 p-5">
                    <p className="font-bold mb-8">Thinking of buying a full size guitar? Here are our recommendations based on our students' experience and feedback:</p>
                    <p className="font-bold mb-8 bg-green-200">For classical (nylon strings) full size guitars:</p>
                    <p className="mb-8">Cheaper option:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/Classical-DCG-1-Beginner-Acoustic-Mahogany/dp/B07FZXJ8FX?crid=W1H8W1SYIQLQ&keywords=full%2Bsize%2Bnylon%2Bstring%2Bguitar&qid=1669702599&qu=eyJxc2MiOiIxLjgwIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=musical-instruments&sprefix=full%2Bsize%2Bnylon%2Bstring%2Bguitar,mi,88&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVDI4NjM2OTJJNlBBJmVuY3J5cHRlZElkPUEwNDQ3ODg1M1BKWEFHMVc2REVMOSZlbmNyeXB0ZWRBZElkPUEwOTYxMTA4MjBENTRYREZDVDk5ViZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&linkCode=sl1&tag=dcam08-20&linkId=8c5b182566fd124768814409c12c1641&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Donner Full Size Classical Guitar</a> (External Link)</li>
                    </ul>
                    <p className="mb-8">More pricey but reliable option:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/gp/product/B0064ZFBMW?ie=UTF8&linkCodeCheaper%2Boption:=as2&th=1&linkCode=sl1&tag=dcam08-20&linkId=6efd3bf9d3ec210073493de4282f6592&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Yamaha Full Size Classical Guitar</a> (External Link)</li>
                    </ul>
                    <p className="font-bold mb-8 bg-green-200">For acoustic (steel strings) full size guitar:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/gp/product/B00P4AEJF8?ie=UTF8&linkCode=sl1&tag=dcam08-20&linkId=7054c1bfff45ddd193ce6bcc54f5db5a&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Yamaha F325D Acoustic Guitar</a> (External Link)</li>
                    </ul>
                    <p className="font-bold mb-8 bg-green-200">For electric full size guitar:</p>
                    <p className="mb-8">Cheaper option:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/Fender-Stratocaster-Beginner-Fingerboard-Sunburst/dp/B07G4VRMWZ?crid=DBLF5N8ZPENX&keywords=squier%2Bby%2Bfender%2Belectric&qid=1669702922&qu=eyJxc2MiOiIyLjE0IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=musical-instruments&sprefix=squier%2Bby%2Bfender%2Belectri,mi,103&sr=1-8&th=1&linkCode=sl1&tag=dcam08-20&linkId=1d5a1a76bd8887ae242458881d1d72d8&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Squier by Fender Electric Guitar</a> (External Link)</li>
                    </ul>
                    <p className="mb-8">Much fancier option:</p>
                    <ul className="list-disc list-inside mb-8">
                        <li><a href="https://www.amazon.ca/gp/product/B07CTYPNL3?ie=UTF8&th=1&linkCode=sl1&tag=dcam08-20&linkId=0c686da544d06840987a021ea6bce7e6&language=en_CA&ref_=as_li_ss_tl" target="_blank" className="dcam-link font-semibold">Fender Stratocaster Electric Guitar</a> (External Link)</li>
                    </ul>
                </div>
            </section>

            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8">Figuring out the right guitar size for your child can be daunting, and we hope that we were able to simply and demystify this process for you in this guide. We wish you and your family the best of luck and lots of interesting musical adventures ahead!</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostChildGuitarSizes