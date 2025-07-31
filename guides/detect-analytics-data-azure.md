Now I'll create the complete Eleventy page for "Detect analytics data on Azure":

```html
---
title: "Azure Analytics Data Detection"
description: "Learn how to detect analytics data in Azure environments. Follow step-by-step guidance for PCI-DSS compliance."
meta_title: "Detect Analytics Data in Azure with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "azure"
risk: "shadow data"
regulation: "PCI-DSS"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Shadow Data</div>
        <div class="badge regulation">PCI-DSS</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where analytics data is stored within your Azure environment, so you can remediate unintended exposures before they become breaches. Scanning for analytics data in Azure is a priority for organizations subject to PCI-DSS, as it helps you prove you've discovered and accounted for all sensitive analytical assets—mitigating the risk of shadow data repositories containing payment card information.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Shadow data containing sensitive analytics information
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> PCI-DSS Payment Card Industry Data Security Standard
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Azure Contributor or Owner role</li>
                    <li>Data Reader permissions on storage accounts</li>
                    <li>Ability to configure Azure CLI or PowerShell</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Azure CLI or PowerShell</li>
                    <li>Cyera DSPM account</li>
                    <li>Service principal credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Azure subscription activated</li>
                    <li>Storage accounts provisioned</li>
                    <li>CLI authenticated</li>
                    <li>Network security groups configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By automating the discovery of analytics data in Azure using advanced AI and natural language processing (NLP) techniques, Cyera ensures you stay ahead of accidental exposures and meet PCI-DSS audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your Azure environment</div>
            <p>Ensure your Azure subscription has the necessary permissions and create a service principal with the minimum required privileges for data discovery.</p>
            <div class="code-block">az login && az account set --subscription "your-subscription-id"</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Azure, provide your subscription ID and service principal details, then define the scan scope including storage accounts, data lakes, and analytics workspaces.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push scan results into your SIEM or Azure Security Center. Link findings to existing ticketing systems like Azure DevOps or ServiceNow.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial detection report, prioritize storage accounts with large volumes of analytics data, and adjust detection rules to reduce false positives. Schedule recurring scans to maintain visibility.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Azure Storage & Data Lake</h4>
                <p>Source of analytics data and metadata</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples data for classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera Back-end</h4>
                <p>Applies AI detection models and risk scoring</p>
            </div>
            <div class="component-card">
                <h4>Reporting & Remediation</h4>
                <p>Dashboards, alerts, and playbooks</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Storage</span>
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
	                    <li>Start with incremental or scoped scans</li>
	                    <li>Use sampling for very large data lakes</li>
	                    <li>Tune sample rates for speed vs coverage</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for synthetic datasets</li>
	                    <li>Adjust confidence thresholds</li>
	                    <li>Match rules to your risk tolerance</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Forgetting analytics data in blob storage</li>
	                    <li>Over-scanning temporary or development data</li>
	                    <li>Neglecting to rotate service principal credentials</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://learn.microsoft.com/en-us/purview/data-map-classification">Data classification in Microsoft Purview Data Map</a></li>
            <li><a href="https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-pci-dss">PCI DSS - Azure Compliance</a></li>
            <li><a href="https://www.sentinelone.com/cybersecurity-101/cloud-security/azure-security-best-practices/">Top Azure Security Best Practices</a></li>
            <li><a href="https://medium.feruzurazaliev.com/implementing-data-security-in-azure-best-practices-for-protecting-your-data-697cb666a59c">Implementing Data Security in Azure</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/fix-exposure-of-analytics-data-azure" class="action-button">🔧 Fix: Review and remediate publicly exposed analytics data</a>
            <a href="/guides/prevent-exposure-of-analytics-data-azure" class="action-button">🛡️ Prevent: Set up preventive controls for analytics data</a>
        </div>
    </div>
</div>
```

This page follows the same HTML structure and CSS as your example, with the following key adaptations:

- **Topic**: Focused on detecting analytics data on Azure
- **Regulation**: PCI-DSS (most relevant for analytics data that might contain payment information)
- **Risk**: Shadow data (most relevant for analytics data that might be stored in unknown locations)
- **Platform-specific details**: References Azure services, CLI commands, and integration points
- **Cyera integration**: Mentions AI and NLP techniques specifically relevant for analytics data detection
- **References**: Includes real, relevant links from the search results about Azure data classification, security, and PCI-DSS compliance
- **Next Steps**: Links to the fix and prevent versions using the correct URL format

The content maintains the professional tone and structure while being specifically tailored to Azure analytics data detection scenarios.