var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var findLongestWord = function (s, d) {
    if (s === void 0) { s = ''; }
    if (d === void 0) { d = []; }
    if (s.length > 1000)
        return '';
    if (d.length > 1000)
        return '';
    var arrstr = [];
    var arrstrlength = [];
    for (var i = 0; i < d.length; i++) {
        arrstr[i] = s;
        for (var j = 0; j < d[i].length; j++) {
            var istr = d[i][j];
            var hasIndex = arrstr[i].search(istr);
            hasIndex !== -1 ? arrstr[i] = arrstr[i].replace(istr, '') : arrstr[i] = false;
            if (hasIndex === -1)
                break;
        }
    }
    arrstrlength = arrstr.map(function (v, i) {
        return typeof v === 'boolean' ? -1 : s.length - v.length;
    });
    var index = arrstrlength.indexOf(Math.max.apply(Math, __spread(arrstrlength)));
    var indexArr = [];
    arrstrlength.forEach(function (v, i) {
        if (v === Math.max.apply(Math, __spread(arrstrlength))) {
            indexArr.push(d[i]);
        }
    });
    var min = indexArr[0];
    for (var i = 0; i < indexArr.length; i++) {
        if (min >= indexArr[i]) {
            min = indexArr[i];
        }
    }
    return min;
};
console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
console.log(findLongestWord("abpcplea", ["a", "b", "c"]));
console.log(findLongestWord("bab", ["ba", "ab", "a", "b"]));
