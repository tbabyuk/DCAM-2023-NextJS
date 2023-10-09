import { PageTitle } from "../components/PageTitle"
import Link from "next/link"

const Policies = () => {

  return (
    <main className="policies-page">
        <PageTitle title="Policies" />
        <div className="lg:px-36 xl:px-52 py-20 mt-24 bg-gray-100 mb-10">
            <p className="mb-10">Please review our lesson policies below. These policies are signed by all of our families when they first begin lessons with us.</p>
            <ol className="list-decimal list-inside leading-8 bg-gray-100 w-fit mx-auto p-5 rounded">
                <li><Link href="#1" className="dcam-link">How our lessons work</Link></li>
                <li><Link href="#2" className="dcam-link">The term system</Link></li>
                <li><Link href="#3" className="dcam-link">PAYG (pay as you go) lessons</Link></li>
                <li><Link href="#4" className="dcam-link">Rolling enrolment cycle</Link></li>
                <li><Link href="#5" className="dcam-link">Registration fees</Link></li>
                <li><Link href="#6" className="dcam-link">Lesson cancellations and missed lessons</Link></li>
                <li><Link href="#7" className="dcam-link">Makeup lessons</Link></li>
                <li><Link href="#8" className="dcam-link">Statutory holidays and school breaks</Link></li>
                <li><Link href="#9" className="dcam-link">Being on time</Link></li>
                <li><Link href="#10" className="dcam-link">Vacations</Link></li>
                <li><Link href="#11" className="dcam-link">Tuition payments/late payments</Link></li>
                <li><Link href="#12" className="dcam-link">Teacher absent/sick/on vacation</Link></li>
                <li><Link href="#13" className="dcam-link">Lesson withdrawals</Link></li>
            </ol>
        </div>
        <div className="lg:px-36 xl:px-52 pt-20">
            <div className="mb-20" id="1">
                <h3 className="text-xl text-regRed mb-4">1. <span className="underline">How our lessons work</span></h3>
                <p>At DCAM, students attend weekly lessons based on terms, which consist of the Fall, Winter, Spring, and (optional) Summer terms (see #2). Working adults or students who are unable to commit to the term system have the option doing their lessons on our Pay-As-You-Go (PAYG) plan (see #3), which is subject to slightly different rates.</p>
            </div>
            <div className="mb-20" id="2">
                <h3 className="text-xl text-regRed mb-4">2. <span className="underline">The term system</span></h3>
                <p>Lessons at DCAM are based on terms and consist of the Fall Term (Sep - Dec), Winter Term (Jan - Mar), Spring Term (Apr - Jun) and an optional Summer Term (Jul - Aug) and operate on a rolling enrolment cycle (see #4). The total tuition cost for each term is based on weekly lessons and determined by our term per/lesson rate multiplied by the total number of lessons contained in that term. The total number of lessons in each term is calculated by DCAM beforehand and does not include lessons that fall on statutory holidays. For this reason, this number might be different depending on which day of the week your lessons fall on.</p>
            </div>
            <div className="mb-20" id="3">
                <h3 className="text-xl text-regRed mb-4">3. <span className="underline">PAYG (pay as you go) lessons</span></h3>
                <p>The PAYG plan is designed primarily for working adults who are unable to commit to our regular term system. PAYG lessons can be weekly or bi-weekly and students are required to pay for 2 lessons in advance. This helps ensure that should they not show up for their scheduled lesson (and fail to give proper cancellation notice), the teacher still gets paid for his/her time. Students in PAYG plans are expected to attend a minimum of 1 lesson every 2 weeks (official holidays/school breaks excepted). If a student does not show up to their lessons for 2 weeks in a row (DCAM-approved vacations excepted), they are automatically de-enrolled and will be subject to a $20 registration fee again should they decide to return to lessons in the future.</p>
            </div>
            <div className="mb-20" id="4">
                <h3 className="text-xl text-regRed mb-4">4. <span className="underline">Rolling enrolment cycle</span></h3>
                <p>Lessons/terms at DCAM work on a rolling-enrolment cycle, meaning that students registered for one term are assumed to be registering for the next term at the end of the current one unless timely lesson withdrawal notice is given to DCAM (see #13). Tuition for each term is due at least 1 week before the beginning of that term and latest before the first lesson. Students who interrupt their rolling-enrolment cycle by taking time off between terms (DCAM-approved vacations & summer break excepted) will be subject to our registration fee (see #5) again should they choose to return to lessons later and will most likely lose their former time-slot.</p>
            </div>
            <div className="mb-20" id="5">
                <h3 className="text-xl text-regRed mb-4">5. <span className="underline">Registration fees</span></h3>
                <p>Our registration fees are $20 per student and $10 for any additional member of the same family. Registration fees are applicable to all new students or students who have lost their “active” status by being away from lessons for over 3 weeks during regular school year (DCAM-approved vacations & summer breaks excepted).</p>
            </div>
            <div className="mb-20" id="6">
                <h3 className="text-xl text-regRed mb-4">6. <span className="underline">Lesson cancellations and missed lessons</span></h3>
                <p>Students (including PAYG students) who are unable to attend their regularly-scheduled lesson for whatever reason must inform DCAM by the following cut-off times:<br /><br /> * for weekday lessons (Mon-Fri) - 12:00 p.m. on the day of the lesson (the absolute latest)<br /> * for weekend lessons (Sat-Sun) - 10:00 p.m. on the day before the lesson (the absolute latest)<br /> <span className="italic">Note: cut-off times are different for weekend lessons because we open earlier on weekends.</span><br /><br /> These cut-off times are necessary to give DCAM enough time to notify teachers of any changes to their schedule. If timely cancellation notice is not provided and the student does not show up for their lesson, the lesson is considered forfeited and the teacher gets paid for his/her time. When timely cancellation notice is provided, a make-up lesson will be arranged for the student (see #7). Important: a maximum of 3 cancellations are permitted for every 8 lessons. Parents/students can inform DCAM of a lesson cancellation by sending an email to absences@dacapomusic.ca or info@dacapomusic.ca.</p>
            </div>
            <div className="mb-20" id="7">
                <h3 className="text-xl text-regRed mb-4">7. <span className="underline">Make-up lessons</span></h3>
                <p>Make-up lessons can be arranged only when timely cancellation notice is provided (via email or in-person only) to DCAM (see #6) and occasionally in cases of emergencies, which are evaluated by the director on a case-by-case basis. Make-up lessons are scheduled to a day and time different from the student&apos;s regularly-scheduled lesson and often with a different teacher. Although DCAM will try to remind students of any outstanding make-up lessons, it is ultimately the student&apos;s responsibility to schedule them. All make-up lessons must be completed before the end of the current term and cannot be carried over to the next term.</p>
            </div>
            <div className="mb-20" id="8">
                <h3 className="text-xl text-regRed mb-4">8. <span className="underline">Statutory holidays and school breaks</span></h3>
                <p>DCAM will be closed on statutory holidays and school breaks (except summer break, which is optional) and does not include these days in its term/payment schedule.</p>
            </div>
            <div className="mb-20" id="9">
                <h3 className="text-xl text-regRed mb-4">9. <span className="underline">Being on time</span></h3>
                <p>It is the students&apos; responsibility to arrive to their lessons on time. Teachers are not obligated to extend lesson time for a late student since they normally have another student scheduled right after. If a teacher is late for whatever reason, arrangements will be made by the admin to make up the lost time for the student at a future point.</p>
            </div>
            <div className="mb-20" id="10">
                <h3 className="text-xl text-regRed mb-4">10. <span className="underline">Vacations</span></h3>
                <p>Students planning to go on vacation are required to give a minimum of 1-week notice to DCAM and fill out a “Lesson Hold” form indicating the date of their return to lessons. This will allow DCAM to put the student&apos;s lessons on hold until their return. Students who want to reserve their time-slot while away on vacation have the option of doing so for a fee, as specified in the “Lesson Hold” form. Otherwise, DCAM cannot guarantee that their time-slot will be available when they come back. Note: if a student returns from vacation later than was indicated on the “Lesson Hold” form, the missed lesson is subject to our regular “missed lessons” policy (see #6). DCAM can accommodate a maximum of 3 weeks vacation time in the middle of regular school year (summer break not included). Students absent for more than 3 weeks in a row will be deemed inactive and subject to our registration fee (see #5) again should they choose to return to lessons later, and will most likely lose their former time-slot.</p>
            </div>
            <div className="mb-20" id="11">
                <h3 className="text-xl text-regRed mb-4">11. <span className="underline">Tuition payments/late payments</span></h3>
                <p>Lesson tuition for each term must be received by DCAM at least 1 week before the beginning of that term and latest before the first lesson. Those on a PAYG plan are required to pay for 2 lessons in advance, with the payment being due 1 day before the first lesson. Students who register for lessons mid-term will have their tuition pro-rated until the end of the ongoing term. Late payments start incurring a late penalty fee of 2% per month, from the day following the due date. DCAM reserves the right to refuse instruction to a student until a lesson payment is received. Payments to DCAM can be made in the form of an e-transfer (preferred), debit, credit, or cash.</p>
            </div>
            <div className="mb-20" id="12">
                <h3 className="text-xl text-regRed mb-4">12. <span className="underline">Teacher absent/sick/on vacation</span></h3>
                <p>If a teacher cannot make a lesson for whatever reason, students will be provided with a substitute teacher for that lesson. The same applies if a teacher is on vacation. In cases where a substitute teacher cannot be provided, the student will not lose their lesson but rather have it re-scheduled to a later date.</p>
            </div>
            <div className="mb-20" id="13">
                <h3 className="text-xl text-regRed mb-4">13. <span className="underline">Lesson withdrawals</span></h3>
                <p>Students are required to give a minimum of 1-week notice prior to withdrawing from their lessons. This ensures that DCAM is given sufficient time to re-structure its schedule and fill the vacant time-slot with another student. If timely withdrawal notice is given, a refund (in the form of an e-transfer) will be issued to the student in the amount of the cost of the remaining lessons minus a $25 early withdrawal fee. In cases of a late (less than 1 week) withdrawal notice, the student will be have the option of attending one more lesson or being charged for that lesson.</p>
            </div>
        </div>
    </main>
  )
}

export default Policies