// The one working piece so far: a pure simulation step.
// Same (state, input) always gives the same result. No clock, no Math.random,
// no mutation of the arguments.

/**
 * @param {{tick: number, value: number}} state
 * @param {{delta: number}} input
 * @returns {{tick: number, value: number}}
 */
export function step(state, input) {
  return {
    tick: state.tick + 1,
    // `| 0` keeps the value a 32-bit integer so results never depend on float quirks.
    value: (state.value + input.delta) | 0,
  };
}
