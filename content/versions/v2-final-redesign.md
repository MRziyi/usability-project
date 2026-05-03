---
title: "v2 — Final Redesign (3F)"
date: "2026-05-03"
phase: "3F"
status: "Final"
tags: ["version", "3f", "final", "progressive-disclosure"]
relatedLinks:
  - label: "Phase 3F — Full Rationale"
    url: "/phases/3f"
  - label: "Phase 3E — Group Reply"
    url: "/phases/3e"
  - label: "v1 — Initial Redesign Directions (3C)"
    url: "/versions/v1-chart-editor"
---

# v2 — Final Redesign (3F)

This version captures the **final consolidated redesign decisions** for Google Looker Studio's report creation and editing flow, incorporating peer feedback from Phase 3D/3E and a fresh review of the v1 work.

## What changed from v1 (3C)

Four targeted changes, each driven by specific peer feedback:

| # | Problem | v1 direction | v2 change | Driver |
|---|---|---|---|---|
| 1 | P1 Data Import | Option A (Upload button) | Option A + first-time guidance layer | Thiri's Option C argument; 6 reviewers confirmed A |
| 2 | P2 Dataset binding | Option A or B, undecided | Both: collapsible color-coded pills + post-upload banner | Giang/Zixiao/Cindy (clutter); Dua (banner) |
| 3 | P4 Chart editing | Option A (decomposed field rows) | Option A + progressive disclosure ("Advanced ▾") | Dua's suggestion; addresses Saira's beginner/expert concern |
| 4 | P6 Annotation | Option A (handles + move/edit clarity) | Option A + double-click to enter edit mode | Thiri's Slides-style suggestion |

## What did not change

P3, P5, P7, and P8 directions from v1 are confirmed and unchanged. No peer feedback identified new issues in these areas.

## What we did not adopt (and why)

**Saira's full dual-mode UI** — progressive disclosure in P4 achieves the same beginner/expert separation without requiring two separate layouts or user self-classification at login.

**Jingyuan's original screenshots** — noted as ideal for a real client engagement; deprioritized due to timeline constraints.

## Preferred options per problem

| Problem | Final preferred direction |
|---|---|
| P1 | Option A + first-time guidance layer |
| P2 | Collapsible pills (Option A refined) + banner (Option B) |
| P4 | Option A + progressive disclosure |
| P6 | Option A + double-click edit mode |

## Key design principle added in v2

Progressive disclosure emerged as the unifying answer to the beginner/expert tension identified across P2, P4, and P6. Rather than designing two separate experiences, we use interaction depth and default visibility to serve both audiences within a single interface.
