---
title: "Azure PHI Detection"
description: "Learn how to detect Protected Health Information (PHI) in Azure environments. Follow step-by-step guidance for HIPAA compliance."
meta_title: "Detect PHI in Azure with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "azure"
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
        <p>The core goal is to identify every location where Protected Health Information (PHI) is stored within your Azure environment, so you can remediate unintended exposures before they become HIPAA violations. Scanning for PHI in Azure is a priority for healthcare organizations subject to HIPAA regulations, as it helps you prove you've discovered and accounted for all sensitive patient data—mitigating the risk of data exposure and potential breach notifications.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of Protected Health Information
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> HIPAA Health Insurance Portability and Accountability Act
        </div>
        
        <p>A thorough scan delivers immediate visibility into PHI across Azure services, laying the foundation for automated policy enforcement and ongoing HIPAA compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Azure Contributor or Owner role</li>
                    <li>Microsoft Purview Data Curator role</li>
                    <li>Azure Health Data Services access (if applicable)</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Azure CLI</li>
                    <li>Cyera DSPM account</li>
                    <li>Microsoft Purview (optional)</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Azure subscription provisioned</li>
                    <li>Storage accounts and databases configured</li>
                    <li>Network security groups reviewed</li>
                    <li>Azure Health Data Services (if handling FHIR/DICOM)</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and Named Entity Recognition (NER) models specifically trained for healthcare data, Cyera automatically identifies PHI patterns including patient names, medical record numbers, diagnosis codes, and treatment information across your Azure environment, ensuring you stay ahead of accidental exposures and meet HIPAA audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure Azure service connections</div>
            <p>Set up service principals with appropriate permissions to access Azure Storage, SQL Database, Cosmos DB, and other services where PHI might be stored.</p>
            <div class="code-block">az ad sp create-for-rbac --name "cyera-phi-scanner" --role "Reader"</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable PHI scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Azure, provide your subscription details and service principal credentials, then configure scan scope to include healthcare-related storage accounts and databases.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Configure healthcare-specific detection rules</div>
            <p>Enable specialized PHI detection patterns including HIPAA identifiers, medical terminology, and healthcare data formats. Configure rules for FHIR resources, DICOM metadata, and electronic health records.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and establish monitoring</div>
            <p>Review the initial PHI detection report, prioritize findings based on data sensitivity and access patterns, and set up continuous monitoring with alerts for new PHI discoveries or exposure risks.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Azure Resource Manager</h4>
                <p>Provides metadata about storage and database resources</p>
            </div>
            <div class="component-card">
                <h4>Cyera Azure Connector</h4>
                <p>Scans storage accounts, databases, and healthcare services</p>
            </div>
            <div class="component-card">
                <h4>AI Classification Engine</h4>
                <p>Applies NER models and PHI-specific detection patterns</p>
            </div>
            <div class="component-card">
                <h4>HIPAA Compliance Dashboard</h4>
                <p>Real-time visibility and remediation workflows</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Resources</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Sample Data</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply PHI Detection</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Generate Findings</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Performance Considerations</h4>
	                <ul>
	                    <li>Start with critical healthcare applications first</li>
	                    <li>Use sampling for large blob storage containers</li>
	                    <li>Schedule scans during low-usage periods</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Healthcare-Specific Tuning</h4>
	                <ul>
	                    <li>Configure medical terminology dictionaries</li>
	                    <li>Set up FHIR and DICOM-specific patterns</li>
	                    <li>Adjust thresholds for clinical documentation</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Missing Azure Health Data Services instances</li>
	                    <li>Overlooking development/test environments with PHI</li>
	                    <li>Insufficient permissions for healthcare databases</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://learn.microsoft.com/en-us/azure/healthcare-apis/overview">Azure Health Data Services overview</a></li>
            <li><a href="https://learn.microsoft.com/en-us/purview/dlp-policy-templates-include">Microsoft Purview DLP policy templates</a></li>
            <li><a href="https://azure.microsoft.com/en-us/products/health-data-services/">Azure Health Data Services</a></li>
            <li><a href="https://learn.microsoft.com/en-us/azure/databricks/security/privacy/hipaa">HIPAA compliance in Azure</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/fix-exposure-of-phi-azure" class="action-button">🔧 Fix: Remediate exposed PHI in Azure</a>
            <a href="/guides/prevent-exposure-of-phi-azure" class="action-button">🛡️ Prevent: Implement PHI protection controls</a>
        </div>
    </div>
</div>