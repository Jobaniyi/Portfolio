/**
 * Sanitized portfolio example.
 *
 * This is not Zugrio's proprietary trading engine.
 * It demonstrates the separation of decision state and execution permission.
 */

export type DecisionState =
  | "FORMING"
  | "READY"
  | "TRIGGERED"
  | "PASS";

export type ControlMode = "SIGNAL" | "SEMI_AUTO";

export interface Decision {
  state: DecisionState;
  stillQualifies: boolean;
  fresh: boolean;
}

export interface Authority {
  mode: ControlMode;
  brokerTradingAccess: boolean;
  userApproved: boolean;
}

export function maySubmitOrder(
  decision: Decision,
  authority: Authority
): boolean {
  if (authority.mode === "SIGNAL") return false;

  return (
    decision.state === "TRIGGERED" &&
    decision.stillQualifies &&
    decision.fresh &&
    authority.brokerTradingAccess &&
    authority.userApproved
  );
}
