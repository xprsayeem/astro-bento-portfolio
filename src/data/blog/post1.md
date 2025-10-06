---
title: "Entering the world of Data Engineering"
description: "This is my first blog post!"
pubDate: 2025-10-06T09:00:00-04:00
category: "intro"
draft: false
---

# Starting My Data Engineering Project

**Date:** October 06, 2025

---

## Why I Started

After a year of working across data validation, automation, and analytics roles, I wanted to push beyond dashboards and reports into how data actually *moves*. I wanted to understand ingestion, transformation, and orchestration; the backbone of every reliable data system. This project is my first full attempt to build an end‑to‑end data engineering workflow using AWS and Databricks.

---

## What I’m Learning

I’m learning how real data pipelines are structured and maintained. A few key lessons so far:

- Designing schemas for traceability and evolution  
- Understanding partitioning and file formats like Parquet and Delta  
- Managing permissions and access in AWS S3  
- Writing PySpark transformations that scale  
- Implementing Airflow for orchestration and job scheduling  
- Keeping everything version‑controlled, documented, and reproducible  

These skills are teaching me how to think like a systems engineer rather than a data consumer.

---

## The Data

I’m working with the **Toronto Licensed Cats and Dogs dataset**, an open dataset published by the City of Toronto. It includes pet license information such as animal type, breed, and neighborhood. It’s perfect for testing data ingestion patterns because it’s large enough to require partitioning and updates, but still human‑readable for validation.

My pipeline currently ingests this dataset from a local source into AWS S3, transforms it using PySpark in Databricks, and writes Delta tables into bronze and silver layers for structured analysis.

---

## What’s Next

Next steps include:

- Building the **Gold** layer to produce cleaned, enriched outputs ready for analytics tools  
- Integrating **Airflow orchestration** to schedule data refreshes automatically  
- Adding **data quality checks** and alerts for validation failures  
- Experimenting with **dbt** for SQL‑based transformations and testing  
- Creating a Power BI or Tableau dashboard connected to the Gold layer  

---

## How I Plan to Elevate My Abilities

I plan to formalize what I’m learning through certification and more complex builds. Specifically:

- Earning the **Databricks Certified Data Engineer Associate** credential  
- Expanding into **AWS Glue and Athena** for serverless querying  
- Experimenting with **streaming data ingestion** to learn real‑time concepts  
- Contributing to open datasets or pipelines on GitHub for public visibility  

Each step builds on the same foundation: reliability, scalability, and reproducibility. My goal isn’t just to finish this project, but to treat it as the baseline for everything that comes next.

---

**Repository:** [GitHub – Licensed Pets Data Pipeline](https://github.com/sayeemmahfuz)  
**Connect:** [LinkedIn – Sayeem Mahfuz](https://linkedin.com/in/sayeem-mahfuz)


---
  <br>
    <br>
      <br>


