---
title: "Databricks PHI Detection"
description: "Learn how to detect PHI (Protected Health Information) in Databricks environments. Follow step-by-step guidance for HIPAA compliance."
meta_title: "Detect PHI in Databricks with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "databricks"
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
        <p>The core goal is to identify every location where Protected Health Information (PHI) is stored within your Databricks environment, so you can remediate unintended exposures before they become breaches. Scanning for PHI in Databricks is a priority for healthcare organizations subject to HIPAA, as it helps you prove you've discovered and accounted for all sensitive patient data—mitigating the risk of unauthorized access and potential data exposure.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of Protected Health Information
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> HIPAA (Health Insurance Portability and Accountability Act)
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance.</p>
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
        <p><a href="https://www.cyera.com">Cyera</a> is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI-powered Named Entity Recognition (NER) models, Cyera automatically identifies PHI patterns in your Databricks environment—including patient names, medical record numbers, diagnosis codes, and treatment information—ensuring you stay ahead of accidental exposures and meet HIPAA audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your Databricks workspace</div>
            <p>Ensure Unity Catalog is enabled in your account and create a service principal with the minimum required privileges for PHI discovery.</p>
            <div class="code-block">databricks configure --token</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable PHI scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Databricks, provide your host URL and service principal details, then define the scan scope with healthcare-specific data classification rules.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with healthcare systems</div>
            <p>Configure webhooks or streaming exports to push PHI detection results into your healthcare SIEM or Security Operations Center. Link findings to existing compliance management systems like Epic, Cerner, or other EHR platforms.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune PHI policies</div>
            <p>Review the initial PHI detection report, prioritize tables with large volumes of patient data, and adjust detection rules to reduce false positives while maintaining HIPAA compliance. Schedule recurring scans to maintain continuous visibility.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Databricks Unity Catalog</h4>
                <p>Source of metadata for healthcare tables and files</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples data for PHI classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Applies NER models and healthcare-specific detection rules</p>
            </div>
            <div class="component-card">
                <h4>HIPAA Reporting</h4>
                <p>Compliance dashboards, alerts, and audit trails</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Healthcare Data</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Send to Cyera</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply PHI Detection</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Generate Compliance Reports</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Performance Considerations</h4>
	                <ul>
	                    <li>Start with incremental scans for large EHR datasets</li>
	                    <li>Use intelligent sampling for massive patient tables</li>
	                    <li>Optimize scan schedules during low-activity periods</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning PHI Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for synthetic/test patient data</li>
	                    <li>Adjust confidence thresholds for medical terminology</li>
	                    <li>Configure region-specific healthcare identifiers</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Missing encrypted PHI in blob storage</li>
	                    <li>Over-scanning development/staging environments</li>
	                    <li>Neglecting to audit service principal access logs</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.databricks.com/aws/en/security/privacy/hipaa">HIPAA | Databricks Documentation</a></li>
            <li><a href="https://www.databricks.com/solutions/accelerators/automated-phi-removal">Automated PHI Removal - Databricks</a></li>
            <li><a href="https://www.databricks.com/blog/2022/06/22/automating-phi-removal-from-healthcare-data-with-natural-language-processing.html">Automating PHI Removal in Healthcare Data | Databricks Blog</a></li>
            <li><a href="https://www.zscaler.com/blogs/product-insights/dspm-healthcare-data-security-amid-rising-breaches">DSPM: Healthcare Data Security Amid Rising Breaches - Zscaler</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-phi-databricks" class="action-button">🛡️ Prevent: Set up proactive PHI protection policies</a>
            <a href="/guides/fix-exposure-of-phi-databricks" class="action-button">🔧 Fix: Review and remediate exposed PHI tables</a>
        </div>
    </div>
</div>