---
title: "Snowflake Analytics Data Detection"
description: "Learn how to detect analytics data in Snowflake environments. Follow step-by-step guidance for SOC 2 compliance."
meta_title: "Detect Analytics Data in Snowflake with AI | DSPM Guide"
tags: ["guides"]
difficulty: "intermediate"
platform: "snowflake"
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
        <div class="guide-tags-container">
			<div class="guide-tags-wrapper">
		    {% if status == 'published' %}
		        {% if risk %}
		        <a href="/risk/{{ risk | downcase | replace: ' ', '-' }}/" class="guide-tag risk">{{ risk }}</a>
		        {% endif %}
		        {% if regulation %}
		        <a href="/regulation/{{ regulation | downcase | replace: ' ', '-' }}/" class="guide-tag regulation">{{ regulation }}</a>
		        {% endif %}
		        {% if platform %}
		        <a href="/platforms/{{ platform | downcase | replace: ' ', '-' }}/" class="guide-tag platform">{{ platform }}</a>
		        {% endif %}
		    {% else %}
		        <span class="guide-tag coming-soon">Coming Soon</span>
		    {% endif %}
		</div>
		</div>
    </div>

    <div class="content-section intro-section">
        <h2 class="section-title">Why It Matters</h2>
        <p>The core goal is to identify every location where analytics data is stored within your Snowflake environment, so you can remediate unintended exposures before they become breaches. Scanning for analytics data in Snowflake is a priority for organizations subject to SOC 2, as it helps you prove you've discovered and accounted for all sensitive analytical assets—mitigating the risk of shadow data repositories that exist outside your governance framework.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Shadow data repositories outside governance
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> SOC 2 Security Framework
        </div>
        
        <p>A thorough scan delivers immediate visibility, laying the foundation for automated policy enforcement and ongoing compliance.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Snowflake ACCOUNTADMIN or SYSADMIN role</li>
                    <li>Database and schema read privileges</li>
                    <li>Ability to create service accounts</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>External Tools</h4>
                <ul>
                    <li>Snowflake CLI or SnowSQL</li>
                    <li>Cyera DSPM account</li>
                    <li>API credentials</li>
                </ul>
            </div>
            <div class="prereq-card">
                <h4>Prior Setup</h4>
                <ul>
                    <li>Snowflake account provisioned</li>
                    <li>Network policies configured</li>
                    <li>Authentication method established</li>
                    <li>Data governance framework defined</li>
                </ul>
            </div>
        </div>
    </div>
	
    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By leveraging advanced AI and natural language processing (NLP) techniques, Cyera automatically identifies analytics data patterns, dashboard queries, and reporting datasets in Snowflake, ensuring you stay ahead of shadow data proliferation and meet SOC 2 audit requirements in real time.</p>
    </div>
	

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure your Snowflake connection</div>
            <p>Create a dedicated service account with appropriate read permissions across all databases and schemas. Configure network access policies to allow Cyera's scanning infrastructure.</p>
            <div class="code-block">CREATE USER cyera_scanner PASSWORD='<secure_password>' DEFAULT_ROLE=SYSADMIN;</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable analytics data scanning</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Snowflake, provide your account URL and service account credentials, then configure detection rules specifically for analytics data patterns like aggregated tables, BI views, and reporting schemas.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Set up automated monitoring</div>
            <p>Configure scheduled scans to monitor for new analytics workloads, unauthorized data sharing, and changes in data classification. Set up alerts for when analytics data appears in unexpected locations or with improper access controls.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate findings and establish governance</div>
            <p>Review the initial detection report, categorize analytics datasets by sensitivity and business criticality, and establish data lineage tracking. Create policies to prevent analytics data from being inadvertently shared or copied to unsecured environments.</p>
        </div>
    </div>


    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Snowflake Information Schema</h4>
                <p>Source of metadata for tables, views, and queries</p>
            </div>
            <div class="component-card">
                <h4>Cyera Connector</h4>
                <p>Pulls metadata and analyzes query patterns</p>
            </div>
            <div class="component-card">
                <h4>AI Classification Engine</h4>
                <p>Applies ML models to identify analytics workloads</p>
            </div>
            <div class="component-card">
                <h4>Governance Dashboard</h4>
                <p>Risk scoring, alerts, and remediation workflows</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Scan Databases</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Analyze Patterns</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Classify Data</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Report Findings</span>
            </div>
        </div>
    </div>

	<div class="content-section">
	        <h2 class="section-title">Best Practices & Tips</h2>
	        <div class="best-practices-grid">
	            <div class="practice-card">
	                <h4>Performance Considerations</h4>
	                <ul>
	                    <li>Schedule scans during off-peak hours</li>
	                    <li>Use query result sampling for large datasets</li>
	                    <li>Implement incremental scanning for frequent updates</li>
	                </ul>
	            </div>
	            <div class="practice-card">
	                <h4>Analytics Data Identification</h4>
	                <ul>
	                    <li>Focus on aggregated tables and materialized views</li>
	                    <li>Monitor query history for analytical patterns</li>
	                    <li>Track data sharing and external access</li>
	                </ul>
	            </div>
	            <div class="practice-card warning-card">
	                <h4>Common Pitfalls</h4>
	                <ul>
	                    <li>Missing temporary analytics tables in transient databases</li>
	                    <li>Overlooking shared analytics data across accounts</li>
	                    <li>Failing to track data pipeline transformations</li>
	                </ul>
	            </div>
	        </div>
	    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="https://docs.snowflake.com/en/user-guide/classify-intro">Snowflake Sensitive Data Classification Documentation</a></li>
            <li><a href="https://docs.snowflake.com/en/user-guide/cert-soc-2">SOC 2 Type II Compliance in Snowflake</a></li>
            <li><a href="https://www.cyera.com/platform/dspm">Cyera DSPM Platform</a></li>
            <li><a href="https://docs.snowflake.com/en/user-guide/tutorials/sensitive-data-auto-classification">Snowflake Automated Data Classification Tutorial</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="/guides/prevent-exposure-of-analytics-data-snowflake" class="action-button">🛡️ Prevent: Implement access controls for analytics data</a>
            <a href="/guides/fix-exposure-of-analytics-data-snowflake" class="action-button">🔧 Fix: Remediate exposed analytics datasets</a>
        </div>
    </div>
</div>