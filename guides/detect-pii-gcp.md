Now I'll create the complete Eleventy page for "Detect PII on GCP":

---
title: "GCP PII Detection"
description: "Learn how to detect personally identifiable information (PII) in Google Cloud Platform environments. Follow step-by-step guidance for GDPR compliance."
meta_title: "Detect PII in Google Cloud Platform with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "gcp"
risk: "data exposure"
regulation: "GDPR"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Data Exposure</div>
        <div class="badge regulation">GDPR</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where personally identifiable information is stored within your Google Cloud Platform environment, so you can remediate unintended exposures before they become breaches. Scanning for PII in GCP is a priority for organizations subject to GDPR, as it helps you prove you've discovered and accounted for all sensitive personal data assets—mitigating the risk of data exposure through misconfigured storage buckets, databases, or compute instances.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of personal information
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> GDPR (General Data Protection Regulation)
        </div>
        
        <p>A thorough scan delivers immediate visibility into PII across Cloud Storage, BigQuery, Cloud SQL, and Compute Engine, laying the foundation for automated policy enforcement and ongoing compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Project Owner or Editor role</li>
                    <li>Cloud DLP Admin or DLP User role</li>
                    <li>BigQuery Data Viewer (if scanning BigQuery)</li>
                    <li>Storage Object Viewer (if scanning Cloud Storage)</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Google Cloud CLI (gcloud)</li>
                    <li>Cyera DSPM account</li>
                    <li>Service account credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>GCP project provisioned</li>
                    <li>Sensitive Data Protection API enabled</li>
                    <li>Service account created and authenticated</li>
                    <li>Network access configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and Named Entity Recognition (NER) models, Cyera automatically identifies PII patterns in your GCP environment—from email addresses and phone numbers to more complex personal identifiers. This ensures you stay ahead of accidental exposures and meet GDPR compliance requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your GCP project and permissions</div>
            <p>Enable the Sensitive Data Protection API and create a service account with appropriate IAM roles for accessing your data sources.</p>
            <div class="code-block">gcloud services enable dlp.googleapis.com</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Google Cloud Platform, provide your project ID and service account credentials, then define the scan scope across Cloud Storage, BigQuery, and other data stores.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push scan results into your SIEM or Security Operations Center. Link findings to existing ticketing systems like Jira or ServiceNow for automated remediation workflows.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial detection report, prioritize datasets with large volumes of PII, and adjust detection rules to reduce false positives. Schedule recurring scans to maintain visibility across your dynamic GCP environment.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>GCP Data Sources</h4>
                <p>Cloud Storage, BigQuery, Cloud SQL, Compute Engine</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples data for classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Applies NER models and PII detection algorithms</p>
            </div>
            <div class="component-card">
                <h4>Reporting & Remediation</h4>
                <p>Dashboards, alerts, and compliance reports</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Resources</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Send to Cyera</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply AI Detection</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Route Findings</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Performance Considerations</h4>
	                <ul>
	                    <li>Start with smaller projects or specific datasets</li>
	                    <li>Use sampling for very large BigQuery tables</li>
	                    <li>Configure regional scanning to optimize costs</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for test or synthetic data</li>
	                    <li>Adjust confidence thresholds for PII types</li>
	                    <li>Configure custom regex patterns for organization-specific identifiers</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Forgetting Cloud Storage buckets in different regions</li>
	                    <li>Over-scanning temporary compute instance disks</li>
	                    <li>Neglecting to monitor new projects or datasets</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://cloud.google.com/sensitive-data-protection/docs">Google Cloud Sensitive Data Protection documentation</a></li>
            <li><a href="https://cloud.google.com/privacy/gdpr">GDPR and Google Cloud</a></li>
            <li><a href="https://cloud.google.com/architecture/de-identification-re-identification-pii-using-cloud-dlp">De-identification and re-identification of PII using Cloud DLP</a></li>
            <li><a href="https://medium.com/google-cloud/inspecting-and-reporting-sensitive-data-with-google-clouds-dlp-api-5ec27520c234">Inspecting and Reporting Sensitive Data with Google Cloud's DLP API</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-pii-gcp" class="action-button">🛡️ Prevent: Set up policies to prevent PII exposure</a>
            <a href="/guides/fix-exposure-of-pii-gcp" class="action-button">🔧 Fix: Review and remediate exposed PII</a>
        </div>
    </div>
</div>