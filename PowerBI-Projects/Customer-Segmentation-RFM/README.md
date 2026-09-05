# Customer Segmentation Analysis

## Project Overview

This Power BI project delivers a Customer Segmentation dashboard designed to help businesses understand customer characteristics, segment customers based on RFM analysis, and review customer-level sales performance. The report combines AdventureWorks sales, customer, geography, product, territory, and date data with an RFM segmentation table to provide a structured view of customer behavior.
## 

![Customer Segmentation Analysis](https://github.com/amanuelgebreegziabhare-maker/amanuel_gebreegziabhare/blob/main/PowerBI-Projects/Customer-Segmentation-RFM/Customer%20Segmentation%20Analysis%20-%20Dashboard%20Screenshot01.png)

## Objectives

- Analyze customer demographics and sales contribution
- Segment customers using Recency, Frequency, and Monetary (RFM) analysis
- Compare sales and customer activity across customer segments
- Identify customers who are loyal, promising, at risk, or showing signs of disengagement
- Provide customer-level details including sales, country, gender, and segment
- Support targeted customer retention, engagement, and marketing decisions

## Tools & Techniques

- Power BI Desktop
- Power Query for data import and transformation
- DAX for measures and analytics
- RFM analysis for customer segmentation
- Dashboard design and interactive filtering

## Files Included

- `AdventureWorksDW.XLSX` — source AdventureWorks data containing fact sales and customer, product, date, geography, and sales territory tables
- `RFM Table.xlsx` — RFM segment definitions, score combinations, segment ordering, descriptions, and recommended marketing actions
- `Customer Segmentation Analysis - Dashboard Screenshot01.png` — Customer Demographics dashboard preview
- `Customer Segmentation Analysis - Dashboard Screenshot02.png` — Customer Segmentation (RFM Analysis) dashboard preview
- `Customer Segmentation Analysis - Dashboard Screenshot03.png` — Customer Details dashboard preview

## 📊 Power BI Dashboard

### Access the Project

- 🌐 [View Interactive Power BI Dashboard](https://github.com/amanuelgebreegziabhare-maker/amanuel_gebreegziabhare/blob/main/PowerBI-Projects/Customer-Segmentation-RFM/Customer%20Segmentation%20Analysis%20in%20Power%20BI.pbix)
- 📥 [Download Power BI Report (.pbix)](./Customer-Segmentation-Analysis.pbix)

> **Note:** The interactive dashboard is available through Power BI Service.
> The `.pbix` file is also provided for download so that the report structure,
> data model, and DAX calculations can be reviewed in Power BI Desktop.

## Dashboard Pages

### 1. Customer Demographics

The Customer Demographics page, whose screenshot shown above, provides a high-level view of the customer base and sales distribution.

Key visuals include:

- Total Sales
- Number of Customers
- Total Sales by Country
- Total Sales by Gender
- Total Sales by Marital Status
- Total Sales by Age Band
- Product Name filter for interactive analysis

The dashboard displays approximately **$29M in total sales** and **18.5K customers**, with sales distributed across countries, gender, marital status, and age bands.

### 2. Customer Segmentation (RFM Analysis)

![Customer Segmentation (RFM Analysis)](https://github.com/amanuelgebreegziabhare-maker/amanuel_gebreegziabhare/blob/main/PowerBI-Projects/Customer-Segmentation-RFM/Customer%20Segmentation%20Analysis%20-%20Dashboard%20Screenshot02.png)

The Customer Segmentation page applies RFM-based customer grouping to compare customer activity and sales across segments.

The RFM table contains the following customer segments:

- Champions
- Loyal
- Potential Loyalist
- Promising
- New Customers
- About To Sleep
- Hibernating Customers
- Need Attention
- At Risk
- Cannot Lose Them
- Lost Customers

The segment definitions and recommended marketing actions in the RFM table are intended to support targeted customer engagement. For example, Champions are treated as highly loyal and valuable customers, while At Risk, Cannot Lose Them, and Lost Customers require retention or win-back strategies.

Key visuals include:

- Number of Customers by Segment
- Total Sales by Segment
- Recency Value by Segment
- Segment-level RFM analysis

The dashboard can be used to identify high-value segments, understand customer engagement patterns, and prioritize retention activities.

### 3. Customer Details

![Customer Details](https://github.com/amanuelgebreegziabhare-maker/amanuel_gebreegziabhare/blob/main/PowerBI-Projects/Customer-Segmentation-RFM/Customer%20Segmentation%20Analysis%20-%20Dashboard%20Screenshot03.png)

The Customer Details page provides a customer-level view that connects individual customers with their sales and RFM segment.

Displayed fields include:

- Customer Key
- First Name
- Last Name
- Email Address
- Sales Territory Country
- Phone
- Gender
- Sales Amount
- Segment

This page allows users to move from high-level segmentation insights to individual customer records for more detailed analysis.

## Key Metrics & Insights

The dashboard focuses on:

- Total Sales
- Number of Customers
- Sales by Country
- Sales by Gender
- Sales by Marital Status
- Sales by Age Band
- Customer activity by segment
- Total Sales by Segment
- Recency by Segment
- Individual customer sales and segment classification

## RFM Segmentation Framework

The RFM table maps RFM score combinations to customer segments and provides a recommended marketing action for each segment.

Examples include:

- **Champions** — Reward with loyalty programs, exclusive previews, or priority access
- **Loyal** — Maintain engagement through personalized communication and loyalty programs
- **Potential Loyalist** — Nurture with personalized offers and incentives
- **New Customers** — Use onboarding, welcome communication, and repeat-purchase incentives
- **At Risk** — Encourage retention with loyalty rewards or exclusive promotions
- **Cannot Lose Them** — Use VIP treatment and personalized outreach
- **Lost Customers** — Use win-back campaigns or feedback initiatives

## How to Explore

Open the Power BI report in Power BI Desktop to review the dashboard pages, interactive filters, segment analysis, and customer-level details.

Start with **Customer Demographics** for an overall view of the customer base, move to **Customer Segmentation** to evaluate RFM segments, and use **Customer Details** to examine individual customers.

## Contact

For questions about this project, contact me at amanuelgebreegziabhare@gmail.com.
