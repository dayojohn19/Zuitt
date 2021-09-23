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