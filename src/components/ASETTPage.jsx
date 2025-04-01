import React, { useState } from 'react';
import { StepList } from '@cmsgov/design-system';
import './ASETTPage.css'; // Assuming you have a CSS file for styles

const ASETTPage = () => {
    const [selectedViolation, setSelectedViolation] = useState('');
    const [isStarted, setIsStarted] = useState(false);

    const handleNext = () => {
        if (selectedViolation) {
            // Logic to navigate to the next step or perform an action
            alert(`Selected violation: ${selectedViolation}`);
        } else {
            alert('Please select a complaint type before proceeding.');
        }
    };

    const handleStart = () => {
        setIsStarted(true);
    };

    const steps = [
        {
            completed: false,
            heading: 'Identify the type of HIPAA/ACA complaint',
            href: '#step-1',
            id: 'step-1',
            started: true,
            component: () => (
                <div className="step-container">
                    <h3 className="step-title">Complaint Type</h3>
                    <p className="step-subtitle">Make a selection below:</p>
                    <h4>Select the type of violation:</h4>
                    <div className={`radio-label ${selectedViolation === 'transactions' ? 'selected' : ''}`}>
                        <label>
                            <input
                                type="radio"
                                value="transactions"
                                checked={selectedViolation === 'transactions'}
                                onChange={() => setSelectedViolation('transactions')}
                            />
                            <span className="radio-title">Transactions</span>
                            <div className="radio-description">
                                Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.
                            </div>
                        </label>
                    </div>
                    <div className={`radio-label ${selectedViolation === 'codeSets' ? 'selected' : ''}`}>
                        <label>
                            <input
                                type="radio"
                                value="codeSets"
                                checked={selectedViolation === 'codeSets'}
                                onChange={() => setSelectedViolation('codeSets')}
                            />
                            <span className="radio-title">Code Sets</span>
                            <div className="radio-description">
                                Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes).
                            </div>
                        </label>
                    </div>
                    <div className={`radio-label ${selectedViolation === 'uniqueIdentifiers' ? 'selected' : ''}`}>
                        <label>
                            <input
                                type="radio"
                                value="uniqueIdentifiers"
                                checked={selectedViolation === 'uniqueIdentifiers'}
                                onChange={() => setSelectedViolation('uniqueIdentifiers')}
                            />
                            <span className="radio-title">Unique Identifiers</span>
                            <div className="radio-description">
                                Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).
                            </div>
                        </label>
                    </div>
                    <div className={`radio-label ${selectedViolation === 'operatingRules' ? 'selected' : ''}`}>
                        <label>
                            <input
                                type="radio"
                                value="operatingRules"
                                checked={selectedViolation === 'operatingRules'}
                                onChange={() => setSelectedViolation('operatingRules')}
                            />
                            <span className="radio-title">Operating Rules</span>
                            <div className="radio-description">
                                Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.
                            </div>
                        </label>
                    </div>
                    <button className="next-button" onClick={handleNext} disabled={!isStarted}>
                        Next
                    </button>
                </div>
            ),
        },
        {
            completed: false,
            heading: 'Provide your contact information',
            href: '#step-2',
            id: 'step-2',
            started: false,
        },
        {
            completed: false,
            heading: 'Identify the Filed Against Entity',
            href: '#step-3',
            id: 'step-3',
            started: false,
        },
        {
            completed: false,
            heading: 'Describe the HIPAA/ACA violation',
            href: '#step-4',
            id: 'step-4',
            started: false,
        },
        {
            completed: false,
            heading: 'Review and Submit',
            href: '#step-5',
            id: 'step-5',
            started: false,
        },
    ];

    return (
      <div className="asett-container">
        <header className="asett-header">
          <div className="logo">CMS Logo</div>
          <nav className="nav-bar">
            <a href="/">Home</a>
            <a href="/about">About ASETT</a>
            <a href="/contact">Contact Us</a>
            <a href="/support">Support</a>
            <span
              className="auth-icon"
              role="button"
              aria-label="Register"
              onClick={() => alert("Register clicked!")}
            >
              📝 Register
            </span>
            <span
              className="auth-icon"
              role="button"
              aria-label="Login"
              onClick={() => alert("Login clicked!")}
            >
              🔑 Login
            </span>
          </nav>
        </header>

        <main className="asett-main">
          <h1 className="title-asett">
            Administrative Simplification Enforcement and Testing Tool (ASETT)
          </h1>

          <p className="disclaimer">
            If you file a complaint without registration, you will not be able
            to view your complaints, upload supporting documents, correspond
            electronically, or test transactions.
          </p>

          <p>
            The following is the list of steps you will take in order to file a
            complaint regarding HIPAA Transactions and Code Sets, Unique
            Identifiers, and/or Operating Rules. If you wish to file a Health
            Insurance Privacy complaint, please visit the{" "}
            <a
              href="https://www.hhs.gov/hipaa/filing-a-complaint/what-to-expect/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Office for Civil Rights (OCR)
            </a>{" "}
            website.
          </p>

          <StepList steps={steps} />

          <p>
            You can review all information before submitting your complaint to
            CMS. Once the complaint is submitted, CMS will review all
            information and respond to your complaint.
          </p>
        </main>

        <footer className="asett-footer">
          <p>
            <a href="/privacy">Privacy Policy</a> |{" "}
            <a href="/terms">Terms of Service</a> |{" "}
            <a href="/contact">Contact Information</a>
          </p>
        </footer>
      </div>
    );
};

export default ASETTPage; 