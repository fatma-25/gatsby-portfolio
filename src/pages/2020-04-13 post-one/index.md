---
path: "/post-one"
date: "2020-04-13"
title: "React Hooks for beginners"
image: "https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
author: "fatma"
---

Rules of Hooks
Hooks are JavaScript functions, but they impose two additional rules:

Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)
We provide a linter plugin to enforce these rules automatically. We understand these rules might seem limiting or confusing at first, but they are essential to making Hooks work well.