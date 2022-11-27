---
title: 'Nullish Coalescing'
excerpt: 'Nullish Coalescing is one of those operators in JavaScript that took me a while to understand, but once it clicked and I started to understand when to use it it became a useful tool to use from time to time.'
coverImage: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'
date: '2022-11-23T22:17:46.950Z'
author:
  name: 'Liam Dawson'
  picture: '../../public/images/profile.jpg'
ofImage:
  url: '../../public/images/profile.jpg'
---

# Nullish Coalescing

**TLDR: Gives you the right hand value if the left hand is `null` or `undefined`, otherwise gives you the left hand value.**

Nullish Coalescing is one of those operators in JavaScript that took me a while to understand, but once it clicked and I started to understand when to use it it became a useful tool to use from time to time.

```javascript
leftExpression ?? rightExpression
```

In short, the nullish coalescing operator returns the value of the right hand expression if the value of the left is either `null` or `undefined` - if it's neither of these then it returns the left hand value.

It can get a little confusing when trying to figure out when to use the nullish coalescing (`??`) operator and when to use the logical OR (`||`) operator. After all, both of these operators behave the same if the left hand value is `null` or `undefined`. The key thing to remember when distinguishing between the two is that the while nullish coalescing uses the value from the right hand expression if the left is `null` or `undefined`, the logical OR operator returns the value from the right if the value on the left is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

Something to keep in mind when you're handling values that could contain `0`, `false`, or `""`.

```javascript
let numberOfTrophies

numberOfTrophies = 0 || 'Value not provided' // 'Value not provided'
numperOfTrophies = 0 ?? 'Value not provided' // 0

let firstLineOfAddress

firstLineOfAddress = '' || 'Address not found' // 'Address not provided'
firstLineOfAddress = '' ?? 'Address not found' // ''

let isAuthorised

isAuthorised = false || 'credentials not provided' // 'Credentials not provided'
isAuthorised = false ?? 'credentials not provided' // false
```
