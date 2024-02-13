---
title: Component list for Star Sailors
tags:
    - Star Sailors
    - Component
    - Planning
---

Component list (brainstorming level)
Feed
Nextjs Threads tutorial - get the feed, invert the colours and remove the background intensifier
If we can not have a page (let alone the home/index page) rely/be based entirely on a feed, we could narrow it and that would make it easier to find a promising layout.
HomePlanetStats
I'm assuming this is a block that belongs here, as the only time it is initialised is when it's in the /feed/index.tsx  page.

Index
I think that we might show the user's home planet, a global feed, some of their inventory and a discovery feed (say, from news sources or something similar).

Minimal companion app/widget for your collection. Make it as a separate repo inside something like silfur. Can also be used for a quick glance (i.e. check your inventory)


Bottombar
- Planet info (more detailed stats, including user-related?)
- Sector exploration
- Build menu
- Shipments/anomalies? (internal anomalies)
- Notifications?

For now I'll just have all of this stuff on the main canvas. Full sector map will probably be visible below by default. All internal (page) navigation/call-out subpages will be done via the bottombar.

Navbar
This isn't intentional, but I'm liking this sort of floating navigation area. Looks quite nice. It appears that when scrolling down it re-joins the header.
Dashboard
Similar setup to https://taxonomy-supabase.vercel.app/dashboard 

Classification components 