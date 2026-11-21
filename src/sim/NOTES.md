# sim: deterministic simulation core

## What this will do

Hold the game state and advance it one step at a time with a pure function:
`step(state, input) -> new state`. It depends on nothing else in the repo.
Everything else (timeline, replay) is built on top of it.

## What's hard

- No hidden inputs: no wall clock, no `Math.random`, no iteration-order
  surprises. Randomness must be seeded and its state must live in the game state.
- Floating-point results can differ across platforms, so the state may need
  integer or fixed-point math.
- Determinism must be checked, not assumed, so tests have to catch drift.
