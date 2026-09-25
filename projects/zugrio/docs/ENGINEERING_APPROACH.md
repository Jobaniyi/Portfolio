# Engineering Approach

## Human-owned product truth

AI tools accelerate research, implementation and review, but product truth lives in versioned artifacts rather than conversation history.

Material changes should be explicit and reviewable.

## Architecture decisions

Material decisions are documented when they affect:
- trust boundaries;
- security behavior;
- capital authority;
- data contracts;
- major technology direction;
- irreversible product semantics.

## Requirements and acceptance

Product work is expressed through requirements and acceptance criteria so implementation can be evaluated against a stable intent.

## Change discipline

A useful project rule is:

> Architecture migration and decision-semantic change should be separately reviewable.

Changing a framework, database or client should not silently change what a trading decision means.

## Least privilege

Broker access should use the least capability required by the active mode.

A read-only workflow should not request trading permission merely because an integration supports it.

## Revocation

A user-facing disconnect/revoke action should take effect inside the product immediately rather than relying on a third-party token eventually expiring.

## AI-assisted development

The project uses AI tooling with explicit accountability:
- AI may propose;
- tests/specifications verify;
- product truth is versioned;
- safety-critical assumptions require evidence;
- the founder/product owner retains responsibility for intent and acceptance.

The goal is to use AI aggressively without outsourcing product accountability.
