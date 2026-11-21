# replay: session recorder and replayer

## What this will do

Record a play session (the inputs, in order, plus the starting state) and
replay it to get exactly the same result.

## What's hard

- "Exactly the same" must be provable, for example by comparing a hash of the
  state at every step.
- Recordings must stay replayable as the game code changes.
- A session that includes edits to the past must record the edits too, and
  replay them in the same order.
