Now I'll create the Eleventy page for "Detect financial records on Databricks":

---
title: "Databricks Financial Records Detection"
description: "Learn how to detect financial records in Databricks environments. Follow step-by-step guidance for SOX compliance and financial data governance."
meta_title: "Detect Financial Records in Databricks with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "databricks"
risk: "data exposure"
regulation: "SOX"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Data Exposure</div>
        <div class="badge regulation">SOX</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where financial records are stored within your Databricks environment, so you can remediate unintended exposures before they become breaches. Scanning for financial data in Databricks is a priority for organizations subject to SOX compliance, as it helps you prove you've discovered and accounted for all sensitive financial assets—mitigating the risk of data exposure and unauthorized access.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of sensitive financial records
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> Sarbanes-Oxley Act (SOX) Compliance
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance with financial reporting requirements.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Databricks admin or service principal</li>
                    <li>catalogs/read, schemas/read, tables/read privileges</li>
                    <li>Ability to install Databricks CLI or Terraform</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Databricks CLI</li>
                    <li>Cyera DSPM account</li>
                    <li>API credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Databricks workspace provisioned</li>
                    <li>Unity Catalog enabled</li>
                    <li>CLI authenticated</li>
                    <li>Networking rules configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and Named Entity Recognition (NER) models, Cyera can automatically identify financial records including account numbers, transaction data, and sensitive financial statements in Databricks, ensuring you stay ahead of accidental exposures and meet SOX audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your Databricks workspace</div>
            <p>Ensure Unity Catalog is enabled in your account and create a service principal with the minimum required privileges for financial data scanning.</p>
            <div class="code-block">databricks configure --token</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Databricks, provide your host URL and service principal details, then define the scan scope to include financial data catalogs and schemas.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push scan results into your SIEM or Security Hub. Link findings to existing ticketing systems like Jira or ServiceNow for SOX compliance tracking.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial detection report, prioritize tables with large volumes of financial records, and adjust detection rules to reduce false positives. Schedule recurring scans to maintain visibility for SOX compliance audits.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Databricks Unity Catalog</h4>
                <p>Source of metadata for financial tables and files</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples data for financial classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera Back-end</h4>
                <p>Applies NER models and financial risk scoring</p>
            </div>
            <div class="component-card">
                <h4>Reporting & Remediation</h4>
                <p>SOX dashboards, alerts, and compliance playbooks</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Catalogs</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Send to Cyera</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply Detection</span>
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
	                    <li>Start with incremental or scoped scans for financial schemas</li>
	                    <li>Use sampling for very large financial transaction tables</li>
	                    <li>Tune sample rates for speed vs financial coverage</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for synthetic financial datasets</li>
	                    <li>Adjust confidence thresholds for financial patterns</li>
	                    <li>Match rules to your SOX risk tolerance</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Forgetting Delta Lake financial tables outside Unity Catalog</li>
	                    <li>Over-scanning temporary or test financial schemas</li>
	                    <li>Neglecting to rotate service-principal credentials for financial access</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.databricks.com/aws/en/data-governance/">Data governance with Databricks | Databricks Documentation</a></li>
            <li><a href="https://www.databricks.com/trust/compliance/soc">SOC Compliance - Databricks</a></li>
            <li><a href="https://docs.databricks.com/aws/en/lakehouse-architecture/security-compliance-and-privacy/best-practices">Best practices for security, compliance, and privacy - Databricks</a></li>
            <li><a href="https://www.databricks.com/product/unity-catalog">Databricks Unity Catalog: Data Governance</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/fix-exposure-of-financial-records-databricks" class="action-button">🔧 Fix: Review and remediate exposed financial records</a>
            <a href="/guides/prevent-exposure-of-financial-records-databricks" class="action-button">🛡️ Prevent: Implement financial data protection policies</a>
        </div>
    </div>
</div>