import React from "react";
import styled from "./TermsAndConditions.module.css"; // Import your CSS file

const TermsAndConditions = () => {
  const termsAndConditionsText = `
    1. Information Collection and Use
    We may collect and use your personal information for various purposes, including order processing, customer support, and marketing. Our collection and use of your information are detailed in this Privacy Policy.
    
    2. Types of Information We Collect
    
    Personal Information: This may include your name, email address, shipping address, and payment information.
    Non-Personal Information: We may collect information about your device, browser, and usage patterns while using the App.
    3. Use of Your Information
    We use your personal information for the following purposes:
    
    To process and fulfill your orders.
    To improve our products and services.
    To send you marketing communications, provided you have opted in.
    To respond to your inquiries and provide customer support.
    4. Information Sharing
    
    We do not sell your personal information to third parties.
    We may share your information with trusted partners and service providers who assist us in delivering our services.
    5. Cookies and Tracking Technologies
    We use cookies and similar technologies to enhance your user experience. You can manage cookie preferences through your browser settings.
    
    6. Your Rights
    You have the right to:
    
    Access your personal information.
    Correct inaccuracies in your personal information.
    Delete your personal information, subject to certain limitations.
    Opt-out of marketing communications.
    7. Data Security
    We employ reasonable security measures to protect your data. However, no system is entirely secure, and we cannot guarantee the security of your information.
    
    8. Changes to Privacy Policy
    We reserve the right to update our Privacy Policy to reflect changes in our practices. Significant updates will be communicated to you via the App or the contact information provided by you.
    
    9. Contact Information
    If you have questions or concerns about our Privacy Policy, please contact us at 9437979999.
`;
  return (
    <div className={styled.container}>
      <h1>Privacy Policy</h1>
      <div className="text">{termsAndConditionsText}</div>
    </div>
  );
};

export default TermsAndConditions;
