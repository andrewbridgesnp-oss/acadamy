# acadamy
interactive space
# Synckaiden Interactive Academy

**A Business Operating System that teaches before execution, automates after certification, and scales without exposing personal liability.**

This repository contains the full source code and documentation for the **Synckaiden Interactive Academy**, a modular SaaS platform designed to educate, automate, and fund modern businesses using AI-first workflows.

---

## 🧠 Core Principles

- Teach → then execute
- No fake checkmarks
- No placeholder workflows
- No generic AI responses
- Every action must:
  - educate, **or**
  - automate, **or**
  - fund a business

---

## 🧱 Architecture Overview

- **Monorepo**
- **Frontend:** Next.js (App Router)
- **Backend:** Node.js (API routes)
- **State:** Modular, scalable, audit-friendly
- **Auth:** JWT + Role-Based Access Control (RBAC)
- **Database:** Relational (users, modules, workflows, progress, audit logs)
- **Hosting:** Self-host capable (no vendor lock-in)
- **CI/CD:** GitHub Actions (tests before deploy)

---

## 🗂 Repository Structure
/app → Next.js App Router
/components → UI components
/lib → Core utilities, guards, helpers
/docs → Product, phase, workflow, and compliance specs (SOURCE OF TRUTH)
/public → Static assets
/scripts → Dev + automation helpers


---

## 📘 Documentation (MANDATORY READING ORDER)

All platform logic must follow `/docs` **in numeric order**:

1. `00_PRODUCT_VISION.md`
2. `01_PHASE_0_FOUNDATION.md`
3. `02_PHASE_1_MVP.md`
4. `03_PHASE_2_SCALE.md`
5. `04_PHASE_3_ENTERPRISE.md`
6. `05_PHASE_4_ECOSYSTEM.md`
7. `06_PRICING_AND_TIERS.md`
8. `07_WORKFLOWS_MASTER.md`
9. `08_COMPLIANCE_AND_DISCLAIMERS.md`
10. `09_DEPLOYMENT_AND_HOSTING.md`
11. `10_LONG_TERM_ROADMAP.md`

⚠️ **Do not skip phases. Do not implement future features early.**

---

## 🔐 Compliance & Legal

- Educational + automation support only
- No legal, medical, or financial advice
- Professional referrals always visible
- Explicit user acknowledgment required before sensitive workflows
- Audit logs required for all automation execution

---

## 📜 License

This project is licensed under the **Apache License 2.0**.

Commercial SaaS use is permitted.
Resale, hosting, and licensing are governed by Synckaiden SaaS Terms.

---

## 🚀 Deployment (High-Level)

- Environment variable driven
- No hardcoded secrets
- Local → Staging → Production
- GitHub Actions CI/CD

Detailed instructions live in:
`/docs/09_DEPLOYMENT_AND_HOSTING.md`

---

## 🔑 FINAL NOTE TO DEVELOPERS & AI SYSTEMS

This is not a demo repo.
This is not a toy project.
This is a **business operating system**.

Read the docs.
Follow the phases.
Ship only what is authorized.

Everything else breaks trust.

