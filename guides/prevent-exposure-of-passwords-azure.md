Now I'll create the complete Eleventy page for "Prevent exposure of passwords on Azure":

```html
---
title: "Azure Password Exposure Prevention"
description: "Learn how to prevent password exposure in Azure environments. Follow step-by-step guidance for PCI-DSS compliance."
meta_title: "Prevent Password Exposure in Azure with AI | DSPM Guide"
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
        <p>The core goal is to proactively prevent passwords from being exposed in plaintext or stored insecurely within your Azure environment. This includes eliminating hardcoded credentials in code repositories, configuration files, and ensuring proper secret management across all Azure services. Preventing password exposure is critical for organizations subject to PCI-DSS, as it helps you maintain secure authentication mechanisms and protect cardholder data environments.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Unencrypted sensitive data and unauthorized access
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> PCI-DSS Payment Card Industry Data Security Standard
        </div>
        
        <p>A comprehensive prevention strategy delivers proactive security, ensuring credentials are properly managed and encrypted before they can be compromised.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Azure Security Administrator or Global Administrator</li>
                    <li>Key Vault Contributor permissions</li>
                    <li>DevOps project administrator access</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Azure CLI or PowerShell</li>
                    <li>Cyera DSPM platform</li>
                    <li>Azure DevOps (if applicable)</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Azure subscription with appropriate permissions</li>
                    <li>Azure Key Vault provisioned</li>
                    <li>RBAC policies configured</li>
                    <li>Network access rules defined</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that leverages AI-powered pattern recognition and natural language processing to automatically identify and prevent password exposures across Azure environments. Using advanced machine learning models, Cyera can detect hardcoded credentials, weak authentication patterns, and insecure secret storage practices in real-time, ensuring your Azure infrastructure maintains robust password security posture.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure Azure Key Vault for centralized secret management</div>
            <p>Create and configure Azure Key Vault with proper access policies and network restrictions. Enable soft delete and purge protection to prevent accidental credential loss.</p>
            <div class="code-block">az keyvault create --name MyKeyVault --resource-group MyResourceGroup --enable-soft-delete --enable-purge-protection</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Implement managed identities and service principals</div>
            <p>Replace hardcoded credentials with Azure Managed Identities where possible. Configure service principals with minimal required permissions and certificate-based authentication.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Deploy Cyera for continuous password monitoring</div>
            <p>In the Cyera portal, navigate to Integrations → Azure → Add new. Configure the Azure connector to scan for exposed passwords in code repositories, configuration files, and storage accounts. Set up real-time alerts for any detected credential exposures.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Establish secure DevOps practices</div>
            <p>Integrate credential scanning tools in your CI/CD pipelines. Configure pre-commit hooks and automated security gates to prevent password commits. Implement secure configuration management with encrypted parameters.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Azure Key Vault</h4>
                <p>Centralized secret and credential management</p>
            </div>
            <div class="component-card">
                <h4>Managed Identities</h4>
                <p>Passwordless authentication for Azure services</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Scanner</h4>
                <p>Continuous monitoring and pattern detection</p>
            </div>
            <div class="component-card">
                <h4>DevOps Security Gates</h4>
                <p>Automated credential scanning in pipelines</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Prevention Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Scan Code & Config</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Detect Patterns</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Block Deployment</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Enforce Key Vault</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Key Vault Configuration</h4>
	                <ul>
	                    <li>Enable Azure RBAC for fine-grained access control</li>
	                    <li>Use private endpoints for network isolation</li>
	                    <li>Implement key rotation policies</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Development Guidelines</h4>
	                <ul>
	                    <li>Never commit secrets to source control</li>
	                    <li>Use environment variables with Key Vault references</li>
	                    <li>Implement proper exception handling for secret retrieval</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Storing secrets in application configuration files</li>
	                    <li>Using shared service accounts with static passwords</li>
	                    <li>Forgetting to rotate credentials regularly</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://learn.microsoft.com/en-us/azure/key-vault/">Azure Key Vault documentation</a></li>
            <li><a href="https://github.com/MicrosoftDocs/azure-security-docs/blob/main/articles/key-vault/general/best-practices.md">Best practices for using Azure Key Vault</a></li>
            <li><a href="https://learn.microsoft.com/en-us/azure/app-modernization-guidance/launch/identity-security-and-compliance-best-practices">Azure Identity Management Best Practices</a></li>
            <li><a href="https://ecanarys.com/implementing-azure-devsecops-with-microsoft-credential-scanner/">Microsoft Credential Scanner Implementation</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/detect-passwords-azure" class="action-button">🔍 Detect: Scan for existing password exposures</a>
            <a href="/guides/fix-exposure-of-passwords-azure" class="action-button">🔧 Fix: Remediate discovered password exposures</a>
        </div>
    </div>
</div>
```

This page follows the exact HTML structure and CSS framework from your example, while adapting the content for "Prevent exposure of passwords on Azure". Key adaptations include:

1. **Metadata**: Updated title, description, meta title (mentions AI), tags, platform (azure), risk (unencrypted sensitive data), and regulation (PCI-DSS)

2. **Cyera Integration**: Positioned Cyera as an AI-powered DSPM platform that uses pattern recognition and NLP to detect password exposures

3. **Content Focus**: Shifted from detection to prevention, emphasizing proactive measures like Key Vault, managed identities, and secure DevOps practices

4. **References**: Added relevant Azure documentation and best practices links found through search

5. **Next Steps**: Links to detect and fix versions following the URL pattern you specified

The page maintains the same professional structure while providing comprehensive guidance on preventing password exposure in Azure environments.