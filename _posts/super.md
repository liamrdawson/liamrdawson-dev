---
title: 'Super'
excerpt: "The super keyword is used to access properties on an object literal or class's Prototype, or invoke a superclass's constructor."
coverImage: '/assets/images/134116690029.jpg'
date: '2022-11-22T22:17:46.950Z'
author:
  name: 'Liam Dawson'
  picture: '../../public/images/profile.jpg'
ofImage:
  url: '../../public/images/profile.jpg'
---

# My First Post

Hello World!

**TLDR: Gives you the right hand value if the left hand is `null` or `undefined`, otherwise gives you the left hand value.**

Nullish coalescing can be a tricky operator to get your head around, let's take a look at what it does and how it differs from the optional OR operator.

```javascript
leftExpression ?? rightExpression
```

In short, the nullish coalescing operator returns the value of the right hand expression if the value of the left is either `null` or `undefined` - if it's neither of these then it returns the left hand value.

It can get a little confusing when trying to figure out when to use the nullish coalescing (`??`) operator and when to use the logical OR (`||`) operator. After all, both of these operators behave the same if the left hand value is `null` or `undefined`. The key thing to remember when distinguishing between the two is that while the nullish coalescing oprator uses the value from the right hand expression if the left is `null` or `undefined`, the logical OR operator returns the value from the right if the value on the left is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) (An important difference when handling values that could contain `0`, `false`, or `""`).

Let's take a look at a few examples:

```javascript
let numberOfTrophies

numberOfTrophies = 0 || 'Value not provided' // 'Value not provided'
numberOfTrophies = 0 ?? 'Value not provided' // 0

let firstLineOfAddress

firstLineOfAddress = '' || 'Address not provided' // 'Address not provided'
firstLineOfAddress = '' ?? 'Address not found' // ''

let isAuthorised

isAuthorised = false || 'Credentials not provided' // 'Credentials not provided'
isAuthorised = false ?? 'Credentials not provided' // false
```
