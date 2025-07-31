Here's the complete Eleventy page for "Prevent exposure of unstructured data on AWS":

```html
---
title: "AWS Unstructured Data Exposure Prevention"
description: "Learn how to prevent exposure of unstructured data in AWS environments. Follow step-by-step guidance for GDPR compliance and data protection."
meta_title: "Prevent Unstructured Data Exposure on AWS with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "aws"
risk: "data exposure"
regulation: "GDPR"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Data Exposure</div>
        <div class="badge regulation">GDPR</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to proactively secure every location where unstructured data is stored within your AWS environment, preventing accidental exposures before they become costly breaches. Implementing preventive controls for unstructured data in AWS is critical for organizations subject to GDPR, as it helps establish proper data governance and demonstrates due diligence in protecting personal information across S3 buckets, EFS volumes, and other storage services.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure through misconfigured storage services
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> GDPR General Data Protection Regulation
        </div>
        
        <p>A comprehensive prevention strategy delivers proactive security posture, establishing automated policy enforcement and continuous compliance monitoring.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>AWS IAM admin or PowerUser access</li>
                    <li>S3 bucket and object permissions</li>
                    <li>CloudFormation deployment rights</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>AWS CLI configured</li>
                    <li>Cyera DSPM account</li>
                    <li>Terraform or CloudFormation</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>AWS account with active services</li>
                    <li>S3 buckets and storage services</li>
                    <li>CloudTrail logging enabled</li>
                    <li>VPC and networking configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and Natural Language Processing (NER) models, Cyera automatically identifies and classifies unstructured data in AWS services like S3, EFS, and FSx, ensuring comprehensive protection against exposure risks while maintaining GDPR compliance requirements.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure AWS service security baselines</div>
            <p>Enable S3 Block Public Access at the account level, configure default encryption for all buckets, and establish IAM policies that follow the principle of least privilege.</p>
            <div class="code-block">aws s3control put-public-access-block --account-id 123456789012 --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Deploy automated discovery and classification</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add AWS. Provide your AWS account credentials and configure the service scope to include S3, EFS, and other storage services for comprehensive unstructured data discovery.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Implement preventive controls and policies</div>
            <p>Configure automated remediation workflows in Cyera to immediately quarantine or encrypt newly discovered sensitive unstructured data. Set up policy violations alerts and integrate with AWS Config for continuous compliance monitoring.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Establish monitoring and governance</div>
            <p>Deploy CloudWatch alarms for unusual access patterns, configure Cyera dashboards to track data exposure metrics, and establish regular review cycles to ensure ongoing protection of unstructured data assets.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>AWS Storage Services</h4>
                <p>S3, EFS, FSx containing unstructured data</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>NER models classify and tag sensitive content</p>
            </div>
            <div class="component-card">
                <h4>Policy Engine</h4>
                <p>Automated remediation and access controls</p>
            </div>
            <div class="component-card">
                <h4>Monitoring & Alerts</h4>
                <p>Real-time notifications and compliance tracking</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Prevention Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Discover Assets</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">AI Classification</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply Controls</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Monitor Compliance</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Security Hardening</h4>
	                <ul>
	                    <li>Enable MFA for all administrative access</li>
	                    <li>Use VPC endpoints for private connectivity</li>
	                    <li>Implement server-side encryption by default</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Data Governance</h4>
	                <ul>
	                    <li>Establish data retention policies</li>
	                    <li>Implement automated data lifecycle management</li>
	                    <li>Regular access reviews and audits</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Forgetting to secure temporary or staging buckets</li>
	                    <li>Over-permissive cross-account access policies</li>
	                    <li>Neglecting to monitor data sharing activities</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html">Security best practices for Amazon S3</a></li>
            <li><a href="https://aws.amazon.com/blogs/security/top-10-security-best-practices-for-securing-data-in-amazon-s3/">Top 10 security best practices for securing data in Amazon S3</a></li>
            <li><a href="https://docs.aws.amazon.com/macie/latest/user/data-classification.html">Discovering sensitive data with Macie</a></li>
            <li><a href="https://aws.amazon.com/blogs/apn/knowits-adam-guide-to-gdpr-compliance-on-aws/">GDPR Compliance on AWS</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/detect-unstructured-data-aws" class="action-button">🔍 Detect: Discover existing unstructured data exposures</a>
            <a href="/guides/fix-exposure-of-unstructured-data-aws" class="action-button">🔧 Fix: Remediate identified data exposure issues</a>
        </div>
    </div>
</div>
```

This page follows the exact HTML structure and CSS classes from your example while adapting the content for preventing exposure of unstructured data on AWS. Key adaptations include:

- **Regulation**: GDPR (most relevant for unstructured data protection)
- **Risk**: Data exposure (primary concern for unstructured data)
- **Platform**: AWS focus with S3, EFS, and other storage services
- **Cyera Integration**: Emphasizes AI and NER (Natural Language Processing) for unstructured data classification
- **References**: Real AWS documentation links found through search
- **Next Steps**: Links to detect and fix variations using the URL pattern you specified

The content maintains the technical depth and practical guidance style while being specifically tailored to AWS unstructured data protection scenarios.