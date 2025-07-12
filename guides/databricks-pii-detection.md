---
title: "Detect PII in Databricks"
description: "Learn how to detect PII in Databricks. Follow our step-by-step guidance & best practices."
layout: base.njk
risk: "Data Exposure"
regulation: "GDPR"
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
        <p>The core goal is to identify every location where personally identifiable information is stored within your Databricks environment, ensuring comprehensive data discovery across all catalogs, schemas, and tables. Detecting PII in Databricks is a priority because data lakes often contain vast amounts of unstructured and semi-structured data that can harbor sensitive information in unexpected formats. A systematic PII detection approach provides the foundation for implementing proper data classification, access controls, and masking policies required for GDPR compliance.</p>
        
        <div class="risk-highlight">
            <strong>Primary Risk:</strong> Data exposure through unclassified PII
        </div>
        
        <div class="regulation-highlight">
            <strong>Relevant Regulation:</strong> GDPR, CCPA, HIPAA
        </div>
        
        <p>Comprehensive PII detection enables data governance, privacy compliance, and risk mitigation across your entire data lakehouse architecture.</p>
    </div>

    <div class="content-section">
        <h2 class="section-title">Prerequisites</h2>
        <div class="prerequisites-grid">
            <div class="prereq-card">
                <h4>Permissions & Roles</h4>
                <ul>
                    <li>Databricks admin or service principal</li>
                    <li>catalogs/read, schemas/read, tables/read privileges</li>
                    <li>Access to all data sources and external locations</li>
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
                    <li>Data catalog and lineage configured</li>
                    <li>CLI authenticated</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="content-section">
        <h2 class="section-title">Step-by-Step Guide</h2>
        
        <div class="step">
            <div class="step-number">1</div>
            <div class="step-title">Configure Databricks workspace</div>
            <p>Set up Unity Catalog with proper permissions and create a dedicated service principal for PII scanning with minimal required privileges.</p>
            <div class="code-block">databricks configure --token
databricks unity-catalog catalogs list</div>
        </div>

        <div class="step">
            <div class="step-number">2</div>
            <div class="step-title">Enable scanning workflows</div>
            <p>In the Cyera portal, navigate to Integrations → DSPM → Add new. Select Databricks, provide your workspace URL and service principal credentials, then define scan scope including all catalogs and external data sources.</p>
        </div>

        <div class="step">
            <div class="step-number">3</div>
            <div class="step-title">Integrate with third-party tools</div>
            <p>Configure data flow integration to push PII findings into your data governance platform, SIEM, or Security Hub. Set up automated workflows to tag discovered PII and trigger remediation processes.</p>
        </div>

        <div class="step">
            <div class="step-number">4</div>
            <div class="step-title">Validate results and tune policies</div>
            <p>Review PII detection results, focusing on high-confidence findings and unexpected data locations. Adjust classification rules for structured, semi-structured, and unstructured data formats. Schedule continuous monitoring for new data ingestion.</p>
        </div>
    </div>

    <div class="cyera-highlight">
        <h3>Introducing Cyera</h3>
        <p>Cyera is a modern Data Security Posture Management (DSPM) platform that discovers, classifies, and continuously monitors your sensitive data across cloud services. By automating PII detection in Databricks, Cyera provides comprehensive visibility into your data lakehouse including Delta Lake tables, streaming data, and external data sources, ensuring GDPR and privacy compliance across your entire data ecosystem.</p>
    </div>

    <div class="content-section architecture-section">
        <h2 class="section-title">Architecture & Workflow</h2>
        
        <div class="component-grid">
            <div class="component-card">
                <h4>Databricks Unity Catalog</h4>
                <p>Source of metadata for catalogs, schemas, and tables</p>
            </div>
            <div class="component-card">
                <h4>Cyera Data Scanner</h4>
                <p>Scans Delta Lake tables and external data sources</p>
            </div>
            <div class="component-card">
                <h4>PII Classification Engine</h4>
                <p>Applies ML-based PII detection and sensitivity scoring</p>
            </div>
            <div class="component-card">
                <h4>Data Governance Integration</h4>
                <p>Tags data assets and triggers policy enforcement</p>
            </div>
        </div>

        <div class="flow-diagram">
            <h4>Data Flow Summary</h4>
            <div style="margin: 20px 0;">
                <span class="flow-step">Discover Data Assets</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Sample & Scan</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Classify PII</span>
                <span class="flow-arrow">→</span>
                <span class="flow-step">Apply Governance</span>
            </div>
        </div>
    </div>

    <div class="content-section">
        <h2 class="section-title">Best Practices & Tips</h2>
        <div class="best-practices-grid">
            <div class="practice-card">
                <h4>Performance Considerations</h4>
                <ul>
                    <li>Use intelligent sampling for large Delta Lake tables</li>
                    <li>Scan during low-usage periods to minimize impact</li>
                    <li>Leverage table statistics and metadata when available</li>
                    <li>Optimize scan frequency based on data change patterns</li>
                </ul>
            </div>
            <div class="practice-card">
                <h4>Tuning Detection Rules</h4>
                <ul>
                    <li>Configure region-specific PII patterns (EU vs US)</li>
                    <li>Adjust confidence thresholds for different data types</li>
                    <li>Create custom rules for industry-specific identifiers</li>
                    <li>Maintain allowlists for known synthetic test data</li>
                </ul>
            </div>
            <div class="practice-card warning-card">
                <h4>Common Pitfalls</h4>
                <ul>
                    <li>Missing external data sources and mounted storage</li>
                    <li>Overlooking PII in JSON, XML, and text columns</li>
                    <li>Insufficient permissions for comprehensive scanning</li>
                    <li>Neglecting streaming data and real-time ingestion</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="content-section references-section">
        <h2 class="section-title">References & Further Reading</h2>
        <ul>
            <li><a href="#">Databricks Unity Catalog documentation</a></li>
            <li><a href="#">GDPR compliance for data lakes</a></li>
            <li><a href="#">Cyera DSPM platform overview</a></li>
        </ul>
    </div>

    <div class="content-section next-steps">
        <h2 class="section-title">Next Steps</h2>
        <div style="margin-top: 20px;">
            <a href="#" class="action-button">🛡️ Fix: Implement data masking and access controls</a>
            <a href="#" class="action-button">📋 Audit: Review PII data lineage and usage patterns</a>
        </div>
    </div>
</div>