import React from "react";
import styled from "./TermsAndConditions.module.css"; // Import your CSS file

const TermsAndConditions = () => {
    const termsAndConditionsText = `
1. Acceptance of Terms and Conditions
Welcome to PandriMarket ("Company," "we," or "us"). By accessing or using our mobile application (the "App"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the App.

2. Eligibility and Registration

To use the App, you must be at least 18 years of age.
You are required to provide accurate and complete information during the registration process and to keep your account information up to date.
3. Intellectual Property

All content, trademarks, logos, and intellectual property on the App are owned by PandriMarket.
You may not modify, distribute, reproduce, or use any content from the App without prior written consent.
4. User Conduct
You agree not to:

Engage in any unlawful, fraudulent, or harmful activities through the App.
Impersonate any individual or entity or misrepresent your affiliation with PandriMarket.
Transmit or distribute viruses, malware, or other harmful code through the App.
5. Privacy and Data Security
Our Privacy Policy outlines how we collect, use, and protect your personal information. By using the App, you consent to our data practices as described in the Privacy Policy.

6. Limitation of Liability

PandriMarket is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the App.
You agree to hold PandriMarket harmless from any claims or disputes arising from your use of the App.
7. Termination
We reserve the right to suspend or terminate your access to the App at our discretion, without notice, if you violate these Terms and Conditions or any applicable laws.

8. Changes to Terms and Conditions
We may update these Terms and Conditions from time to time. We will notify you of significant changes via the App or through contact information provided by you.

9. Governing Law
These Terms and Conditions are governed by the laws of your jurisdiction. Any disputes will be subject to the exclusive jurisdiction of the courts in your jurisdiction.

10. Contact Information
If you have any questions or concerns regarding these Terms and Conditions, please contact us at 9437979999.
`;
  return (
    <div className={styled.container}>
      <h1>Terms & Conditions</h1>
      <div className="text">{termsAndConditionsText}</div>
    </div>
  );
};

export default TermsAndConditions;
