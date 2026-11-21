# web: browser view

## What this will do

Show the timeline in a browser using plain HTML and ES modules, with no build
step and no network access. It only reads from the other parts.

## What's hard

- Showing a branching history that keeps changing underneath the viewer.
- Making it clear to a player what an edit to the past changed.
- Modules loaded from `file://` are blocked by browsers, so a tiny local
  server may be needed.
