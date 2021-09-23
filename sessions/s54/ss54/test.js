// This is the file to check whether your answer is correct or wrong.
// Do not change anything in this file.

const assert = require('assert');
const queue = require('./queue');

describe('[1] Print queue elements.', function() {
    it('The printed value is an empty array. RESULT = []', function() {
        // const queque = queque.printNone;
        expect(queue.print()).toEqual([]);
    });
});

describe('[2] Enqueue a new element.', function() {
    it('The value has been enqueued. RESULT = [\'John\']', function() {
        expect(queue.enqueue('John')).toEqual(['John']);
    });
});

describe('[3] Enqueue another element.', function() {
    it('The value has been enqueued. RESULT = [\'John\', \'Jane\']', function() {
        expect(queue.enqueue('Jane')).toEqual(['John', 'Jane']);
    });
});

describe('[4] Dequeue the first element.', function() {
    it('The value has been dequeued. RESULT = [\'Jane\']', function() {
        expect(queue.dequeue()).toEqual(['Jane']);
    });
});

describe('[5] Enqueue another element.', function() {
    it('The value has been enqueued. RESULT = [\'Jane\', \'Bob\']', function() {
        expect(queue.enqueue('Bob')).toEqual(['Jane', 'Bob']);
    });
});

describe('[6] Enqueue another element.', function() {
    it('The value has been enqueued. RESULT = [\'Jane\', \'Bob\', \'Cherry\']', function() {
        expect(queue.enqueue('Cherry')).toEqual(['Jane', 'Bob', 'Cherry']);
    });
});
// done
describe('[7] Get first element.', function() {
    it('The first value has been retrieved. RESULT = \'Jane\'', function() {
        expect(queue.front()).toEqual('Jane');
    });
});
//done
describe('[8] Get queue size.', function() {
    it('The size of the queue has been retrieved. RESULT = 3', function() {
        expect(queue.size()).toEqual(3);
    });
});
// done
describe('[8] Check if queue is not empty.', function() {
    it('The result has been retrieved. RESULT = false', function() {
        expect(queue.isEmpty()).toEqual(false);
    });
});