Now I'll create the Eleventy page for "Detect financial records on AWS" using the same HTML structure and adapting the content appropriately:

---
title: "AWS Financial Records Detection"
description: "Learn how to detect financial records in AWS environments. Follow step-by-step guidance for PCI-DSS compliance."
meta_title: "Detect Financial Records in AWS with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "aws"
risk: "data exposure"
regulation: "PCI-DSS"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Data Exposure</div>
        <div class="badge regulation">PCI-DSS</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where financial records are stored within your AWS environment, so you can remediate unintended exposures before they become breaches. Scanning for financial data in AWS is a priority for organizations subject to PCI-DSS, as it helps you prove you've discovered and accounted for all sensitive financial assets—mitigating the risk of data exposure through misconfigured services.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure of financial records
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
                    <li>AWS IAM admin or cross-account role</li>
                    <li>S3:GetObject, S3:ListBucket permissions</li>
                    <li>RDS:DescribeDBInstances access</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>AWS CLI</li>
                    <li>Cyera DSPM account</li>
                    <li>API credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>AWS account provisioned</li>
                    <li>CloudTrail enabled</li>
                    <li>CLI authenticated</li>
                    <li>Network ACLs configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and Named Entity Recognition (NER) models, Cyera automatically identifies financial records, payment card data, and banking information across your AWS infrastructure, ensuring you stay ahead of accidental exposures and meet PCI-DSS audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your AWS environment</div>
            <p>Set up cross-account IAM roles with the minimum required privileges for data discovery across S3 buckets, RDS instances, and other AWS data stores.</p>
            <div class="code-block">aws configure --profile cyera-scanner</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select AWS, provide your account ID and IAM role ARN, then define the scan scope to include relevant regions and services.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure webhooks or streaming exports to push scan results into your SIEM or AWS Security Hub. Link findings to existing ticketing systems like Jira or ServiceNow for remediation workflows.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review the initial detection report, prioritize S3 buckets and databases with large volumes of financial data, and adjust detection rules to reduce false positives. Schedule recurring scans to maintain visibility.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>AWS Services</h4>
                <p>Source of data across S3, RDS, DynamoDB, and Redshift</p>
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
                <span class="flow-step">Enumerate Resources</span>
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
	                    <li>Use sampling for very large datasets</li>
	                    <li>Prioritize high-risk regions and services</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Maintain allowlists for test financial data</li>
	                    <li>Adjust confidence thresholds for card numbers</li>
	                    <li>Match rules to your PCI-DSS scope</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Forgetting EBS snapshots and AMIs</li>
	                    <li>Over-scanning CloudTrail logs</li>
	                    <li>Neglecting to rotate access keys regularly</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://aws.amazon.com/compliance/pci-dss-level-1-faqs/">PCI Compliance on Amazon Web Services (AWS)</a></li>
            <li><a href="https://docs.aws.amazon.com/macie/latest/user/data-classification.html">Discovering sensitive data with Amazon Macie</a></li>
            <li><a href="https://docs.aws.amazon.com/whitepapers/latest/data-classification/using-aws-cloud-to-support-data-classification.html">Using AWS Cloud to support data classification</a></li>
            <li><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/CloudTrail-compliance.html">Compliance validation for AWS CloudTrail</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-financial-records-aws" class="action-button">🛡️ Prevent: Set up policies to prevent financial data exposure</a>
            <a href="/guides/fix-exposure-of-financial-records-aws" class="action-button">🔧 Fix: Remediate exposed financial records</a>
        </div>
    </div>
</div>