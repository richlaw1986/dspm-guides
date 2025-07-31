Now I'll create the complete Eleventy page for "Prevent exposure of PCI data on Azure":

```html
---
title: "Azure PCI Data Exposure Prevention"
description: "Learn how to prevent exposure of PCI data in Azure environments. Follow step-by-step guidance for PCI-DSS compliance and data protection."
meta_title: "Prevent PCI Data Exposure in Azure with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "azure"
risk: "unencrypted sensitive data"
regulation: "PCI-DSS"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Unencrypted Sensitive Data</div>
        <div class="badge regulation">PCI-DSS</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to implement preventive controls that stop PCI data from being exposed in your Azure environment before it becomes a compliance violation or security breach. Proactively securing payment card data in Azure is essential for organizations subject to PCI-DSS, as it helps you maintain the highest standards of data protection and avoid costly penalties—mitigating the risk of unencrypted sensitive data exposure.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Unencrypted sensitive data exposure
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> PCI-DSS Payment Card Industry Data Security Standards
        </div>
        
        <p>A comprehensive prevention strategy establishes secure-by-default configurations, automated policy enforcement, and continuous monitoring to maintain PCI compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Azure Security Administrator or Contributor</li>
                    <li>Key Vault Administrator privileges</li>
                    <li>Policy Contributor role for Azure Policy</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Azure CLI or PowerShell</li>
                    <li>Cyera DSPM account</li>
                    <li>Azure Resource Manager templates</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Azure subscription with appropriate quotas</li>
                    <li>Microsoft Defender for Cloud enabled</li>
                    <li>Azure Key Vault provisioned</li>
                    <li>Network security groups configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that uses advanced AI and machine learning models, including Named Entity Recognition (NER) and pattern detection algorithms, to automatically discover, classify, and protect sensitive PCI data across Azure services. By continuously monitoring your Azure environment, Cyera ensures that payment card data remains encrypted, properly segmented, and compliant with PCI-DSS requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure Azure Key Vault encryption</div>
            <p>Establish customer-managed keys (CMK) in Azure Key Vault for all services that will handle PCI data. Enable automatic key rotation and set appropriate access policies.</p>
            <div class="code-block">az keyvault create --name MyPCIKeyVault --resource-group MyResourceGroup --enable-purge-protection</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Implement network segmentation</div>
            <p>Create dedicated virtual networks and subnets for PCI workloads. Configure Network Security Groups (NSGs) with restrictive rules and implement Azure Private Link for database connections.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Deploy Cyera data protection policies</div>
            <p>In the Cyera portal, navigate to Policies → Prevention → Add new. Configure real-time scanning rules that automatically encrypt PCI data at rest and in transit, with immediate alerts for policy violations.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Enable continuous monitoring and compliance</div>
            <p>Activate Microsoft Defender for Cloud PCI-DSS compliance dashboard and integrate with Cyera's AI-powered monitoring. Set up automated remediation workflows for common misconfigurations.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Azure Key Vault</h4>
                <p>Centralized key management and encryption</p>
            </div>
            <div class="component-card">
                <h4>Network Security Groups</h4>
                <p>Traffic filtering and access control</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Real-time data classification and protection</p>
            </div>
            <div class="component-card">
                <h4>Microsoft Defender</h4>
                <p>Security posture assessment and compliance</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Prevention Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Classify Data</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply Encryption</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Enforce Policies</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Monitor Compliance</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Encryption Standards</h4>
	                <ul>
	                    <li>Use AES-256 encryption for all PCI data</li>
	                    <li>Implement encryption at rest and in transit</li>
	                    <li>Regularly rotate encryption keys</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Access Control</h4>
	                <ul>
	                    <li>Implement least-privilege access principles</li>
	                    <li>Use Azure AD Privileged Identity Management</li>
	                    <li>Enable multi-factor authentication</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Storing PCI data in unencrypted Azure Storage</li>
	                    <li>Overly permissive network security groups</li>
	                    <li>Neglecting to secure backup and disaster recovery</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-pci-dss">Azure PCI DSS Compliance Documentation</a></li>
            <li><a href="https://azure.microsoft.com/blog/new-pci-dss-azure-blueprint-makes-compliance-simpler/">PCI DSS Azure Blueprint</a></li>
            <li><a href="https://learn.microsoft.com/en-us/azure/key-vault/security-controls-policy">Azure Key Vault Security Controls</a></li>
            <li><a href="https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-atrest">Azure Data Encryption at Rest</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/detect-pci-data-azure" class="action-button">🔍 Detect: Scan for existing PCI data exposure</a>
            <a href="/guides/fix-exposure-of-pci-data-azure" class="action-button">🔧 Fix: Remediate identified PCI data vulnerabilities</a>
        </div>
    </div>
</div>
```

This page follows the exact same HTML structure and CSS as the example, adapted for "Prevent exposure of PCI data on Azure". Key adaptations include:

- **Metadata**: Updated title, description, platform (azure), risk (unencrypted sensitive data), regulation (PCI-DSS)
- **Content**: Focused on prevention strategies for PCI data in Azure
- **Cyera Integration**: Mentioned AI capabilities including NER for PCI data classification and real-time protection
- **Technical Steps**: Azure-specific services like Key Vault, NSGs, and Defender for Cloud
- **References**: Real Azure documentation links found through search
- **Next Steps**: Links to detect and fix variants with proper URL format

The page maintains the same professional structure while being specifically tailored to Azure PCI data prevention requirements.