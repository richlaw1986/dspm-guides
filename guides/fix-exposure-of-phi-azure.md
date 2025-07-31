Here's the complete Eleventy page for "Fix exposure of PHI on Azure":

```html
---
title: "Azure PHI Exposure Remediation"
description: "Learn how to fix PHI exposures in Azure environments. Follow step-by-step guidance for HIPAA compliance and healthcare data security."
meta_title: "Fix PHI Exposure in Azure with AI | DSPM Remediation Guide"
tags: ["guides"]
difficulty: "advanced"
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
        <div class="badge">Data Exposure</div>
        <div class="badge regulation">HIPAA</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to quickly remediate every identified PHI exposure within your Azure environment, ensuring that protected health information is properly secured before regulatory violations occur. Fixing PHI exposures in Azure is critical for organizations subject to HIPAA, as it helps you maintain patient privacy and avoid costly penalties from unauthorized access to healthcare data.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of protected health information
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> HIPAA Health Insurance Portability and Accountability Act
        </div>
        
        <p>Swift remediation ensures patient privacy protection, maintains regulatory compliance, and prevents potential data breaches that could result in significant financial and reputational damage.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Azure Security Administrator or Owner role</li>
                    <li>Storage Account Contributor permissions</li>
                    <li>Key Vault Administrator access</li>
                    <li>Azure Policy Contributor role</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Azure CLI or PowerShell</li>
                    <li>Cyera DSPM account</li>
                    <li>Azure Security Center access</li>
                    <li>API credentials for automation</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Azure subscription configured</li>
                    <li>PHI exposures identified and prioritized</li>
                    <li>RBAC policies reviewed</li>
                    <li>Backup and recovery plan in place</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. Using advanced AI and natural language processing (NLP) for entity recognition, Cyera automatically identifies PHI patterns in unstructured healthcare data and provides automated remediation workflows to quickly secure exposed protected health information in your Azure environment.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Assess and prioritize PHI exposures</div>
            <p>Review the PHI exposure inventory from your detection scan. In Cyera, navigate to Data Inventory → Findings and filter by PHI classification. Prioritize based on exposure severity, data volume, and public accessibility.</p>
            <div class="code-block">az storage blob list --account-name [account] --container-name [container] --query "[?properties.publicAccess]"</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Implement immediate access controls</div>
            <p>Remove public access from storage containers with PHI. Update blob storage access policies and configure private endpoints. Apply network security groups and firewall rules to restrict access to authorized healthcare systems only.</p>
            <div class="code-block">az storage container set-permission --name [container] --public-access off</div>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Apply encryption and key management</div>
            <p>Enable encryption at rest using Azure Key Vault for all PHI storage locations. Configure customer-managed keys (CMK) for additional control. Implement encryption in transit for all data movement operations.</p>
            <div class="code-block">az storage account update --name [account] --encryption-services blob --encryption-key-source Microsoft.Keyvault</div>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Configure monitoring and alerting</div>
            <p>Set up Azure Monitor and Security Center alerts for future PHI access patterns. Configure Cyera's continuous monitoring to detect new exposures and automatically trigger remediation workflows for similar incidents.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Azure Storage & Databases</h4>
                <p>Primary locations containing exposed PHI</p>
            </div>
            <div class="component-card">
                <h4>Azure Security Center</h4>
                <p>Security posture monitoring and recommendations</p>
            </div>
            <div class="component-card">
                <h4>Cyera Remediation Engine</h4>
                <p>AI-powered automated fix workflows</p>
            </div>
            <div class="component-card">
                <h4>Azure Key Vault</h4>
                <p>Encryption key management and access control</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Remediation Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Identify Exposure</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply Access Controls</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Enable Encryption</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Monitor & Alert</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Immediate Actions</h4>
	                <ul>
	                    <li>Disable public access first</li>
	                    <li>Document all changes for audit trails</li>
	                    <li>Test access controls before full deployment</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Long-term Security</h4>
	                <ul>
	                    <li>Implement defense-in-depth strategies</li>
	                    <li>Regular security assessments</li>
	                    <li>Staff training on PHI handling</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Not testing applications after access changes</li>
	                    <li>Overlooking backup and archive locations</li>
	                    <li>Insufficient monitoring post-remediation</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://learn.microsoft.com/en-us/azure/healthcare-apis/security-controls-policy">Azure Policy Regulatory Compliance controls for Azure Health Data Services</a></li>
            <li><a href="https://learn.microsoft.com/en-us/industry/healthcare/compliance-overview">Compliance in Microsoft Cloud for Healthcare</a></li>
            <li><a href="https://azure.microsoft.com/en-us/products/health-data-services/">Azure Health Data Services | Microsoft Azure</a></li>
            <li><a href="https://learn.microsoft.com/en-us/azure/databricks/security/privacy/hipaa">HIPAA - Azure Databricks | Microsoft Learn</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-phi-azure" class="action-button">🛡️ Prevent: Implement PHI protection controls</a>
            <a href="/guides/detect-phi-azure" class="action-button">🔍 Detect: Continuously monitor for PHI exposures</a>
        </div>
    </div>
</div>
```