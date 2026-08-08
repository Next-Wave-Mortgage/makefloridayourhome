import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions that govern your use of ${siteConfig.name}, operated by ${siteConfig.company}.`,
  openGraph: {
    title: "Terms of Service",
    description: `The terms and conditions that govern your use of ${siteConfig.name}, operated by ${siteConfig.company}.`,
    url: `${siteConfig.url}/terms-of-service`,
    type: "website",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      titleAccent="Terms"
      titleRest="of Service"
      effectiveDate="August 8, 2026"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use
        of the {siteConfig.name} website located at{" "}
        <a href={siteConfig.url}>{siteConfig.url}</a>
        {" (the "}&quot;Site&quot;), including its content, calculators,
        eligibility tools, forms, and scheduling features (collectively, the
        &quot;Services&quot;). The Site is operated by {siteConfig.company}
        {" ("}&quot;Next Wave Mortgage,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;), NMLS ID {siteConfig.contact.nmls}.
      </p>
      <p>
        <strong>
          By accessing or using the Site, you agree to be bound by these Terms
          and our <Link href="/privacy-policy">Privacy Policy</Link>. If you do
          not agree, do not use the Site.
        </strong>
      </p>

      <h2>1. Eligibility to Use the Site</h2>
      <p>
        You must be at least 18 years old and able to form a binding contract to
        use the Services. By using the Site, you represent that you meet these
        requirements. The Site is intended for residents of the United States,
        and the mortgage products discussed relate primarily to properties
        located in Florida.
      </p>

      <h2>2. No Offer to Lend; No Commitment</h2>
      <p>
        Nothing on this Site is an offer to enter into an agreement, a loan
        approval, a rate quote, or a commitment to lend. Not all applicants will
        qualify. All loan programs, rates, terms, fees, and program availability
        — including down payment assistance and state or local programs — are
        subject to change without notice and are subject to credit approval,
        property approval, underwriting guidelines, program funding
        availability, and other restrictions and limitations.{" "}
        {siteConfig.company} is not affiliated with any government agency, and
        the materials on this Site are not from, and were not approved by, VA,
        HUD, FHA, USDA, or any other government agency.
      </p>

      <h2>3. Informational Purposes Only; Not Advice</h2>
      <p>
        The content on the Site — including articles, guides, program
        descriptions, rate information, and calculator outputs — is provided for
        general informational and educational purposes only. It is not
        financial, investment, legal, tax, accounting, or credit-repair advice,
        and it should not be relied on as such. You should consult qualified
        professionals about your specific situation before making financial
        decisions. Third-party program details (such as government assistance
        programs) are summarized from sources we believe reliable but may change
        or contain inaccuracies; the administering agency&apos;s official terms
        always control.
      </p>

      <h2>4. Calculators, Eligibility Tools, and Estimates</h2>
      <p>
        Calculators and eligibility tools on the Site produce estimates based on
        the information you enter and on general assumptions. Results are
        hypothetical, are not a prequalification, preapproval, or guarantee of
        eligibility, assistance amounts, rates, or payments, and may differ
        materially from actual loan terms. Actual eligibility and terms can only
        be determined through a formal application and underwriting process.
      </p>

      <h2>5. Consent to Be Contacted</h2>
      <p>
        When you submit a form on the Site that includes your phone number, you
        provide your express written consent to receive customer-care calls and
        SMS/MMS text messages from Next Wave Mortgage at the number provided,
        including through automated technology and AI-assisted or
        artificial/prerecorded voice, even if you are on a Do Not Call list.
        Messages may include consultation confirmations and reminders, answers
        to your questions, and a secure application link. Message frequency
        varies, and message and data rates may apply. Reply STOP to opt out or
        HELP for help. Consent is not a condition of purchase. See Section 3 of
        our <Link href="/privacy-policy">Privacy Policy</Link> for full details,
        including how to opt out.
      </p>

      <h2>6. Electronic Communications</h2>
      <p>
        By using the Site or providing your contact information, you consent to
        receive communications from us electronically, including by email, text
        message, and notices posted on the Site, and you agree that all
        agreements, notices, disclosures, and other communications we provide to
        you electronically satisfy any legal requirement that such
        communications be in writing.
      </p>

      <h2>7. Acceptable Use</h2>
      <p>You agree that you will not:</p>
      <ul>
        <li>
          Use the Site for any unlawful, fraudulent, or malicious purpose, or
          submit false, misleading, or third-party information without
          authorization;
        </li>
        <li>
          Interfere with or disrupt the Site, its servers, or its security
          features, or attempt to gain unauthorized access to any systems or
          data;
        </li>
        <li>
          Use robots, scrapers, crawlers, or other automated means to access,
          copy, or harvest content or data from the Site without our prior
          written permission;
        </li>
        <li>
          Reproduce, distribute, modify, create derivative works from, or
          commercially exploit any Site content except as expressly permitted;
        </li>
        <li>
          Frame or mirror the Site, misrepresent your affiliation with us, or
          use the Site to transmit malware or spam.
        </li>
      </ul>
      <p>
        We may suspend or terminate your access to the Site at any time, with or
        without notice, for any conduct we believe violates these Terms or is
        otherwise harmful.
      </p>

      <h2>8. Information You Submit</h2>
      <p>
        You represent that any information you submit through the Site is
        accurate, current, and about yourself (or submitted with proper
        authorization), and you agree to keep it updated. You are responsible
        for the accuracy of the information you provide, and you acknowledge
        that estimates and communications based on inaccurate information may be
        unreliable.
      </p>

      <h2>9. Intellectual Property</h2>
      <p>
        The Site and all of its content — including text, articles, graphics,
        logos, images, page designs, tools, and software — are owned by or
        licensed to {siteConfig.company} and are protected by copyright,
        trademark, and other intellectual property laws. We grant you a limited,
        revocable, non-exclusive, non-transferable license to access and use the
        Site for your personal, non-commercial use. All rights not expressly
        granted are reserved. &quot;{siteConfig.name}&quot; and associated logos
        may not be used without our prior written consent.
      </p>

      <h2>10. Third-Party Websites and Services</h2>
      <p>
        The Site may link to or embed third-party websites, tools, and services,
        including government program pages, review platforms, scheduling tools,
        and application portals. We do not control and are not responsible for
        third-party content, products, services, or privacy practices. Your use
        of third-party sites and services is at your own risk and subject to
        their own terms and policies.
      </p>

      <h2>11. Disclaimer of Warranties</h2>
      <p>
        THE SITE AND ALL CONTENT, TOOLS, AND SERVICES ARE PROVIDED ON AN
        &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES
        OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW,
        WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
        NON-INFRINGEMENT, AND ANY WARRANTIES THAT THE SITE WILL BE
        UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES, OR THAT CONTENT
        (INCLUDING RATES, PROGRAM DETAILS, AND CALCULATOR RESULTS) IS ACCURATE,
        COMPLETE, OR CURRENT.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW,{" "}
        {siteConfig.company.toUpperCase()}, ITS OWNERS, OFFICERS, EMPLOYEES,
        AGENTS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR
        FOR ANY LOSS OF PROFITS, REVENUE, DATA, USE, GOODWILL, OR OPPORTUNITY,
        ARISING OUT OF OR RELATING TO YOUR USE OF (OR INABILITY TO USE) THE SITE
        OR ITS CONTENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO
        THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY FOR
        ALL CLAIMS ARISING OUT OF OR RELATING TO THE SITE OR THESE TERMS WILL
        NOT EXCEED ONE HUNDRED U.S. DOLLARS ($100). SOME JURISDICTIONS DO NOT
        ALLOW CERTAIN LIMITATIONS, SO SOME OF THESE LIMITATIONS MAY NOT APPLY TO
        YOU; IN THAT CASE, OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT
        PERMITTED BY LAW. NOTHING IN THESE TERMS LIMITS RIGHTS YOU MAY HAVE
        UNDER APPLICABLE CONSUMER FINANCIAL PROTECTION LAWS THAT CANNOT BE
        WAIVED.
      </p>

      <h2>13. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless {siteConfig.company}{" "}
        and its owners, officers, employees, and agents from and against any
        claims, damages, losses, liabilities, costs, and expenses (including
        reasonable attorneys&apos; fees) arising out of or relating to your
        violation of these Terms, your misuse of the Site, or information you
        submit through the Site.
      </p>

      <h2>14. Dispute Resolution; Arbitration; Class Action Waiver</h2>
      <p>
        <strong>
          Please read this section carefully — it affects your legal rights.
        </strong>{" "}
        Before filing any claim, you agree to first contact us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>{" "}
        and give us 30 days to attempt to resolve the dispute informally.
      </p>
      <p>
        Except for small-claims matters and claims that cannot be arbitrated
        under applicable law, any dispute, claim, or controversy arising out of
        or relating to the Site or these Terms shall be resolved by binding
        individual arbitration administered by the American Arbitration
        Association under its Consumer Arbitration Rules. The arbitration will
        be conducted in Broward County, Florida, or, at your election, by
        telephone, video, or written submissions. The Federal Arbitration Act
        governs the interpretation and enforcement of this section.
      </p>
      <p>
        <strong>
          You and we each waive the right to a jury trial and the right to
          participate in a class action, class arbitration, or other
          representative proceeding.
        </strong>{" "}
        Claims may be brought only in an individual capacity. If the class
        action waiver is found unenforceable as to a particular claim, that
        claim (and only that claim) shall proceed in court. You may opt out of
        this arbitration agreement by emailing us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>{" "}
        within 30 days of first accepting these Terms, stating your name and
        that you opt out of arbitration.
      </p>

      <h2>15. Governing Law and Venue</h2>
      <p>
        These Terms and any dispute arising out of or relating to them or the
        Site are governed by the laws of the State of Florida, without regard to
        its conflict-of-laws principles. For any matter not subject to
        arbitration, you consent to the exclusive jurisdiction and venue of the
        state and federal courts located in Broward County, Florida.
      </p>

      <h2>16. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the Effective Date at the top of this page and post the updated Terms on
        the Site. Your continued use of the Site after an update constitutes
        acceptance of the revised Terms. If you do not agree to updated Terms,
        you must stop using the Site.
      </p>

      <h2>17. General</h2>
      <p>
        If any provision of these Terms is held invalid or unenforceable, the
        remaining provisions remain in full force and effect. Our failure to
        enforce any provision is not a waiver of it. These Terms, together with
        our <Link href="/privacy-policy">Privacy Policy</Link> and any
        program-specific disclosures we provide, constitute the entire agreement
        between you and us regarding use of the Site. You may not assign these
        Terms; we may assign them in connection with a merger, acquisition, or
        sale of assets. Sections that by their nature should survive termination
        (including Sections 9 and 11–15) survive.
      </p>

      <h2>18. Licensing and Contact</h2>
      <p>
        {siteConfig.company}, NMLS ID {siteConfig.contact.nmls}. For licensing
        information, visit{" "}
        <a
          href={siteConfig.links.nmlsConsumerAccess}
          target="_blank"
          rel="noopener noreferrer"
        >
          NMLS Consumer Access
        </a>
        . Questions about these Terms may be directed to:
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
      </ul>
    </LegalPageShell>
  );
}
