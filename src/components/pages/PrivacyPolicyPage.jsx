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

export default function PrivacyPolicyPage({ setPage }) {
  return (
    <>
      <section style={{ ...sectionBase, paddingTop: 80 }}>
        <SectionTag>Legal</SectionTag>
        <h2 style={sectionTitleStyle}>
          Privacy <Em>Policy</Em>
        </h2>

        <div style={sectionWrap}>
          <p style={{ ...sectionBody, textAlign: 'center', fontStyle: 'italic' }}>
            *A Recruitment Wing of  Newtron Talent Solutions. *<br />
            Last Updated: March 1, 2026
          </p>
          <p style={{ ...sectionBody, marginTop: 20 }}>
            Your privacy matters to us. This Privacy Policy explains how Newtron collects, uses, stores, and protects personal information when you engage with our recruitment and talent acquisition services.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>1. Introduction</h3>
          <p style={sectionBody}>
            Newtron, a recruitment wing of  Newtron Talent Solutions.  ("we", "us", or "our"), is committed to protecting the privacy of all individuals who interact with our services — including client organisations, hiring managers, job seekers, and candidates introduced through our recruitment process.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            This Privacy Policy applies to all personal information collected through our website, recruitment engagements, client onboarding, candidate assessments, and any other touchpoint through which we provide our Services. By engaging with Newtron, you consent to the practices described in this Policy.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>2. Information We Collect</h3>
          <p style={sectionBody}>
            Depending on your relationship with Newtron — as a client, candidate, or website visitor — we may collect the following categories of information:
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>From Clients & Hiring Managers:</strong><br />
            - Organisation name, designation, and contact details (name, work email, phone number)<br />
            - Billing and payment information (processed securely via third-party payment gateways)<br />
            - Job descriptions, compensation bands, and hiring requirements shared during mandate initiation<br />
            - Feedback and communications exchanged during the recruitment process
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>From Candidates:</strong><br />
            - Personal identification details: name, contact information, location<br />
            - Professional information: resume/CV, work history, educational qualifications, skills, and certifications<br />
            - Assessment results, interview notes, and evaluation scores generated during our screening process<br />
            - Compensation expectations and employment preferences<br />
            - References provided by or about the candidate
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>From Website Visitors:</strong><br />
            - Usage data: IP addresses, browser type, pages visited, session duration, and access timestamps<br />
            - Cookie data collected to improve site functionality and user experience (see Section 7)
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>3. How We Use Your Information</h3>
          <p style={sectionBody}>
            We use the information we collect for the following purposes:
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>For Clients:</strong><br />
            - To onboard your organisation and set up recruitment mandates<br />
            - To process invoices and payments for Services rendered<br />
            - To communicate regarding active mandates, shortlists, interview scheduling, and feedback<br />
            - To deliver talent mapping reports, market intelligence, and advisory outputs<br />
            - To improve our service quality based on engagement outcomes
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>For Candidates:</strong><br />
            - To evaluate suitability for specific roles and match profiles to client requirements<br />
            - To share your profile with prospective employers (only with your knowledge and consent)<br />
            - To conduct reference checks, background verification, and skills assessments where applicable<br />
            - To keep you informed of relevant opportunities that match your profile<br />
            - To facilitate offer management, onboarding communication, and post-placement check-ins
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>For All Users:</strong><br />
            - To operate, maintain, and improve our website and digital platforms<br />
            - To comply with applicable legal and regulatory obligations<br />
            - To send service-related updates and, where opted in, relevant industry communications
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            We do not use your personal information for automated decision-making or profiling that produces legal or similarly significant effects without human oversight.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>4. Data Sharing and Disclosure</h3>
          <p style={sectionBody}>
            Newtron does not sell, rent, or trade your personal information to any third party for commercial purposes. We may share information in the following limited circumstances:
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>With Client Organisations:</strong><br />
            Candidate profiles, assessments, and professional information are shared with client organisations exclusively for the purpose of evaluating candidates for specific open roles. Clients are bound by confidentiality obligations under their Service Agreement and must not share candidate information further without consent.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>With Service Providers:</strong><br />
            We engage trusted third-party providers to support our operations, including payment processors (such as Razorpay), background verification agencies, and cloud infrastructure providers. These providers are contractually obligated to handle your data securely and use it solely to deliver their designated service.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>With Background Verification Partners:</strong><br />
            Where required as part of the recruitment process, candidate information may be shared with verification agencies to conduct employment, educational, or criminal background checks. This is done only with the candidate's explicit consent.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>For Legal Compliance:</strong><br />
            We may disclose personal information if required to do so by law, court order, or in response to valid requests from public or regulatory authorities in India.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>During Business Transitions:</strong><br />
            In the event of a merger, acquisition, or restructuring of  Newtron Talent Solutions. , personal data may be transferred as part of the business assets, subject to equivalent privacy protections.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>5. Candidate Data & Consent</h3>
          <p style={sectionBody}>
            As a recruitment firm, candidate privacy is of particular importance to us. We adhere to the following principles:
          </p>
          <ul style={{ ...sectionBody, paddingLeft: 20, marginTop: 8 }}>
            <li>Candidate profiles are shared with client organisations only for specific, disclosed roles and never distributed broadly without consent.</li>
            <li>Candidates may request to know which organisations have received their profile at any time by contacting us.</li>
            <li>We do not retain candidate information in active circulation beyond 24 months from the date of last engagement, unless the candidate consents to remain in our talent pool.</li>
            <li>Candidates may withdraw consent for their data to be used in future searches at any time by submitting a written request to placements@newtron.in</li>
          </ul>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>6. Data Security</h3>
          <p style={sectionBody}>
            Newtron implements reasonable and appropriate technical and organisational security measures to protect all personal information from unauthorised access, use, alteration, or disclosure. These include:
          </p>
          <ul style={{ ...sectionBody, paddingLeft: 20, marginTop: 8 }}>
            <li>Encrypted transmission of data via HTTPS across all digital platforms</li>
            <li>Access controls limiting data visibility to authorised Newtron personnel only</li>
            <li>Secure, access-controlled storage of candidate and client records</li>
            <li>Regular review of data handling practices and third-party vendor security standards</li>
          </ul>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            While we take data security seriously, no method of electronic transmission or storage is entirely free from risk. We cannot guarantee absolute security and encourage all users to take appropriate precautions when sharing sensitive information electronically.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            In the event of a data breach that is likely to affect your rights or interests, we will notify affected parties as required by applicable law and without undue delay.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>7. Cookies</h3>
          <p style={sectionBody}>
            Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect usage analytics. Cookies we use include:
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            <strong>Essential Cookies:</strong> Required for the website to function correctly. These cannot be disabled.<br />
            <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site, enabling us to improve performance and content.<br />
            <strong>Preference Cookies:</strong> Remember your settings and choices to personalise your experience.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            You can control or disable non-essential cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our website.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>8. Your Rights</h3>
          <p style={sectionBody}>
            Depending on applicable law, you may have the following rights regarding your personal information:
          </p>
          <ul style={{ ...sectionBody, paddingLeft: 20, marginTop: 8 }}>
            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Right to Correction:</strong> Request that inaccurate or outdated information be corrected.</li>
            <li><strong>Right to Deletion:</strong> Request that your personal information be deleted, subject to legal retention obligations.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for specific uses of your data (such as remaining in our talent pool) at any time.</li>
            <li><strong>Right to Opt Out:</strong> Unsubscribe from promotional or marketing communications at any time via the unsubscribe link in our emails or by contacting us directly.</li>
            <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format where technically feasible.</li>
          </ul>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            To exercise any of the above rights, please write to us at <strong>placements@newtron.in</strong>. We will respond to all valid requests within 30 days.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>9. Data Retention</h3>
          <p style={sectionBody}>
            We retain personal information only for as long as necessary to fulfil the purposes outlined in this Policy, or as required by law:
          </p>
          <ul style={{ ...sectionBody, paddingLeft: 20, marginTop: 8 }}>
            <li><strong>Client data</strong> is retained for the duration of the engagement and for 5 years thereafter for contractual and tax compliance purposes.</li>
            <li><strong>Active candidate profiles</strong> are retained for up to 24 months from the date of last engagement, after which they are archived or deleted unless the candidate has consented to remain in our active talent pool.</li>
            <li><strong>Website usage data</strong> is retained for up to 12 months.</li>
          </ul>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>10. Changes to This Privacy Policy</h3>
          <p style={sectionBody}>
            Newtron reserves the right to update this Privacy Policy at any time to reflect changes in our practices, legal obligations, or service offerings. Changes will be effective upon publication on our website.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            Where changes are material — particularly those affecting how we handle candidate or client data — we will notify active users via email or a prominent notice on our website with a minimum of 14 days' advance notice.
          </p>
          <p style={{ ...sectionBody, marginTop: 10 }}>
            Your continued engagement with our Services following notification of changes constitutes acceptance of the updated Privacy Policy. We encourage you to review this Policy periodically.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>11. Governing Law</h3>
          <p style={sectionBody}>
            This Privacy Policy is governed by the laws of India. Any disputes arising in connection with this Policy shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.
          </p>
        </div>

        <div style={sectionWrap}>
          <h3 style={sectionHeading}>Contact Information</h3>
          <p style={sectionBody}>
            For any queries, concerns, or requests relating to this Privacy Policy or how we handle your personal data, please contact us at:
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
