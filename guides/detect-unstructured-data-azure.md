---
title: "Azure Unstructured Data Detection"
description: "Learn how to detect unstructured data in Azure environments. Follow step-by-step guidance for GDPR compliance."
meta_title: "Detect Unstructured Data in Azure with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "azure"
risk: "shadow data"
regulation: "GDPR"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Shadow Data</div>
        <div class="badge regulation">GDPR</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where unstructured data is stored within your Azure environment, so you can remediate unintended exposures before they become breaches. Scanning for unstructured data in Azure is a priority for organizations subject to GDPR, as it helps you prove you've discovered and accounted for all sensitive data assets—mitigating the risk of shadow data proliferation across storage accounts, file shares, and blob containers.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Shadow data proliferation across Azure services
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> GDPR General Data Protection Regulation
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Azure Global Administrator or Compliance Administrator</li>
                    <li>Storage Account Contributor permissions</li>
                    <li>Microsoft Purview Data Reader role</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Azure CLI or PowerShell</li>
                    <li>Cyera DSPM account</li>
                    <li>API credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Azure subscription active</li>
                    <li>Storage accounts provisioned</li>
                    <li>Network access configured</li>
                    <li>Resource group permissions set</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI-powered Natural Language Processing (NLP) and Named Entity Recognition (NER) models, Cyera automatically identifies sensitive information within unstructured data formats like documents, emails, and files stored across Azure Blob Storage, SharePoint, and OneDrive, ensuring comprehensive GDPR compliance monitoring in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure Azure storage access</div>
            <p>Set up service principal with appropriate permissions to access storage accounts, blob containers, and file shares across your Azure subscription.</p>
            <div class="code-block">az ad sp create-for-rbac --name "cyera-dspm-connector"</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Azure, provide your subscription details and service principal credentials, then define the scan scope to include storage accounts, SharePoint sites, and OneDrive locations.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push scan results into Azure Sentinel or your SIEM. Link findings to existing ticketing systems like Azure DevOps or ServiceNow for remediation workflows.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial detection report, prioritize files with large volumes of personal data, and adjust detection rules to reduce false positives. Schedule recurring scans to maintain visibility across your expanding Azure data estate.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Azure Storage Services</h4>
                <p>Source of unstructured data across Blob, Files, and SharePoint</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples files for NLP classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Applies NER models and content analysis for detection</p>
            </div>
            <div class="component-card">
                <h4>Reporting & Remediation</h4>
                <p>Dashboards, alerts, and automated workflows</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Storage</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Send to Cyera</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply NLP Detection</span>
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
	                    <li>Start with smaller storage accounts or containers</li>
	                    <li>Use file type filtering to focus on documents</li>
	                    <li>Implement sampling for very large file repositories</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for template or test files</li>
	                    <li>Adjust NLP confidence thresholds</li>
	                    <li>Configure regex patterns for custom data types</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Missing archived or cold storage tiers</li>
	                    <li>Over-scanning temporary or system files</li>
	                    <li>Neglecting to monitor newly created storage accounts</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://learn.microsoft.com/en-us/purview/data-map-classification">Data classification in Microsoft Purview Data Map</a></li>
            <li><a href="https://learn.microsoft.com/en-us/azure/well-architected/security/data-classification">Data classification recommendations - Microsoft Azure</a></li>
            <li><a href="https://www.microsoft.com/en-us/security/blog/2023/12/07/new-microsoft-purview-features-use-ai-to-help-secure-and-govern-all-your-data/">New AI-powered Microsoft Purview features</a></li>
            <li><a href="https://learn.microsoft.com/en-us/compliance/regulatory/gdpr">General Data Protection Regulation - Microsoft GDPR</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-unstructured-data-azure" class="action-button">🛡️ Prevent: Set up data loss prevention policies</a>
            <a href="/guides/fix-exposure-of-unstructured-data-azure" class="action-button">🔧 Fix: Remediate exposed unstructured data</a>
        </div>
    </div>
</div>