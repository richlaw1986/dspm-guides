---
title: "AWS PHI Detection"
description: "Learn how to detect protected health information (PHI) in AWS environments. Follow step-by-step guidance for HIPAA compliance and secure healthcare data management."
meta_title: "Detect PHI in AWS with AI | DSPM Healthcare Security Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "aws"
risk: "unencrypted sensitive data"
regulation: "HIPAA"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Unencrypted Sensitive Data</div>
        <div class="badge regulation">HIPAA</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where protected health information (PHI) is stored within your AWS environment, so you can remediate unintended exposures before they become costly HIPAA violations. Scanning for PHI in AWS is critical for healthcare organizations and their business associates, as it helps you prove you've discovered and accounted for all sensitive patient data—mitigating the risk of unencrypted sensitive data exposure.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Unencrypted sensitive data exposure
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> HIPAA Privacy and Security Rules
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance with healthcare data protection requirements.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>AWS IAM administrator access</li>
                    <li>Amazon Macie service permissions</li>
                    <li>S3 bucket read access across accounts</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>AWS CLI or SDK</li>
                    <li>Cyera DSPM account</li>
                    <li>API credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>AWS account with healthcare workloads</li>
                    <li>S3 buckets containing potential PHI</li>
                    <li>Cross-account access configured</li>
                    <li>CloudTrail logging enabled</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and Named Entity Recognition (NER) models, Cyera automatically identifies PHI patterns in your AWS environment—from patient names and medical record numbers to diagnostic codes and treatment notes—ensuring comprehensive HIPAA compliance and real-time breach prevention.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure AWS IAM roles and permissions</div>
            <p>Create a dedicated service role with the minimum required permissions for PHI discovery across S3, RDS, and other AWS services storing potential healthcare data.</p>
            <div class="code-block">aws iam create-role --role-name CyeraPHIDiscovery --assume-role-policy-document file://trust-policy.json</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable comprehensive data discovery</div>
            <p>In the Cyera portal, navigate to Integrations → Cloud → Add AWS. Provide your account ID, role ARN, and external ID. Configure discovery scope to include all regions and services containing potential PHI.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Deploy AI-powered classification models</div>
            <p>Configure Cyera's NER models to detect healthcare-specific identifiers including patient names, medical record numbers, insurance IDs, and clinical notes. Set confidence thresholds appropriate for your risk tolerance.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate findings and establish monitoring</div>
            <p>Review the initial PHI detection report, validate classifications against known sensitive datasets, and configure real-time alerts for new PHI discoveries. Establish automated remediation workflows for high-risk findings.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>AWS S3/RDS/EBS</h4>
                <p>Source repositories containing potential PHI</p>
            </div>
            <div class="component-card">
                <h4>Cyera Discovery Engine</h4>
                <p>Scans and samples data using secure APIs</p>
            </div>
            <div class="component-card">
                <h4>AI Classification Models</h4>
                <p>NER and ML models identify PHI patterns</p>
            </div>
            <div class="component-card">
                <h4>HIPAA Compliance Dashboard</h4>
                <p>Real-time visibility and audit reports</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Discover Data Stores</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply AI Classification</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Identify PHI Patterns</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Generate Compliance Reports</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Performance Considerations</h4>
	                <ul>
	                    <li>Start with critical healthcare workloads first</li>
	                    <li>Use intelligent sampling for large datasets</li>
	                    <li>Schedule scans during low-usage periods</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Tuning Detection Rules</h4>
	                <ul>
	                    <li>Customize PHI patterns for your organization</li>
	                    <li>Maintain allowlists for test/synthetic data</li>
	                    <li>Adjust sensitivity for different data types</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Missing PHI in EBS snapshots and AMIs</li>
	                    <li>Overlooking database backups and logs</li>
	                    <li>Insufficient cross-account discovery scope</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.aws.amazon.com/macie/latest/user/mdis-reference-phi.html">AWS Macie PHI Detection Guide</a></li>
            <li><a href="https://aws.amazon.com/blogs/industries/common-techniques-to-detect-phi-and-pii-data-using-aws-services/">AWS Blog: PHI Detection Techniques</a></li>
            <li><a href="https://docs.aws.amazon.com/comprehend-medical/latest/dev/textanalysis-phi.html">Amazon Comprehend Medical PHI Detection</a></li>
            <li><a href="https://docs.aws.amazon.com/whitepapers/latest/architecting-hipaa-security-and-compliance-on-aws/architecting-hipaa-security-and-compliance-on-aws.html">AWS HIPAA Compliance Whitepaper</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-phi-aws" class="action-button">🛡️ Prevent: Implement PHI exposure prevention controls</a>
            <a href="/guides/fix-exposure-of-phi-aws" class="action-button">🔧 Fix: Remediate exposed PHI in AWS environments</a>
        </div>
    </div>
</div>