Now I'll create the complete Eleventy page for "Fix exposure of API keys / secrets / tokens on Databricks":

---
title: "Databricks API Keys & Secrets Remediation"
description: "Learn how to fix exposed API keys, secrets, and tokens in Databricks environments. Follow step-by-step guidance for NIST 800-53 compliance."
meta_title: "Fix API Keys & Secrets Exposure in Databricks with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "databricks"
risk: "insecure APIs"
regulation: "NIST 800-53"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Insecure APIs</div>
        <div class="badge regulation">NIST 800-53</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to rapidly remediate exposed API keys, secrets, and tokens within your Databricks environment before they can be exploited by malicious actors. Fixing exposed credentials in Databricks is critical for organizations subject to NIST 800-53, as it helps you maintain proper cryptographic key management and access controls—preventing unauthorized access to sensitive data and systems.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Insecure APIs and unauthorized system access
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> NIST 800-53 Security and Privacy Controls
        </div>
        
        <p>Swift remediation prevents credential abuse, maintains system integrity, and ensures compliance with federal security standards.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Databricks admin or service principal</li>
                    <li>Secret scope management privileges</li>
                    <li>Ability to rotate API keys and tokens</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Databricks CLI</li>
                    <li>Cyera DSPM account</li>
                    <li>Secret management system (Azure Key Vault/AWS Secrets Manager)</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Databricks workspace provisioned</li>
                    <li>Secret scopes configured</li>
                    <li>Incident response procedures defined</li>
                    <li>Emergency contact list prepared</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. Using advanced AI-powered pattern recognition and Named Entity Recognition (NER), Cyera automatically identifies exposed API keys, secrets, and tokens in Databricks notebooks, job configurations, and data files. This enables immediate remediation of credential exposures before they can be exploited.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Assess the exposure scope</div>
            <p>Review the Cyera findings to understand which credentials are exposed, their location, and potential impact. Prioritize active API keys and tokens that could provide immediate system access.</p>
            <div class="code-block">databricks secrets list-scopes</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Rotate compromised credentials immediately</div>
            <p>For each exposed credential, generate new API keys or tokens in the source system. Update applications and services to use the new credentials before revoking the old ones.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Implement proper secret management</div>
            <p>Move hardcoded secrets from notebooks and configurations into Databricks secret scopes. Use external secret stores like Azure Key Vault or AWS Secrets Manager for enhanced security.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Update code and configurations</div>
            <p>Replace hardcoded credentials with secret references using dbutils.secrets.get(). Update job configurations, init scripts, and cluster settings to use proper secret management patterns.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Databricks Notebooks & Jobs</h4>
                <p>Source locations of exposed credentials</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Detection</h4>
                <p>Identifies patterns and extracts credential exposures</p>
            </div>
            <div class="component-card">
                <h4>Secret Management System</h4>
                <p>Secure storage for rotated credentials</p>
            </div>
            <div class="component-card">
                <h4>Remediation Tracking</h4>
                <p>Monitors fix status and compliance</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Remediation Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Detect Exposure</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Rotate Credentials</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Update References</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Verify Remediation</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Emergency Response</h4>
	                <ul>
	                    <li>Establish credential rotation SLAs</li>
	                    <li>Maintain emergency contact procedures</li>
	                    <li>Document all remediation actions taken</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Secret Management</h4>
	                <ul>
	                    <li>Use external secret stores when possible</li>
	                    <li>Implement least-privilege access policies</li>
	                    <li>Enable secret rotation automation</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Failing to check git history for exposed secrets</li>
	                    <li>Not updating all dependent services simultaneously</li>
	                    <li>Missing secrets in cluster init scripts</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.databricks.com/aws/en/security/secrets/">Databricks Secret Management Documentation</a></li>
            <li><a href="https://www.nist.gov/news-events/news/2020/09/security-and-privacy-controls-information-systems-and-organizations-nist">NIST 800-53 Security and Privacy Controls</a></li>
            <li><a href="https://lucid.now/blog/secure-api-key-management-best-practices/">Secure API Key Management Best Practices</a></li>
            <li><a href="https://www.databricks.com/trust/security-features/best-practices">Databricks Security Best Practices</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-api-keys-secrets-tokens-databricks" class="action-button">🛡️ Prevent: Implement proactive secret management controls</a>
            <a href="/guides/detect-api-keys-secrets-tokens-databricks" class="action-button">🔍 Detect: Set up continuous monitoring for credential exposures</a>
        </div>
    </div>
</div>