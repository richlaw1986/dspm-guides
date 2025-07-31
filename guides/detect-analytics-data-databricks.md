---
title: "Databricks Analytics Data Detection"
description: "Learn how to detect analytics data in Databricks environments. Follow step-by-step guidance for SOC 2 compliance and data governance."
meta_title: "Detect Analytics Data in Databricks with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "databricks"
risk: "shadow data"
regulation: "SOC 2"
status: "published"
order: 1
layout: base.njk
---

<div class="container">
    <div class="header">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="badge">Shadow Data</div>
        <div class="badge regulation">SOC 2</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where analytics data is stored within your Databricks environment, so you can remediate unintended exposures before they become breaches. Scanning for analytics data in Databricks is a priority for organizations subject to SOC 2, as it helps you prove you've discovered and accounted for all business intelligence assets—mitigating the risk of shadow data spreading across unauthorized locations.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Shadow data in unauthorized locations
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> SOC 2 Security and Availability
        </div>
        
        <p>A thorough scan delivers immediate visibility into your analytics data landscape, laying the foundation for automated policy enforcement and ongoing compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Databricks admin or service principal</li>
                    <li>catalogs/read, schemas/read, tables/read privileges</li>
                    <li>Ability to install Databricks CLI or Terraform</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Databricks CLI</li>
                    <li>Cyera DSPM account</li>
                    <li>API credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Databricks workspace provisioned</li>
                    <li>Unity Catalog enabled</li>
                    <li>CLI authenticated</li>
                    <li>Networking rules configured</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and machine learning algorithms for pattern recognition and semantic analysis, Cyera automatically identifies analytics data including dashboards, reports, metrics, and business intelligence assets in Databricks, ensuring you maintain complete visibility over your data analytics landscape and meet SOC 2 audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your Databricks workspace</div>
            <p>Ensure Unity Catalog is enabled in your account and create a service principal with the minimum required privileges to access analytics tables and metadata.</p>
            <div class="code-block">databricks configure --token</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable analytics data scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Databricks, provide your host URL and service principal details, then define the scan scope to include analytics workspaces and BI tables.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with analytics and reporting tools</div>
            <p>Configure webhooks or streaming exports to push analytics data discovery results into your business intelligence platforms or governance dashboards. Link findings to existing data catalog systems like Apache Atlas or AWS Glue.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate analytics data classification and tune policies</div>
            <p>Review the initial detection report, prioritize tables containing business metrics and KPIs, and adjust detection rules to identify dashboard data, reporting datasets, and analytical models. Schedule recurring scans to maintain visibility across your analytics pipeline.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Databricks Unity Catalog</h4>
                <p>Source of metadata for analytics tables, views, and notebooks</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and samples analytics data for classification</p>
            </div>
            <div class="component-card">
                <h4>Cyera AI Engine</h4>
                <p>Applies ML models for analytics data pattern detection</p>
            </div>
            <div class="component-card">
                <h4>Reporting & Governance</h4>
                <p>Analytics dashboards, alerts, and data lineage tracking</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Enumerate Analytics Assets</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Send to Cyera</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply AI Detection</span>
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
	                    <li>Focus scans on active analytics workspaces</li>
	                    <li>Use incremental discovery for large datasets</li>
	                    <li>Prioritize business-critical dashboards and reports</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Analytics Data Classification</h4>
	                <ul>
	                    <li>Define patterns for KPIs, metrics, and dashboard data</li>
	                    <li>Classify by business unit and sensitivity level</li>
	                    <li>Tag analytics models and ML training datasets</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Missing analytics data in external storage mounts</li>
	                    <li>Overlooking temporary analytical results</li>
	                    <li>Failing to track data lineage in ML pipelines</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.databricks.com/aws/en/data-governance/unity-catalog/">Databricks Unity Catalog Data Governance</a></li>
            <li><a href="https://docs.databricks.com/aws/en/security/">Databricks Security and Compliance Documentation</a></li>
            <li><a href="https://www.ibm.com/think/topics/data-security-posture-management">What is Data Security Posture Management (DSPM)?</a></li>
            <li><a href="https://learn.microsoft.com/en-us/purview/data-security-posture-management-get-started">Getting Started with DSPM</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-analytics-data-databricks" class="action-button">🛡️ Prevent: Set up access controls for analytics data</a>
            <a href="/guides/fix-exposure-of-analytics-data-databricks" class="action-button">🔧 Fix: Remediate exposed analytics datasets</a>
        </div>
    </div>
</div>