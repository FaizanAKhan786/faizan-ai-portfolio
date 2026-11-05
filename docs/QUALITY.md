# AI Portfolio | Quality & reproducibility

> **Status rule:** Check the [live GitHub Actions history](https://github.com/FaizanAKhan786/faizan-ai-portfolio/actions) for real workflow conclusions. This document does not invent benchmark scores or imply every feature was tested.

## Automated verification

Node content/integrity tests, TypeScript checks, ESLint checks and Next.js production build in nested application folder.

- [View the CI workflow](https://github.com/FaizanAKhan786/faizan-ai-portfolio/actions/workflows/ci.yml)
- Any failing run is an unresolved result until corrected; a green syntax/unit-check workflow is not proof of deployment readiness.

## Reproduce the checks

Run these commands from the **repository root**, unless the commands change directories:

```bash
cd faizan-ai-portfolio
npm install
npm test
npm run typecheck
npm run lint
npm run build
```

## How to interpret the results

**Relevant metrics:** Static content integrity, code quality, type safety and buildability. No production traffic, conversion or user engagement metrics are inferred.

**Requirements and limitations:** Real AI answers and contact form delivery need external credentials and live deployment tests. Interactive simulation is not equivalent to a production agent.

Before comparing results, save the commit SHA, command, dataset and split (including seed), model revision, dependency environment, hardware/CPU/GPU, and the raw result file. Use the same evaluation set for all compared runs and distinguish **synthetic tests** from **real-world measurements**.

## Publication policy

Only publish numeric scores alongside the run configuration and raw evidence. A threshold, code assertion or example report must **not** be presented as a measured production result.

[Project README](../README.md) · [GitHub Actions](https://github.com/FaizanAKhan786/faizan-ai-portfolio/actions)
