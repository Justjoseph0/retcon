# timeline: branching timeline with edits in the past

## What this will do

Store the shared history of the game, let it branch, and let players edit an
earlier moment. After an edit, recompute every later state so the timeline is
consistent again.

## What's hard

- Recomputing everything after an edit, quickly enough to feel interactive.
- Keeping all players looking at the same timeline while edits arrive.
- Deciding what "consistent" means in a way that can be tested.

## Open questions

- What exactly counts as a paradox?
- What happens to later events when an edit to the past invalidates them: are
  they dropped, rewritten, or moved to a branch?
- How are two players' edits to the same moment ordered?
- What if two edits to different moments conflict only once both are applied?
- Does an edit change the one shared timeline, or create a branch that players
  then have to merge or choose between?
- Who is allowed to edit which moments? Can players edit moments they weren't
  part of?
- Can an edit undo another player's edit, and can that be undone in turn?
- What is the cost limit for an edit? Is there a cap on how far back or how
  much gets recomputed?
- What does a player see while a recomputation is in progress?
- When an edit changes a player's own earlier decisions, are their later inputs
  kept as recorded, or re-decided?
- How do you test "always consistent" when the edits are random?
