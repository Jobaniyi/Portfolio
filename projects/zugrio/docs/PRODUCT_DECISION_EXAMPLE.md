# Product Decision Example — Signal Is Not Permission

A recurring problem in broker-connected software is treating technical access as user intent.

Zugrio separates them.

## The problem

A broker may expose a broad permission such as read-only account access or trading-capable access.

That broker permission answers:

> What can this application technically call?

It does not answer:

> What has this user authorized Zugrio to do in this situation?

## Product decision

Broker authorization and Zugrio execution authority are separate layers.

### Signal workflow

Where a broker supports read-only authorization, a Signal workflow should use that lower-privilege connection.

That creates a strong trust property: the broker credential itself cannot submit orders.

### Trading-capable workflow

If a user enables a mode that requires trading capability, broader broker authorization may be requested explicitly.

A specific order still requires Zugrio's own narrower controls.

## Why this matters

The separation improves:
- trust;
- least privilege;
- revocation;
- auditability;
- separation of concerns;
- future multi-broker support.

## Portfolio boundary

The production repository contains the detailed authority model, risk rules and broker contracts. Those are intentionally not reproduced here.
