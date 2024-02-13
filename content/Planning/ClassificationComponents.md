---
title: Classification components
tags:
    - Star Sailors
    - Components
    - Planning
---

I think it might be worth going back to the old post form with Chakra from the original tutorial

Need to show:
1. All items that you have
2. All structures that are available to build
3. All structures that have been built (including locations)

Initially these will just be in list format, we'll move them over to sector-based later.

Components
Build menu
- Will only show items in inventoryITEMS that are labelled as Structures.
Orientation & organisation
Because we'll be 

So now I'm going to need to set up all the recipes in a file client-side (in the codebase, not in the database)
Deepnote blocks
Rhys should take a look into lightkurves for specific cadences/subplanets. i.e. how do we separate different planets in a single graph?

Content placeholder
Essentially the modal block. Will hopefully provide a streamlined pathway for making classifications a part of the gameflow.
Note → need to merge new components into GP-10  branch or otherwise keep an eye on some of the pages (like /login/index.tsx ) that were overhauled in initialClassification  on 2/2/2024
We do need to also update the orientation & layout so that it will be centered & appear as an overlayed modal → this should be done on the component-side, not around the initialisation as a tailwind-wrapper.

Bottombar
- Planet info (more detailed stats, including user-related?)
- Sector exploration
- Build menu
- Shipments/anomalies? (internal anomalies)
- Notifications?

For now I'll just have all of this stuff on the main canvas. Full sector map will probably be visible below by default. All internal (page) navigation/call-out subpages will be done via the bottombar.
