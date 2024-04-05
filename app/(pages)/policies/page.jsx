import Link from "next/link"
import { PageTitle } from "@/app/components/PageTitle"

const Policies = () => {

  return (
    <main className="policies-page">
        <PageTitle title="Policies (2024)" image="/images/illustrations/policies-page-illustration.png" />
        <div className="px-5 lg:px-36 xl:px-52 py-20 bg-gray-100">
            <p className="mb-10 leading-10">Our policies are designed to make things more organized and efficient for both the school and our students. These policies must be signed by all of our families when they first begin lessons with us.</p>
            <ol className="list-decimal list-inside leading-8 bg-gray-100 w-fit mx-auto p-5 rounded">
                <li><Link href="#1" className="dcam-link">The term system</Link></li>
                <li><Link href="#2" className="dcam-link">PAYG (Pay-As-You-Go) plan</Link></li>
                <li><Link href="#3" className="dcam-link">Rolling enrolment cycle</Link></li>
                <li><Link href="#4" className="dcam-link">Registration fees</Link></li>
                <li><Link href="#5" className="dcam-link">Lesson cancellations and missed lessons</Link></li>
                <li><Link href="#6" className="dcam-link">Make-up lessons</Link></li>
                <li><Link href="#7" className="dcam-link">Statutory holidays & school breaks</Link></li>
                <li><Link href="#8" className="dcam-link">Being on time</Link></li>
                <li><Link href="#9" className="dcam-link">Vacations/Extended time off</Link></li>
                <li><Link href="#10" className="dcam-link">Tuition payments/late payments</Link></li>
                <li><Link href="#11" className="dcam-link">Teacher absent/sick/on vacation</Link></li>
                <li><Link href="#12" className="dcam-link">Lesson withdrawals</Link></li>
            </ol>
        </div>
        <div className="px-5 lg:px-36 xl:px-52 pt-20">
            <div className="mb-20" id="1">
                <h3 className="text-xl text-regRed mb-4">1. <span className="underline">The term system</span></h3>
                <p>Lessons at DCAM are based on terms and consist of the Fall Term (Sep - Dec), Winter Term (Jan - Mar), Spring Term (Apr - Jun) and an optional Summer Term (Jul - Aug). Students are billed from one term to the next according to our rolling enrolment cycle (see #3). Your total lesson tuition for each term is based on weekly lessons (one lesson per week) and is determined by your lesson duration as well as which day of the week your lesson falls on. Please download our “Payment Schedule” to see exact tuition rates for each term.</p>
            </div>
            <div className="mb-20" id="2">
                <h3 className="text-xl text-regRed mb-4">2. <span className="underline">PAYG (Pay-As-You-Go) plan</span></h3>
                <p>Our PAYG plan is an alternative to the term system. This plan has a higher per/lesson rate (+$3.00 per lesson) but offers the flexibility of stopping your lessons at any time without committing to a term and without a penalty. Students under this plan are required to pay for a final/late cancellation lesson and are then billed one lesson at a time for each of their scheduled lessons. PAYG students are still expected to attend a minimum of one lesson every two weeks (official holidays/school breaks excepted). For PAYG students who fail to attend their lesson for two weeks in a row (DCAM-approved vacations excepted), we reserve the right to stop their lessons and free up their timeslot for other students. All payments for PAYG lessons must be received prior to the lesson taking place.</p>
            </div>
            <div className="mb-20" id="3">
                <h3 className="text-xl text-regRed mb-4">3. <span className="underline">Rolling enrolment cycle</span></h3>
                <p>The term system at DCAM works on a rolling-enrolment cycle, meaning that students registered for one term are assumed to be registering for the next term at the end of the current one unless timely lesson withdrawal notice is provided (see #12). Students who interrupt their rolling-enrolment cycle by taking time off between terms (DCAM-approved vacations & summer break excepted) will be subject to our registration fee (see #4) again should they choose to return to lessons later and will most likely lose their former timeslot.</p>
            </div>
            <div className="mb-20" id="4">
                <h3 className="text-xl text-regRed mb-4">4. <span className="underline">Registration fees</span></h3>
                <p>Our standard registration fee is $20.00. For families with multiple members registering for lessons, the first family member incurs a registration fee of $20.00, with each additional family member incurring a fee of $10.00. These fees apply to all new students as well as returning students who have been inactive for more than three weeks during the regular school year (excluding DCAM-approved vacations and summer breaks).</p>
            </div>
            <div className="mb-20" id="5">
                <h3 className="text-xl text-regRed mb-4">5. <span className="underline">Lesson cancellations and missed lessons</span></h3>
                <p className="mb-8">Students (including PAYG students) who are unable to attend their regularly-scheduled lesson for whatever reason must inform DCAM by the following cut-off times: <br /> <strong>* for weekday lessons (Mon-Fri)</strong> - 11:00 a.m. on the day of the lesson (the absolute latest)<br /> <strong>* for weekend lessons (Sat-Sun)</strong> - 9:00 p.m. on the day before the lesson (the absolute latest)<br /> <em>Note: cut-off times are different for weekend lessons because we open earlier on weekends.</em></p>
                <p>These cut-off times are necessary to give DCAM enough time to notify teachers of any changes to their schedule. If timely cancellation notice is not provided and the student does not show up for their lesson, the lesson is considered forfeited and the teacher is paid for their time. When timely cancellation notice is provided, a make-up lesson will be arranged for the student (see #6). A maximum of three cancellations are permitted for every 8 lessons. Parents/students must inform DCAM of any lesson cancellations by sending an email to <strong>info@dacapomusic.ca</strong>. <span className="underline">Only emailed lesson cancellations are accepted.</span></p>
            </div>
            <div className="mb-20" id="6">
                <h3 className="text-xl text-regRed mb-4">6. <span className="underline">Make-up lessons</span></h3>
                <p>Make-up lessons can be arranged only when timely cancellation notice is provided to DCAM (see #5) and occasionally in cases of emergencies which are evaluated by the director on a case-by-case basis. Make-up lessons are scheduled to a day and time different from the student&apos;s regular lesson timeslot and often with a different teacher. It is the student&apos;s responsibility to schedule and complete any outstanding makeup lessons by the end of the ongoing term. <span className="underline">All make-up lessons must be completed before the end of the ongoing term and cannot be carried over to the next term.</span></p>
            </div>
            <div className="mb-20" id="7">
                <h3 className="text-xl text-regRed mb-4">7. <span className="underline">Statutory holidays & school breaks</span></h3>
                <p>DCAM will be closed on statutory holidays and school breaks (except summer break, which is optional) and these days are not included in the lesson tuition.</p>
            </div>
            <div className="mb-20" id="8">
                <h3 className="text-xl text-regRed mb-4">8. <span className="underline">Being on time</span></h3>
                <p>It is the student&apos;s responsibility to arrive to their lessons on time. Teachers are not obligated to extend lesson time for a late student as they normally have another student scheduled right after. If a teacher is late for whatever reason, the time by which he/she is late will be added to the student&apos;s future lesson.</p>
            </div>
            <div className="mb-20" id="9">
                <h3 className="text-xl text-regRed mb-4">9. <span className="underline">Vacations/Extended time off</span></h3>
                <p>Students who plan to go on vacation or be away from lessons for three to four consecutive weeks during the regular school year are required to give a minimum of one-week notice to DCAM and fill out a “Lesson Hold” form indicating the date of their planned return to lessons. This allows DCAM to put the student&apos;s lessons on hold until their return. Students will also be given the option to reserve their lesson timeslot for a fee, as specified in the “Lesson Hold” form. Unless a timeslot is reserved, DCAM cannot guarantee that it will be available when they come back. If a student returns from vacation later than was indicated on the “Lesson Hold” form, the missed lesson is subject to our regular “missed lessons” policy (see #5). DCAM can accommodate a maximum of four weeks&apos; absence during a regular school year (summer break not included). Students absent for more than four weeks in a row will be deemed inactive and subject to our registration fee (see #4) again should they choose to return to lessons later and will most likely lose their former timeslot.</p>
            </div>
            <div className="mb-20" id="10">
                <h3 className="text-xl text-regRed mb-4">10. <span className="underline">Tuition payments/late payments</span></h3>
                <p>Lesson tuition payments for each term must be made by the date indicated on the invoice. Students who register for lessons in the middle of a term will have their tuition pro-rated, meaning they will only pay for the number of lessons remaining in the term. Late payments start incurring a late penalty fee of 2% per month from the day following the due date. DCAM reserves the right to refuse instruction to a student until lesson payment is received. Tuition or PAYG payments to DCAM can be made in the form of an e-transfer (preferred), debit, credit, cheque, or cash.</p>
            </div>
            <div className="mb-20" id="11">
                <h3 className="text-xl text-regRed mb-4">11. <span className="underline">Teacher absent/sick/on vacation</span></h3>
                <p>If a teachers cannot make a lesson for whatever reason, students will be provided with a substitute teacher for that lesson. The same applies if a teacher is on vacation. In cases where a substitute teacher cannot be provided, the student will have their lesson re-scheduled to a later date.</p>
            </div>
            <div className="mb-20" id="12">
                <h3 className="text-xl text-regRed mb-4">12. <span className="underline">Lesson withdrawals</span></h3>
                <p>Students are required to give a minimum of one-week notice prior to withdrawing from their lessons. This ensures that DCAM is given sufficient time to re-structure its schedule and fill the vacant timeslot with another student. If timely withdrawal notice is given, a refund (in the form of an e-transfer) will be issued to the student in the amount of the cost of the remaining lessons minus a $25 early withdrawal fee. In cases of a late (less than one week) withdrawal notice, the student will have the option of attending one more lesson or being charged for that lesson.</p>
            </div>
        </div>
    </main>
  )
}

export default Policies