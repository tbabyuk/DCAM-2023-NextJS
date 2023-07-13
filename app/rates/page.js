import { DownloadButton } from "../components/DownloadButton";
import { PageDivider } from "../components/PageDivider";
import { PageTitle } from "../components/PageTitle";


export const metadata = {
    title: 'DCAM | Rates',
    description: 'Our rates and term dates',
  }

const Rates = () => {
    return (
        <>
            <main className="rates-page">

                <PageTitle title="Rates" />

                <section className="rates-intro px-5 lg:px-36 xl:px-52 mt-20">
                    <p>
                        Lessons at Da Capo Academy of Music are based on the school system and are divided into Fall, Winter, Spring, and an optional Summer term. Your exact rates for each term will depend on which day of the week your lesson falls on, as some days are affected by statutory holidays or there are simply less of them in a given term.<br /><br />Please review below our policies surrounding lessons/payments and click the download button to view payment schedules for each term.<br /><br />*Students not wishing to follow the term system may opt to study on a Pay-As-You-Go basis. Rates for Pay-As-You-Go lessons are separate and can be viewed <a href="payg-2022-2023.pdf" download className="text-lightBlue underline">here</a>.<br /><br />*Lessons with our highest-qualified and most-experienced teachers are subject to our PREMIUM RATES, which you can find <a href="premium-2022-2023.pdf" download className="text-lightBlue underline">here</a>.
                    </p>
                </section>
                <PageDivider />

                <section className="private-lesson-rates px-5 lg:px-36 xl:px-52">
                    <h2 className="font-ovo text-2xl text-regRed font-semibold text-center pb-3">PRIVATE LESSON RATES</h2>
                    <h4 className="font-ovo text-xl text-regRed text-center">2022-2023 ACADEMIC YEAR | Fall, Winter, Spring Terms</h4>
                    <DownloadButton text="Download Payment Schedule" file="private-2022-2023.pdf" />
                    <h4 className="font-ovo text-xl text-regRed text-center">Summer 2023 Term</h4>
                    <DownloadButton text="Download Payment Schedule" file="private-summer-2023.pdf" />
                    <h4 className="font-ovo text-xl text-regRed font-semibold pb-3">PRIVATE LESSONS (one-on-one):</h4>
                    <ul className="text-sm">
                        <li>* there is no sales tax on music lessons – rates are exactly as indicated</li>
                        <li>* payment for each term must be made in full before the first lesson of that term</li>
                        <li>* lessons may be discontinued with one week’s notice. Refund will be provided minus $25 early withdrawal fee</li>
                        <li>* all lessons must be completed by the end of each term and cannot be carried over to the next term</li>
                        <li>* students are welcome to register for lessons mid-term, your lessons will simply be pro-rated to the end of ongoing term</li>
                        <li>* families with more than one child enrolled in private lessons qualify for our Family Discount</li>
                        <li>* a $20 registration fee applies to all new students or students who return to lessons after being inactive</li>
                    </ul>
                </section>
                <PageDivider />

                <section className="semi-private-lesson-rates px-5 lg:px-36 xl:px-52">
                    <h2 className="font-ovo text-2xl text-regRed font-semibold text-center pb-3">SEMI-PRIVATE LESSON RATES</h2>
                    <h4 className="font-ovo text-xl text-regRed text-center">2022-2023 ACADEMIC YEAR | Fall, Winter, Spring Terms</h4>
                    <DownloadButton text="Download Payment Schedule" file="semi-private-2022-2023.pdf" />
                    <h4 className="font-ovo text-xl text-regRed text-center">Summer 2023 Term</h4>
                    <DownloadButton text="Download Payment Schedule" file="semi-private-summer-2023.pdf" />
                    <h4 className="font-ovo text-xl text-regRed font-semibold pb-3">SEMI-PRIVATE LESSONS (two students per teacher):</h4>
                    <ul className="text-sm">
                        <li>* There is no sales tax on music lessons – rates are exactly as indicated</li>
                        <li>* Payment for each term must be made in full before the first lesson of that term</li>
                        <li>* Lessons may be discontinued with one week’s notice. Refund will be provided minus $25 early withdrawal fee</li>
                        <li>* All lessons must be completed by the end of each term and cannot be carried over to the next term</li>
                        <li>* Students are welcome to register for lessons mid-term, your lessons will simply be pro-rated to the end of ongoing term</li>
                        <li>* Unlike for private lessons, the Family Member discount cannot be applied to Semi-Private Lessons</li>
                        <li>* A $20 registration fee applies to all new students or students who return to lessons after being inactive</li>
                    </ul>
                </section>
            </main>
        </>
     );
}
 
export default Rates;