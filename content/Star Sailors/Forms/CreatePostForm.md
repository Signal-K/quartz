---
title: Post Create Form
tags:
    - Star Sailors
    - Classification
    - Forms
    - Posts
---

# Overview
Contains three functions:
1. `CreatePostForm()` -> For creating posts based on a planet/anomaly id
2. `RoverContentPostForm()` -> Creating posts based on a rover image
3. `FactionPostForm()` -> Creating posts that will show up in a faction's feed

# Order of operations

## CreatePostForm()
1. Takes an id of a planet (and has the potential to take a category id too, however this hasn't yet been implemented)
2. Has the capacity for experience/currency, user avatars, media uploading state, however this functionality has currently been removed as we are re-working the currency experience
3. User inserts their content into a `textarea` component

Table: `posts_duplicates` (v1), `classifications` (v2)

## RoverContentPostForm()
1. Takes the metadata of the rover's image (NASA Appears API), a direct link to the image (extracted from the full metadata), and the sector the image came from (tied to `basePlanetsSectors` table)
2. Currently there are two functions for inserting a post into the `contentROVERIMAGES` table, it appears that the `handlePostSubmit` function is the one actively being used
    * Takes the author (user id, foreign key), metadata, image link, content (post content), media (currently no capacity for uploading media/files, however the table does support this - just not implemented on client-side), and the sector (which replaces the planet/basePlanet columns)

Table: `contentROVERIMAGES`