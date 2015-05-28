var __ = require('immutable')

var __natural = __.Range(); // 「自然数」という無限数列

var __natural10 = __natural.take(10);

console.log(__natural10.toArray());
