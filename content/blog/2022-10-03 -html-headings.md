---
title: HTML Headings
date: 2022-10-03T21:48:55.112Z
description: What are headings and how to use them
tags:
  - HTML
  - heading
---
Headings are elements representing different sections from h1 to h6. Headings are titles or subtitles displayed on a webpage. HTML heading elements created using heading tags. There are 6 headings tags that create 6 different headings, h1 denotes the highest level or most important heading, then proceedings in descending order to h6, which is the least important heading. H1 creates the largest heading, h6 creates the smallest heading. Headings are important for highlighting important information and structuring a webpage. 

H﻿ow headings look in HTML

```
<h1>Most Important Heading</h1>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
<h4>Heading Four</h4>
<h5>Heading Five</h5>
<h6>Heading Six</h6>

```

H﻿ow headings look in a browser

![](../assets/headings.png)

How to use headings? 

Headings should be used in order starting with h1. There should only be one h1 heading per page. Headings h2-h6 can be used multiple times to create a consistent structure in the webpage. Nested heading can be used with an h2 followed by an h3 to create a consistent structure in the webpage. Headings should be used in ascending order except when creating a new section. An h4 will come after an h3, but when creating a new section an h2 will follow the h4.

Headings should be short, at most 100 characters. They are a title for a section not a paragraph. Headings should be styled with CSS instead of changing the tag. CSS should be used for any changes to the default font size and font weight.

H﻿ow nested headings look in HTML

```
<h1>Top Heading</h1>

<h2>Sub Heading</h2>
<h3>Sub Heading</h3>

<h2>Sub Heading</h2>
<h3>Sub Heading</h3>
<h4>Sub Heading</h4>


```

H﻿ow nested headings look in a browsers

![](../assets/headings_with_subheadings.png)

Why use headings? 

Headings are important for accessibility. Headings create the structure for content on a webpage as well as increasing accessibility. Screen reading software jumps from headings quickly to determine the content of the page. This is why it is important to use headings in ascending order, and not to skip a level, it can create confusion for users using screen reading software. Search engines use headings to index the structure and organization of the webpage’s content. User’s often skim a webpage by headings to find the information they are looking for.



Next: Paragraphs