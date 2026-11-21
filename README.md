# Shared Timeline Game

## What the game is

**Status: planned. This repo is only the starting structure. Only the simulation step exists today (see "What exists today").**

A multiplayer game where all players share one timeline.

- **One shared timeline.** All players act in the same history. It is a list
  of moments, each one produced from the one before it by the simulation step.
- **Editing the past.** A player picks an earlier moment and changes it.
- **Staying consistent.** After a change, the game works out which later events
  depended on the changed moment and recalculates everything after it. The
  result must have no paradoxes. Everyone sees the same updated timeline.

**What a round looks like, and what the player does.** This is not decided
yet. The notes describe the loop only in general terms: players take actions,
the actions are recorded, and a player can go back and edit an earlier moment.
Rules such as how a round starts or ends, who may edit which moments, and what
happens when two players edit the same moment are listed as open questions in
[timeline](src/timeline/NOTES.md) and [causality](src/causality/NOTES.md).

| Piece | Status |
| --- | --- |
| Simulation step (same input, same result) | Exists |
| Branching timeline, edits to the past | Planned, not built |
| Causality graph | Planned, not built |
| Replay recorder | Planned, not built |
| Browser view | Planned, not built |
| Rounds, player actions, game rules | Not designed yet |

## The parts, and why each is hard

Each folder has a `NOTES.md` that says what the part will do and what is hard
about it.

| Part | Folder | What is hard |
| --- | --- | --- |
| Deterministic simulation core | [src/sim](src/sim/NOTES.md) | Same input must give the same result on every run and machine. |
| Branching, editable timeline | [src/timeline](src/timeline/NOTES.md) | Changing the past means recomputing everything after it. |
| Causality graph | [src/causality](src/causality/NOTES.md) | Knowing which later events depend on an earlier one. |
| Replay recorder | [src/replay](src/replay/NOTES.md) | A recording must replay exactly, including after format changes. |
| Browser view | [src/web](src/web/NOTES.md) | Showing a branching, changing past in a way people can follow. |

## How I will know it is done

1. **Exact replay.** A recorded session replays exactly the same, every time.
2. **Consistent edits.** Random edits to the past always leave a consistent
   timeline.

## What exists today

- `src/sim/step.js`: a pure simulation step.
- `test/sim.test.js`: runs the step twice on the same input and checks that
  both runs match.

## Running the tests

Needs Node 18 or newer. There are no dependencies and nothing is downloaded.

```
npm test
```
