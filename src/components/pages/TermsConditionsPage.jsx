 import { colors, fonts, sectionBase, sectionTitleStyle } from '../../styles/theme';
import { SectionTag, Em } from '../ui';
import Footer from '../Footer';

const sectionWrap = {
  marginBottom: 28,
};

const sectionHeading = {
  fontFamily: fonts.display,
  fontSize: 30,
  letterSpacing: 1,
  marginBottom: 10,
};

const sectionBody = {
  fontSize: 15,
  lineHeight: 1.8,
  color: '#000',
};

export default function TermsConditionsPage({ setPage }) {
  return (
    <>
      <section style={{ ...sectionBase, paddingTop: 80 }}>
        <SectionTag>Legal</SectionTag>
        <h2 style={sectionTitleStyle}>
          NEWTRON — <Em>TERMS AND CONDITIONS</Em>
        </h2>
        <p style={{ ...sectionBody, marginBottom: 26 }}>
          <strong>A Recruitment Wing of CS</strong><br />
          Last Updated: March 1, 2026
        </p>
        <p style={{ ...sectionBody, marginBottom: 26 }}>
          <strong>Important information about using our recruitment and talent acquisition services.</strong><br /><br />
          By engaging Newtron's services — including initiating a mandate, signing a Service Agreement, or making a payment — you confirm that you have read, understood, and agreed to these Terms.
        </p>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>1. Introduction</h3>
          <p style={sectionBody}>
            Welcome to Newtron, the recruitment wing of  Newtron Talent Solutions.  ("we", "us", or "our"). By accessing and using our recruitment and talent acquisition services — including but not limited to candidate sourcing, shortlisting, executive search, volume hiring, RPO engagements, and talent advisory (collectively, the "Services") — you agree to comply with and be bound by the following Terms and Conditions (the "Terms").
            <br /><br />
            Please read these Terms carefully before engaging our Services. If you disagree with any part of these Terms, please refrain from using our Services or entering into any engagement with Newtron.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>2. Services</h3>
          <p style={sectionBody}>
            Newtron provides end-to-end recruitment and talent acquisition solutions exclusively designed for Tier 2 Small and Mid-size Enterprises (SMEs). Our Services include, but are not limited to:
            <br /><br />
            • Contingency-based hiring for individual or small-batch roles<br />
            • Executive search for senior and leadership mandates<br />
            • Volume hiring programs for bulk workforce requirements<br />
            • Recruitment Process Outsourcing (RPO) engagements<br />
            • Talent mapping, market intelligence, and advisory services
            <br /><br />
            The scope, timelines, deliverables, and fees for each engagement are defined in a separate Service Agreement or Statement of Work (SOW) executed between Newtron and the client organisation.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>3. Payment Terms</h3>
          <p style={sectionBody}>
            Payment obligations, fee structures, and billing schedules are governed by the Service Agreement specific to each engagement. General terms applicable to all clients include:
            <br /><br />
            • Contingency fees are payable upon the successful joining of a placed candidate, as defined in the relevant SOW.<br />
            • Retainer and RPO fees are payable in advance on a monthly or quarterly basis, as agreed.<br />
            • Executive search fees may be structured in tranches — on mandate initiation, shortlist delivery, and candidate joining.<br />
            • All invoices are payable within 14 calendar days of the invoice date, unless otherwise agreed in writing.<br />
            • Payments must be made via the designated bank transfer or payment gateway. All transactions are processed securely.
            <br /><br />
            Late payments may attract interest at the rate of 1.5% per month on the outstanding amount, and Newtron reserves the right to suspend active mandates until dues are cleared.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>4. Refunds, Replacements & Cancellations</h3>
          <p style={sectionBody}>
            All fees paid to Newtron are non-refundable, except as expressly provided under the replacement guarantee terms below.
            <br /><br />
            Newtron offers a 45-day replacement guarantee on contingency placements. If a placed candidate exits or is terminated for performance reasons within 45 days of their joining date, Newtron will initiate a replacement search at no additional fee, subject to the following conditions:
            <br /><br />
            • The client notifies Newtron in writing within 7 days of the candidate's exit.<br />
            • The original placement fee has been fully settled.<br />
            • The exit was not caused by structural changes, role redundancy, or salary renegotiation initiated by the client.<br />
            • The replacement guarantee applies once per placement and is non-transferable.
            <br /><br />
            Replacement guarantees for executive search, volume, or RPO engagements are governed by the terms defined in the respective Service Agreement.
            <br /><br />
            Once a search mandate is initiated and sourcing has commenced, cancellation of the mandate does not entitle the client to a refund of any retainer or initiation fees paid.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>5. Client Obligations</h3>
          <p style={sectionBody}>
            To enable Newtron to deliver effective recruitment outcomes, clients agree to:
            <br /><br />
            • Provide accurate and complete job descriptions, compensation ranges, and role requirements at the time of mandate initiation.<br />
            • Designate a single point of contact for all recruitment-related communications.<br />
            • Provide timely feedback on submitted profiles — within 5 business days of shortlist delivery.<br />
            • Schedule and conduct interviews within agreed timelines to avoid candidate drop-offs.<br />
            • Notify Newtron immediately if a role is placed internally, put on hold, or cancelled.<br />
            • Maintain confidentiality of all candidate information shared by Newtron.
            <br /><br />
            Failure to adhere to these obligations may impact delivery timelines and does not entitle the client to fee waivers or penalties against Newtron.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>6. Confidentiality</h3>
          <p style={sectionBody}>
            Both parties agree to maintain strict confidentiality of all information exchanged during the engagement, including candidate profiles, compensation data, business strategies, and proprietary methodologies.
            <br /><br />
            Clients must not share candidate information, assessments, or shortlists received from Newtron with any third party — including other recruitment agencies — without prior written consent.
            <br /><br />
            Newtron will handle all candidate data in accordance with applicable data protection laws and will not disclose candidate information to any party other than the client without the candidate's explicit consent.
            <br /><br />
            Confidentiality obligations survive the termination of the engagement for a period of two (2) years.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>7. Intellectual Property</h3>
          <p style={sectionBody}>
            All methodologies, assessment frameworks, talent mapping reports, screening tools, competency models, and other proprietary materials developed and provided by Newtron remain the exclusive intellectual property of  Newtron Talent Solutions. .
            <br /><br />
            Clients are granted a limited, non-exclusive, non-transferable licence to use deliverables provided under an active engagement solely for internal hiring purposes. Reproduction, distribution, or commercial exploitation of Newtron's proprietary tools or reports is strictly prohibited without prior written authorisation.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>8. Non-Solicitation</h3>
          <p style={sectionBody}>
            During the term of any active engagement and for a period of twelve (12) months following its conclusion, the client agrees not to directly solicit, recruit, or hire any Newtron employee, consultant, or associate without prior written consent from Newtron.
            <br /><br />
            Similarly, clients agree not to directly approach, re-engage, or bypass Newtron to hire any candidate introduced by Newtron during the engagement period — whether or not a placement fee was paid — without Newtron's written consent. A direct hire in breach of this clause will attract a fee equivalent to the applicable placement fee for that candidate.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>9. Limitation of Liability</h3>
          <p style={sectionBody}>
            Newtron endeavours to provide high-quality recruitment services and stands behind all placements with its replacement guarantee. However, to the fullest extent permitted by applicable law:
            <br /><br />
            • Newtron is not liable for any indirect, incidental, consequential, or punitive damages arising from candidate performance post-joining.<br />
            • Newtron does not guarantee that any candidate will remain employed for any specific duration beyond the replacement guarantee period.<br />
            • Newtron's total liability under any claim shall not exceed the fees paid by the client for the specific placement or service to which the claim relates.<br />
            • Newtron is not responsible for information withheld or misrepresented by candidates during the recruitment process.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>10. Governing Law & Disputes</h3>
          <p style={sectionBody}>
            These Terms and any disputes arising from or related to them are governed by and construed in accordance with the laws of India.
            <br /><br />
            Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.
            <br /><br />
            Before initiating formal legal proceedings, both parties agree to attempt resolution through good-faith negotiation for a period of 30 days from the date the dispute is first raised in writing.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>11. Changes to Terms</h3>
          <p style={sectionBody}>
            Newtron reserves the right to update or modify these Terms at any time. Changes will be effective upon publication on our website or direct communication to active clients.
            <br /><br />
            Continued use of our Services or continuation of an active engagement following notification of changes constitutes your acceptance of the revised Terms. We encourage clients to review these Terms periodically.
            <br /><br />
            For material changes affecting ongoing engagements, Newtron will provide a minimum of 14 days' written notice before changes take effect.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>12. Contact Information</h3>
          <p style={sectionBody}>
            For any queries, concerns, or requests relating to these Terms and Conditions, please contact us at:
          </p>
          <div
            style={{
              marginTop: 12,
              border: `1px solid ${colors.border}`,
              background: colors.surface,
              borderRadius: 4,
              padding: 18,
            }}
          >
            <p style={sectionBody}> Newtron Talent Solutions. </p>
            <p style={{ ...sectionBody, marginTop: 8 }}>106, First Floor, Osian Chloroplaza, Link Road, Porur. Chennai 600116</p>
            <p style={{ ...sectionBody, marginTop: 8 }}>Email: placements@newtron.in</p>
            <p style={{ ...sectionBody, marginTop: 8 }}>Phone: +91 99406 84918</p>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </>
  );
}
