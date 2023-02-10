---
layout: ../../layouts/PostLayout.astro
title: My Favorite Code Snippets
date: 02/09/2023
description: These are my all-time favorite code snippets.
tags: ["JavaScript", "CSS", "Utility"]
share: true
---

### Here's a list of my favorite code snippets:

- Fetch data

```js
async function fetchData() {
	try {
		const response = await fetch('...');
		const json = await response.json();
		return json;
	} catch (err) {
		console.error(err)
	}
}
```

- Log stuff

```js
console.log("Hello World");
```

