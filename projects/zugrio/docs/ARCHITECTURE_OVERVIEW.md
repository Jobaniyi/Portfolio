# Architecture Overview

This public document is intentionally high-level. It shows the product decomposition without exposing proprietary trading logic.

## Core separation of concerns

Zugrio separates five concerns that trading tools can easily collapse together:

1. **Market intelligence** — what is happening in the relevant market/instrument.
2. **Strategy evaluation** — whether the selected strategy currently recognizes a valid setup.
3. **Current conditions** — whether the trade available now still qualifies.
4. **Control** — whether Zugrio is permitted to do anything beyond analysis.
5. **Decision history** — what the system knew, concluded and did at the time.

## Conceptual flow

```text
Market / broker data
        │
        ▼
Market intelligence
        │
        ▼
Strategy evaluation
        │
        ▼
Current-condition recheck
        │
        ▼
Decision + control layer
        │
        ├────────► Signal-only output
        │
        ▼
Broker adapter
        │
        ▼
Decision history / review
```

## Broker-neutral boundary

Broker integration is treated as an adapter boundary rather than allowing any one broker's object model to define Zugrio's internal product semantics.

## Safety boundary

A broker connection is not the same thing as permission to place a trade.

```text
Product entitlement
        ≠
Broker credential
        ≠
Execution authority
        ≠
Permission for a specific order
```

That separation supports least privilege, revocation, auditability and multi-broker evolution.

## Decision history

The product preserves decision state at the time an action was considered rather than trying to reconstruct the story only from final P&L.

This supports separate review of:
- strategy quality;
- process adherence;
- execution;
- financial outcome.

## Intentionally omitted

This public diagram excludes proprietary:
- strategy state machines;
- evidence/admission rules;
- model applicability logic;
- risk calculations;
- entry/exit/protection algorithms;
- broker reconciliation internals;
- private research/test evidence.
