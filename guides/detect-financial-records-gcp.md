Now I'll create the Eleventy page for "Detect financial records on GCP" using the same structure and format as the example:

---
title: "GCP Financial Records Detection"
description: "Learn how to detect financial records in Google Cloud Platform environments. Follow step-by-step guidance for PCI DSS compliance."
meta_title: "Detect Financial Records in GCP with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "gcp"
risk: "data exposure"
regulation: "PCI DSS"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Data Exposure</div>
        <div class="badge regulation">PCI DSS</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where financial records are stored within your Google Cloud Platform environment, so you can remediate unintended exposures before they become breaches. Scanning for financial data in GCP is a priority for organizations subject to PCI DSS, as it helps you prove you've discovered and accounted for all sensitive financial assets—mitigating the risk of data exposure through misconfigured storage or overly permissive access controls.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of financial records
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> PCI DSS Payment Card Industry Data Security Standard
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>GCP Project Owner or Editor role</li>
                    <li>BigQuery Data Viewer permissions</li>
                    <li>Cloud Storage Object Viewer access</li>
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
                    <li>BigQuery datasets configured</li>
                    <li>Cloud Storage buckets accessible</li>
                    <li>IAM policies configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI techniques including Named Entity Recognition (NER) and machine learning pattern matching, Cyera automatically identifies financial records in GCP by analyzing data patterns, column names, and content structure to detect credit card numbers, bank account information, and other financial data types in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your GCP service account</div>
            <p>Create a service account with the minimum required privileges for BigQuery and Cloud Storage access, then generate and securely store the JSON key file.</p>
            <div class="code-block">gcloud iam service-accounts create cyera-scanner --display-name="Cyera DSPM Scanner"</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Google Cloud Platform, provide your project ID and service account credentials, then define the scan scope to include BigQuery datasets and Cloud Storage buckets.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push scan results into your SIEM or Security Command Center. Link findings to existing ticketing systems like Jira or ServiceNow for remediation workflows.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial detection report, prioritize datasets with large volumes of financial records, and adjust detection rules to reduce false positives. Schedule recurring scans to maintain visibility across your GCP environment.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>BigQuery & Cloud Storage</h4>
                <p>Source of structured and unstructured financial data</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples data for classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Applies NER and ML models for financial data detection</p>
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
	                    <li>Start with incremental or scoped scans</li>
	                    <li>Use sampling for very large BigQuery tables</li>
	                    <li>Configure scan frequency based on data volatility</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for test financial data</li>
	                    <li>Adjust confidence thresholds for credit card detection</li>
	                    <li>Configure custom patterns for internal account formats</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Missing Cloud SQL databases with financial data</li>
	                    <li>Over-scanning archived or backup datasets</li>
	                    <li>Forgetting to scan Firestore collections</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://cloud.google.com/security/products/dlp">Google Cloud Data Loss Prevention (DLP)</a></li>
            <li><a href="https://cloud.google.com/architecture/pci-dss-compliance-in-gcp">PCI DSS compliance in Google Cloud</a></li>
            <li><a href="https://cloud.google.com/bigquery/docs/scan-with-dlp">Using Sensitive Data Protection to scan BigQuery data</a></li>
            <li><a href="https://medium.com/google-cloud/data-security-and-governance-with-gcp-bq-42bf651e346a">Data Security and Governance with GCP BigQuery</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-financial-records-gcp" class="action-button">🛡️ Prevent: Set up proactive financial data protection</a>
            <a href="/guides/fix-exposure-of-financial-records-gcp" class="action-button">🔧 Fix: Remediate exposed financial records</a>
        </div>
    </div>
</div>