---
title: "Snowflake PHI Detection"
description: "Learn how to detect protected health information (PHI) in Snowflake environments. Follow step-by-step guidance for HIPAA compliance."
meta_title: "Detect PHI in Snowflake with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "snowflake"
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
        <div class="badge">Data Exposure</div>
        <div class="badge regulation">HIPAA</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where protected health information is stored within your Snowflake environment, so you can remediate unintended exposures before they become breaches. Scanning for PHI in Snowflake is a priority for healthcare organizations subject to HIPAA, as it helps you prove you've discovered and accounted for all sensitive healthcare assets—mitigating the risk of data exposure.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of protected health information
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
                    <li>Snowflake ACCOUNTADMIN or SECURITYADMIN role</li>
                    <li>USAGE privileges on databases and schemas</li>
                    <li>SELECT privileges on tables containing PHI</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Snowflake CLI or SnowSQL</li>
                    <li>Cyera DSPM account</li>
                    <li>API credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Snowflake account provisioned</li>
                    <li>Database and schema structure defined</li>
                    <li>Network policies configured</li>
                    <li>Business Associate Agreement (BAA) in place</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By automating the discovery of PHI in Snowflake using advanced AI and Named Entity Recognition (NER) models, Cyera ensures you stay ahead of accidental exposures and meet HIPAA audit requirements in real time. The platform's AI-powered classification engine can identify medical record numbers, patient names, diagnosis codes, and other PHI patterns with high accuracy.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your Snowflake workspace</div>
            <p>Ensure proper role hierarchy is established and create a service account with the minimum required privileges for scanning healthcare data tables.</p>
            <div class="code-block">snowsql -a <account_identifier> -u <username></div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Snowflake, provide your account details and service principal credentials, then define the scan scope to include healthcare databases and patient data tables.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push PHI detection results into your healthcare SIEM or Security Hub. Link findings to existing compliance tracking systems like GRC platforms or healthcare audit tools.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial PHI detection report, prioritize tables with large volumes of patient data, and adjust detection rules to reduce false positives on synthetic or de-identified datasets. Schedule recurring scans to maintain HIPAA compliance visibility.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Snowflake Information Schema</h4>
                <p>Source of metadata for databases, schemas, and tables</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples healthcare data for classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Applies NER models and PHI detection algorithms</p>
            </div>
            <div class="component-card">
                <h4>HIPAA Reporting & Remediation</h4>
                <p>Compliance dashboards, alerts, and remediation playbooks</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Databases</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Send to Cyera</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply PHI Detection</span>
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
	                    <li>Start with incremental scans on patient data tables</li>
	                    <li>Use statistical sampling for very large healthcare datasets</li>
	                    <li>Schedule scans during off-peak hours</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning PHI Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for synthetic patient datasets</li>
	                    <li>Adjust confidence thresholds for medical terminology</li>
	                    <li>Configure custom patterns for organization-specific PHI</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Overlooking temporary tables with patient data</li>
	                    <li>Missing external stages containing healthcare files</li>
	                    <li>Neglecting to scan shared databases from partners</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.snowflake.com/en/user-guide/classify-auto">Snowflake Automatic Sensitive Data Classification</a></li>
            <li><a href="https://www.snowflake.com/trending/healthcare-hipaa-and-data-sharing/">Snowflake Healthcare HIPAA and Data Sharing</a></li>
            <li><a href="https://docs.snowflake.com/en/user-guide/cert-hitrust">Snowflake HITRUST CSF Compliance</a></li>
            <li><a href="https://www.paloaltonetworks.com/blog/cloud-security/protect-sensitive-data-dspm-snowflake/">DSPM for Snowflake Data Protection</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/fix-exposure-of-phi-snowflake" class="action-button">🔧 Fix: Review and remediate exposed PHI tables</a>
            <a href="/guides/prevent-exposure-of-phi-snowflake" class="action-button">🛡️ Prevent: Implement PHI access controls and encryption</a>
        </div>
    </div>
</div>