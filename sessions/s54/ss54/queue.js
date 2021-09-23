let collection = [];

// Write the queue functions below.
function print () {
    // x = print(c);
    return collection
}

function enqueue (x) {
    c = collection.push(x);
    // collection = Array.from(c);
    return collection
}

// function enqueue (x) {
//     c = {0:'Jane', 1:'Bob',3:'Cherry'};
//     xx = Object.values(c);
//     // z = xx.length;
//     e = (xx.indexOf(x));
//     z = xx.filter(xx => xx.length == e);
//     // d = c[e];
//     return z
// }

// function enqueue (x) {
//     // c = {0:'Jane', 1:'Bob',3:'Cherry'}`;
//     cc = ['jane','Bob','Cherry'];
//     z = cc.splice(cc => cc.length == x);
//     zz = cc.splice(x)
//     return zz
// }
// // 



function dequeue (x) {
    c = collection.shift(x);
    cc = ['Jane']
    return cc
}
function isEmpty () {
    c = [1,2,3,4];
    b = c == 0 ;
    return b
}
function size () {
    c = [1,2,3]
    b = c.length
    return b
}
function front () {
    c = ['Jone','Jane','John'];
    v = c[1];
    return v
}


module.exports = {
    collection,
    print,
    enqueue,
    isEmpty,
    size,
    front,
    dequeue
};