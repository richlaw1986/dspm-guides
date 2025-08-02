---
title: "GCP PHI Detection"
description: "Learn how to detect Protected Health Information (PHI) in Google Cloud Platform environments. Follow step-by-step guidance for HIPAA compliance."
meta_title: "Detect PHI in Google Cloud Platform with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "gcp"
risk: "data exposure"
regulation: "HIPAA"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="guide-tags-container">
			<div class="guide-tags-wrapper">
		    {% if status == 'published' %}
		        {% if risk %}
		        <a href="/risk/{{ risk | downcase | replace: ' ', '-' }}/" class="guide-tag risk">{{ risk }}</a>
		        {% endif %}
		        {% if regulation %}
		        <a href="/regulation/{{ regulation | downcase | replace: ' ', '-' }}/" class="guide-tag regulation">{{ regulation }}</a>
		        {% endif %}
		        {% if platform %}
		        <a href="/platforms/{{ platform | downcase | replace: ' ', '-' }}/" class="guide-tag platform">{{ platform }}</a>
		        {% endif %}
		    {% else %}
		        <span class="guide-tag coming-soon">Coming Soon</span>
		    {% endif %}
		</div>
		</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where Protected Health Information is stored within your Google Cloud Platform environment, so you can remediate unintended exposures before they become breaches. Scanning for PHI in GCP is a priority for organizations subject to HIPAA, as it helps you prove you've discovered and accounted for all sensitive healthcare assets—mitigating the risk of data exposure and ensuring patient privacy protection.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of Protected Health Information
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> HIPAA Health Insurance Portability and Accountability Act
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>GCP project owner or security admin</li>
                    <li>BigQuery Data Viewer, Storage Object Viewer</li>
                    <li>DLP API Admin for Cloud Data Loss Prevention</li>
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
                    <li>GCP project with billing enabled</li>
                    <li>Healthcare API and DLP API enabled</li>
                    <li>Service account authenticated</li>
                    <li>VPC and firewall rules configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and Natural Language Processing (NER) models, Cyera automatically identifies PHI patterns in unstructured healthcare data across GCP services like BigQuery, Cloud Storage, and Healthcare API datastores, ensuring you stay ahead of accidental exposures and meet HIPAA audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your GCP project</div>
            <p>Enable necessary APIs (Healthcare API, DLP API, BigQuery API) and create a service account with the minimum required privileges for PHI detection.</p>
            <div class="code-block">gcloud auth application-default login</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Google Cloud Platform, provide your project ID and service account details, then define the scan scope across BigQuery datasets, Cloud Storage buckets, and Healthcare API stores.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push scan results into your SIEM or Security Command Center. Link findings to existing ticketing systems like Jira or ServiceNow for remediation workflows.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial detection report, prioritize datasets with large volumes of PHI, and adjust detection rules to reduce false positives. Schedule recurring scans to maintain visibility and compliance posture.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>GCP Data Sources</h4>
                <p>BigQuery, Cloud Storage, Healthcare API</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples data for classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Applies NER models and PHI detection patterns</p>
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
	                    <li>Tune sample rates for speed vs coverage</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for synthetic test data</li>
	                    <li>Adjust confidence thresholds for PHI patterns</li>
	                    <li>Match rules to your risk tolerance and HIPAA requirements</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Forgetting FHIR stores in Healthcare API</li>
	                    <li>Over-scanning temporary or development datasets</li>
	                    <li>Neglecting to rotate service account keys</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://cloud.google.com/healthcare-api/docs">Cloud Healthcare API documentation - Google Cloud</a></li>
            <li><a href="https://cloud.google.com/security/compliance/hipaa/">HIPAA Compliance on Google Cloud | GCP Security</a></li>
            <li><a href="https://cloud.google.com/sensitive-data-protection/docs/reference/rest">Sensitive Data Protection (DLP API) - Google Cloud</a></li>
            <li><a href="https://globalcloudplatforms.com/2021/09/10/protecting-healthcare-data-with-dlp-a-guide-for-getting-started/">Protecting Healthcare Data With DLP: A Guide For Getting Started</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/fix-exposure-of-phi-gcp" class="action-button">🔧 Fix: Review and remediate exposed PHI</a>
            <a href="/guides/prevent-exposure-of-phi-gcp" class="action-button">🛡️ Prevent: Set up PHI exposure prevention</a>
        </div>
    </div>
</div>