Now I'll create the Eleventy page for "Detect employee data on Snowflake":

---
title: "Snowflake Employee Data Detection"
description: "Learn how to detect employee data in Snowflake environments. Follow step-by-step guidance for ISO 27001 compliance."
meta_title: "Detect Employee Data in Snowflake with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "snowflake"
risk: "data exposure"
regulation: "ISO 27001"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Data Exposure</div>
        <div class="badge regulation">ISO 27001</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where employee information is stored within your Snowflake environment, so you can remediate unintended exposures before they become breaches. Scanning for employee data in Snowflake is a priority for organizations subject to ISO 27001, as it helps you prove you've discovered and accounted for all sensitive HR assets—mitigating the risk of data exposure through unauthorized access.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure through unauthorized access to employee records
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> ISO 27001 Information Security Standard
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Snowflake ACCOUNTADMIN or SYSADMIN role</li>
                    <li>USAGE on databases and schemas</li>
                    <li>SELECT privileges on target tables</li>
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
                    <li>Network connectivity configured</li>
                    <li>Authentication method established</li>
                    <li>Warehouse access for scanning</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and Named Entity Recognition (NER) models, Cyera automatically identifies employee data patterns in Snowflake tables—including names, social security numbers, employee IDs, and HR records. This ensures you stay ahead of accidental exposures and meet ISO 27001 audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your Snowflake connection</div>
            <p>Create a dedicated service user with appropriate permissions and configure secure authentication using key-pair or OAuth.</p>
            <div class="code-block">CREATE USER cyera_scanner PASSWORD='...' DEFAULT_ROLE='SCANNER_ROLE';</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Snowflake, provide your account URL and authentication details, then define the scan scope across databases and schemas.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push scan results into your SIEM or Security Hub. Link findings to existing ticketing systems like Jira or ServiceNow for automated remediation workflows.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial detection report, prioritize tables with large volumes of employee data, and adjust detection rules to reduce false positives. Schedule recurring scans to maintain continuous visibility.</p>
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
                <p>Pulls metadata and samples data for classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Applies NER models and detection algorithms</p>
            </div>
            <div class="component-card">
                <h4>Reporting & Remediation</h4>
                <p>Dashboards, alerts, and automated workflows</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Databases</span>
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
	                    <li>Use appropriate warehouse sizes for scanning</li>
	                    <li>Implement sampling for very large tables</li>
	                    <li>Schedule scans during off-peak hours</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for test environments</li>
	                    <li>Adjust confidence thresholds for accuracy</li>
	                    <li>Customize patterns for organization-specific data</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Forgetting shared databases and cross-account shares</li>
	                    <li>Over-scanning transient or temporary tables</li>
	                    <li>Neglecting to monitor warehouse costs during scans</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.snowflake.com/en/user-guide/classify-intro">Snowflake Sensitive Data Classification Documentation</a></li>
            <li><a href="https://docs.snowflake.com/en/user-guide/cert-iso-27001">Snowflake ISO 27001 Compliance Guide</a></li>
            <li><a href="https://www.cyera.com/platform/dspm">Cyera DSPM Platform Overview</a></li>
            <li><a href="https://docs.snowflake.com/en/user-guide/tutorials/sensitive-data-auto-classification">Snowflake Automated Sensitive Data Classification Tutorial</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/fix-exposure-of-employee-data-snowflake" class="action-button">🔧 Fix: Remediate exposed employee data in Snowflake</a>
            <a href="/guides/prevent-exposure-of-employee-data-snowflake" class="action-button">🛡️ Prevent: Set up proactive employee data protection</a>
        </div>
    </div>
</div>