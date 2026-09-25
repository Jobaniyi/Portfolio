# Zugrio — Product & Technical Case Study

> Sanitized public work sample. The production repository is maintained separately.

**Zugrio** is a market-aware trading intelligence product designed to help self-directed traders keep a trade decision current as market conditions change.

**Live product:** https://zugrio.xyz

## My role

**Founder / Product Lead / Technical Product Owner**

My responsibilities include:
- product direction and prioritization;
- requirements, PRDs, acceptance criteria and release scope;
- system and domain architecture decisions;
- defining the boundary between signal, permission and execution;
- broker-integration requirements;
- product risk and trust decisions;
- frontend/product iteration;
- AI-assisted engineering governance and technical review.

AI development tools are used as engineering collaborators, while product intent, material architecture decisions, acceptance criteria and product-risk decisions remain human-owned and reviewable.

## The problem

Trading software often treats a signal as the completed decision.

In practice, the market keeps moving after the signal appears. Price, costs, context, entry quality and execution conditions can change before a trader acts.

Zugrio is designed around the full decision lifecycle:

**Market → Strategy → Current Conditions → Control → Decision History**

## Product principles

### Market-aware, not chart-only
The same pattern can mean different things in different markets. Market and instrument context remain part of the decision.

### Strategy-aware
The selected strategy defines what qualifies, what confirms an entry and what invalidates it.

### Re-evaluate after the signal
The original signal is preserved while the entry available now is evaluated separately.

### Signal is not permission
Finding a trade and being allowed to place one are different concerns.

### Review process separately from outcome
A profitable trade can still violate process. A losing trade does not automatically mean the strategy or execution was wrong.

## Technical material

- [Architecture Overview](docs/ARCHITECTURE_OVERVIEW.md)
- [Engineering Approach](docs/ENGINEERING_APPROACH.md)
- [Product Decision Example — Signal Is Not Permission](docs/PRODUCT_DECISION_EXAMPLE.md)
- [Sanitized TypeScript Example](sample/authority-example.ts)

## Technology direction

Current/public work includes React-based product surfaces and Cloudflare-backed web infrastructure.

The broader production direction is TypeScript-first, with React-based client surfaces, a Node/NestJS control plane, PostgreSQL for transactional data, broker-neutral integration boundaries and Python isolated to research/modeling.

This public case study does **not** imply that every planned production component is already shipped.

## Why this case study is sanitized

The production repository contains proprietary product specifications, strategy logic, evidence/admission rules, internal risk and authority semantics, research, implementation details and operating notes.

Those are intentionally excluded here.

This case study contains enough information to evaluate my product, architecture and technical-product work without exposing Zugrio's proprietary trading logic or operational attack surface.

## Intentionally excluded

- production source code;
- proprietary strategy definitions;
- entry/exit/risk algorithms;
- internal PRDs;
- detailed authority contracts;
- credentials or infrastructure identifiers;
- investor notes;
- unreleased research;
- private user data;
- private AI conversation history.

## Status

Zugrio is in private validation. This directory is a portfolio artifact, not the production source repository.
