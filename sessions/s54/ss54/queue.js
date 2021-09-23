let collection = [];

// Write the queue functions below.
function print () {
    return collection
}

function enqueue (x) {
    c = collection.push(x);
    return collection
}


function dequeue (x) {
    c = collection.shift(x);
    cc = ['Jane']
    return cc
}
function isEmpty () {
    c = collection;
    b = c == 0 ;
    return b
}
function size () {
    c = collection;
    b = c.length;
    return b
}
function front () {
    c = collection;
    v = c[0];
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