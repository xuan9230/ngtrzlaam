import { EventEffect } from "../baseTypes";

export function applyItemToEffects(
  effects: EventEffect[],
  itemNames: string[]
): EventEffect[] {
  return effects.map((effect) => {
    let delta = effect.delta;

    if (itemNames.includes("橘面佛的认可") && delta > 0) {
      delta = delta * 1.2;
    }

    return {
      ...effect,
      delta,
    };
  });
}
