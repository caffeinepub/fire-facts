# Specification

## Summary
**Goal:** Build a fire-themed single-page site called "Flame Facts" with a dramatic fire animation and a button that fetches random facts from a Motoko backend.

**Planned changes:**
- Create a fire animation using CSS keyframe animations (flame flicker, glow effects) and JavaScript-driven particle/ember effects, running continuously on page load
- Build a Motoko backend canister with a stable array of at least 20 facts and a `getRandomFact()` query method returning a pseudo-random fact string
- Add a fire-themed "Get a Random Fact" button that calls the backend and displays the returned fact with a smooth reveal animation
- Apply a cohesive fire theme: near-black background, warm orange/red/amber color palette, dramatic typography, and a styled fact display card

**User-visible outcome:** Users land on a dark, dramatic page centered around a living fire animation. Clicking the glowing button fetches and displays a new random fact from the backend with a smooth transition.
