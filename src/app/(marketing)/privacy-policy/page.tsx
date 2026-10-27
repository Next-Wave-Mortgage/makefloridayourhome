import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.company}, operator of ${siteConfig.name}, collects, uses, shares, and protects your personal information.`,
  openGraph: {
    title: "Privacy Policy",
    description: `How ${siteConfig.company}, operator of ${siteConfig.name}, collects, uses, shares, and protects your personal information.`,
    url: `${siteConfig.url}/privacy-policy`,
    type: "website",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      titleAccent="Privacy"
      titleRest="Policy"
      effectiveDate="August 8, 2026"
    >
      <p>
        This Privacy Policy describes how {siteConfig.company}
        {" ("}&quot;Next Wave Mortgage,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;), operator of the {siteConfig.name} website located at{" "}
        <a href={siteConfig.url}>{siteConfig.url}</a>
        {" (the "}&quot;Site&quot;), collects, uses, shares, and protects
        information about you when you visit the Site, use our calculators and
        eligibility tools, submit a form, schedule a call, or otherwise interact
        with us. {siteConfig.name} is a website operated by {siteConfig.company}
        , NMLS ID {siteConfig.contact.nmls}.
      </p>
      <p>
        By using the Site, you agree to the collection and use of information in
        accordance with this Privacy Policy and our{" "}
        <Link href="/terms-of-service">Terms of Service</Link>. If you do not
        agree, please do not use the Site.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide directly</h3>
      <p>
        When you complete an eligibility form, request information, schedule a
        call, or contact us, we may collect information such as:
      </p>
      <ul>
        <li>
          Contact information — name, email address, phone number, city, and
          state;
        </li>
        <li>
          Home-financing information — the loan program you are interested in,
          where you are in the home buying process, estimated purchase price,
          estimated credit rating range, whether you are working with a real
          estate agent, military or veteran status, property use, and similar
          details you choose to share;
        </li>
        <li>
          Scheduling information — appointment dates, times, and related notes;
        </li>
        <li>
          Communications — the contents of messages, emails, texts, and call
          notes when you communicate with us.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        When you visit the Site, we and our service providers may automatically
        collect information such as your IP address, device and browser type,
        operating system, referring URLs and UTM parameters, pages viewed, links
        clicked, approximate location, and dates and times of access. This
        information is collected through cookies, pixels, local storage, and
        similar technologies as described in Section 6 below.
      </p>
      <h3>Information from third parties</h3>
      <p>
        We may receive information about you from third parties such as
        advertising and analytics providers, real estate professionals who refer
        you to us, and publicly available sources, and we may combine it with
        information we already have.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>
          Respond to your inquiries and evaluate the loan programs, down payment
          assistance programs, and financing options you may be eligible for;
        </li>
        <li>
          Contact you about your inquiry, including scheduling, confirming, and
          reminding you of consultations;
        </li>
        <li>
          Provide, operate, maintain, and improve the Site, our tools, and our
          services;
        </li>
        <li>
          Send you marketing and informational communications about products,
          programs, rates, and services that may interest you, where permitted
          by law and consistent with your choices;
        </li>
        <li>
          Measure and improve the performance of our marketing and advertising;
        </li>
        <li>Detect, prevent, and address fraud, abuse, and security issues;</li>
        <li>
          Comply with legal, regulatory, licensing, and recordkeeping
          obligations that apply to mortgage professionals;
        </li>
        <li>
          Enforce our <Link href="/terms-of-service">Terms of Service</Link> and
          protect our legal rights.
        </li>
      </ul>

      <h2>3. Consent to Calls and Text Messages</h2>
      <p>
        When you submit a form on the Site that includes your phone number, you
        provide your express written consent to receive customer-care calls and
        SMS/MMS text messages from Next Wave Mortgage at the number provided,
        including calls and texts placed using automated technology and
        AI-assisted or artificial/prerecorded voice, even if your number is on a
        federal, state, or company Do Not Call list. Messages may include
        consultation confirmations and reminders, answers to your questions, and
        secure application links.
      </p>
      <ul>
        <li>Message frequency varies.</li>
        <li>Message and data rates may apply.</li>
        <li>
          Reply <strong>STOP</strong> to any text message to opt out, or reply{" "}
          <strong>HELP</strong> for help.
        </li>
        <li>
          Consent is not a condition of purchasing any property, goods, or
          services, and is not a condition of loan approval.
        </li>
        <li>
          You may also opt out of calls or texts at any time by contacting us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>{" "}
          or {siteConfig.contact.phone}.
        </li>
      </ul>
      <p>
        If you opt in to our text message program (for example, when requesting
        a consultation at{" "}
        <Link href="/florida-updates">
          makefloridayourhome.com/florida-updates
        </Link>
        ), we collect your name, mobile phone number, and a record of your
        consent (the date, time, and page where you opted in), and we use that
        information solely to send you the messages described above — such as
        appointment confirmations and reminders — and to honor your opt-out
        requests.
      </p>
      <p>Mobile carriers are not liable for delayed or undelivered messages.</p>
      <p>
        <strong>
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. Text messaging originator opt-in data
          and consent will not be shared with any third parties.
        </strong>
      </p>

      <h2>4. How We Share Information</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> that perform services on our
          behalf, such as website hosting, form and scheduling tools, customer
          relationship management (CRM) systems, communications platforms,
          analytics, and marketing services, under obligations to protect your
          information;
        </li>
        <li>
          <strong>Loan-related parties</strong> as needed to assist with your
          inquiry or transaction, such as lenders, investors, credit and
          verification providers, title and settlement providers, and real
          estate professionals, where appropriate and permitted by law;
        </li>
        <li>
          <strong>Professional advisors</strong> such as attorneys, auditors,
          and insurers where necessary;
        </li>
        <li>
          <strong>Regulators and legal authorities</strong> when required by
          law, regulation, licensing obligation, subpoena, court order, or other
          legal process, or to protect the rights, property, or safety of our
          company, our clients, or others;
        </li>
        <li>
          <strong>Successors</strong> in connection with a merger, acquisition,
          financing, reorganization, or sale of all or part of our business.
        </li>
      </ul>
      <p>
        <strong>
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. All the above categories exclude text
          messaging originator opt-in data and consent; this information will
          not be shared with any third parties.
        </strong>
      </p>
      <p>
        We do not sell your personal information. We do not share, sell, or
        provide your mobile phone number or messaging consent data to third
        parties or affiliates for marketing or promotional purposes.
      </p>

      <h2>5. Financial Privacy (GLBA)</h2>
      <p>
        If you apply for or obtain a financial product or service from us for
        personal, family, or household purposes, nonpublic personal information
        collected in connection with that application is also governed by the
        Gramm-Leach-Bliley Act (GLBA) and our GLBA privacy notice, which is
        provided during the application process. Where the GLBA notice and this
        Privacy Policy conflict with respect to that information, the GLBA
        notice controls.
      </p>

      <h2>6. Cookies and Tracking Technologies</h2>
      <p>
        We and our service providers use cookies, pixels, tags, local storage,
        and similar technologies to operate the Site, remember your preferences,
        analyze traffic and usage, measure marketing performance, and deliver
        relevant advertising. These may include analytics services and
        advertising platforms that collect information about your use of the
        Site over time and across websites.
      </p>
      <p>
        Most browsers let you refuse or delete cookies through your browser
        settings. If you disable cookies, parts of the Site may not function
        properly. Some browsers offer a &quot;Do Not Track&quot; signal; like
        many websites, the Site does not currently respond to Do Not Track
        signals.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We use commercially reasonable administrative, technical, and physical
        safeguards designed to protect your information against unauthorized
        access, loss, misuse, or alteration. However, no method of transmission
        over the Internet or method of electronic storage is completely secure,
        and we cannot guarantee absolute security. You provide information at
        your own risk.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain personal information for as long as reasonably necessary to
        fulfill the purposes described in this Privacy Policy, to comply with
        legal, regulatory, and licensing recordkeeping requirements that apply
        to mortgage activity, to resolve disputes, and to enforce our
        agreements. When information is no longer needed, we take reasonable
        steps to delete or de-identify it.
      </p>

      <h2>9. Your Choices and Rights</h2>
      <ul>
        <li>
          <strong>Email:</strong> You may opt out of marketing emails by using
          the unsubscribe link in any marketing email or by contacting us. We
          may still send you transactional or service-related messages.
        </li>
        <li>
          <strong>Calls and texts:</strong> You may opt out as described in
          Section 3 above.
        </li>
        <li>
          <strong>Cookies:</strong> You may manage cookies through your browser
          settings as described in Section 6 above.
        </li>
        <li>
          <strong>Access, correction, and deletion:</strong> You may request
          access to, correction of, or deletion of personal information we hold
          about you by contacting us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
          . We will honor verified requests to the extent required by applicable
          law, subject to legal retention obligations.
        </li>
      </ul>
      <p>
        Depending on where you live, you may have additional rights under state
        privacy laws (such as the Florida Digital Bill of Rights or similar laws
        in other states), including rights to know, correct, delete, or limit
        certain uses of your personal information, and the right not to be
        discriminated against for exercising those rights. Note that information
        collected in connection with financial products is generally subject to
        GLBA and may be exempt from certain state privacy law requirements. To
        exercise any right, contact us using the information in Section 14; if
        we decline a request, you may appeal by replying to our decision.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        The Site is intended for a general audience of adults and is not
        directed to children under 18. We do not knowingly collect personal
        information from children under 18. If you believe a child has provided
        us personal information, please contact us and we will delete it.
      </p>

      <h2>11. Third-Party Websites</h2>
      <p>
        The Site may contain links to third-party websites, tools, and services,
        including government program pages, review platforms, and scheduling or
        application portals. We are not responsible for the privacy practices or
        content of third parties, and this Privacy Policy does not apply to
        them. We encourage you to review the privacy policies of any third-party
        sites you visit.
      </p>

      <h2>12. Users Outside the United States</h2>
      <p>
        The Site is operated from the United States and is intended for U.S.
        residents. If you access the Site from outside the United States, you
        understand that your information will be transferred to, stored, and
        processed in the United States, where privacy laws may differ from those
        in your jurisdiction.
      </p>

      <h2>13. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the Effective Date at the top of this page and post the updated
        policy on the Site. Material changes may be highlighted on the Site or
        communicated to you where required by law. Your continued use of the
        Site after an update constitutes acceptance of the revised policy.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our privacy
        practices, or wish to exercise any privacy right, contact us at:
      </p>
      <ul>
        <li>{siteConfig.company}</li>
        <li>{siteConfig.contact.address}</li>
        <li>
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
        </li>
        <li>
          <a href={`tel:${siteConfig.contact.phone}`}>
            {siteConfig.contact.phone}
          </a>
        </li>
        <li>NMLS ID {siteConfig.contact.nmls}</li>
      </ul>
    </LegalPageShell>
  );
}
