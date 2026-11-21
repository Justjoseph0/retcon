# causality: causality graph

## What this will do

Record which events depend on which, so that when an earlier event changes we
know exactly which later events must be recalculated and which can stay as
they are.

## What's hard

- Dependencies are not always visible: an event can depend on state it read
  without anyone declaring it.
- Too coarse a graph recalculates too much. Too fine a graph misses real
  dependencies and leaves inconsistencies.
- The graph itself changes when the past is edited.

## Open questions

- How do you tell which later events depend on an earlier one?
- Is a dependency something the event declares, or something detected by
  watching what it read?
- What counts as a dependency: reading a value, being in the same place,
  being caused by the same player?
- If an event read a value that an edit changed to something that happens to be
  equal, does it still depend on the edit?
- Can the graph contain a cycle, and if an edit would create one, what happens?
- How does the graph record events that no longer happen after an edit?
- Is the graph rebuilt after each edit, or updated in place?
- How do you prove the graph is complete, meaning no real dependency is missing?
- How is the graph kept small enough when the history gets long?
