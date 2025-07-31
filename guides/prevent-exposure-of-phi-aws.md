Now I'll create the complete Eleventy page for "Prevent exposure of PHI on AWS":

---
title: "AWS PHI Exposure Prevention"
description: "Learn how to prevent exposure of Protected Health Information (PHI) in AWS environments. Follow step-by-step guidance for HIPAA compliance."
meta_title: "Prevent PHI Exposure in AWS with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "aws"
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
        <p>The core goal is to implement proactive measures that prevent Protected Health Information (PHI) from being exposed through misconfigurations, overly permissive access controls, or inadequate encryption across your AWS infrastructure. Preventing PHI exposure is critical for organizations subject to HIPAA, as it helps you maintain patient privacy and avoid costly breaches before they occur.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of sensitive healthcare information
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> HIPAA Health Insurance Portability and Accountability Act
        </div>
        
        <p>A comprehensive prevention strategy establishes multiple layers of protection, ensuring PHI remains secure through encryption, access controls, and continuous monitoring.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>AWS account admin or IAM full access</li>
                    <li>S3 bucket and KMS key management permissions</li>
                    <li>CloudTrail and CloudWatch configuration access</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>AWS CLI configured</li>
                    <li>Cyera DSPM account</li>
                    <li>Business Associate Agreement (BAA) with AWS</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>AWS account with BAA signed</li>
                    <li>VPC and security groups configured</li>
                    <li>KMS keys provisioned</li>
                    <li>Logging and monitoring enabled</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that uses AI-powered Named Entity Recognition (NER) and machine learning to automatically discover, classify, and protect PHI across your AWS environment. By continuously monitoring your data stores and applying intelligent policy enforcement, Cyera ensures your healthcare data remains compliant with HIPAA requirements while preventing accidental exposures before they occur.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Enable comprehensive encryption</div>
            <p>Configure encryption at rest and in transit for all AWS services storing PHI. Create dedicated KMS keys for healthcare data and enable default encryption on S3 buckets, RDS instances, and EBS volumes.</p>
            <div class="code-block">aws kms create-key --description "PHI-Encryption-Key" --key-usage ENCRYPT_DECRYPT</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Implement strict access controls</div>
            <p>Configure IAM policies following least privilege principles. Set up MFA requirements for all PHI access, implement role-based access controls, and establish regular access reviews.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Deploy Cyera DSPM protection</div>
            <p>In the Cyera portal, configure AWS integration with read-only permissions. Set up automated PHI classification policies, enable real-time exposure alerts, and configure automated remediation workflows for misconfigurations.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Establish monitoring and alerting</div>
            <p>Configure CloudTrail for comprehensive audit logging, set up CloudWatch alarms for suspicious access patterns, and integrate with your SIEM for real-time threat detection and incident response.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>AWS KMS</h4>
                <p>Centralized key management and encryption</p>
            </div>
            <div class="component-card">
                <h4>IAM & Access Controls</h4>
                <p>Role-based permissions and MFA enforcement</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>NER-based PHI classification and policy enforcement</p>
            </div>
            <div class="component-card">
                <h4>Monitoring & Alerting</h4>
                <p>CloudTrail, CloudWatch, and SIEM integration</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Prevention Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Encrypt Data</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Control Access</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Monitor Activity</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Alert & Remediate</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Encryption Strategy</h4>
	                <ul>
	                    <li>Use customer-managed KMS keys for PHI</li>
	                    <li>Enable encryption for all data at rest and in transit</li>
	                    <li>Regularly rotate encryption keys</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Access Management</h4>
	                <ul>
	                    <li>Implement principle of least privilege</li>
	                    <li>Require MFA for PHI access</li>
	                    <li>Conduct quarterly access reviews</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Overlooking temporary or staging environments</li>
	                    <li>Using default encryption instead of customer keys</li>
	                    <li>Insufficient logging and monitoring coverage</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://aws.amazon.com/compliance/hipaa-compliance/">AWS HIPAA Compliance Guide</a></li>
            <li><a href="https://docs.aws.amazon.com/wellarchitected/latest/healthcare-industry-lens/data-protection.html">AWS Healthcare Industry Lens - Data Protection</a></li>
            <li><a href="https://docs.aws.amazon.com/macie/latest/user/data-classification.html">Amazon Macie Sensitive Data Discovery</a></li>
            <li><a href="https://docs.aws.amazon.com/prescriptive-guidance/latest/aws-kms-best-practices/data-protection-encryption.html">AWS KMS Encryption Best Practices</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/detect-phi-aws" class="action-button">🔍 Detect: Discover existing PHI in your AWS environment</a>
            <a href="/guides/fix-exposure-of-phi-aws" class="action-button">🔧 Fix: Remediate exposed PHI findings</a>
        </div>
    </div>
</div>