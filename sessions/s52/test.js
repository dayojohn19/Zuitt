// This is the file to check whether your answer is correct or wrong.
// Do not change anything in this file.

const assert = require('assert');
const source = require('./index');

describe('[1] Count letters in a sentence.', function() {
    const validLetter = 'o';
    const invalidLetter = 'abc';
    const sentence = 'The quick brown fox jumps over the lazy dog';

    it('Invalid letter returns undefined.', function() {
        const result = source.countLetter(invalidLetter, sentence);
        expect(result).toBeUndefined();
    });

    it('Valid letter returns number of occurrence.', function() {
        const result = source.countLetter(validLetter, sentence);
        expect(result).toEqual(4);
    });
});

describe('[2] Check isogram.', function() {
    const isogram = 'Machine';
    const notIsogram = 'Hello';

    it('Returns true if a word is an isogram.', function() {
        const result = source.isIsogram(isogram);
        expect(result).toEqual(true);
    });

    it('Returns false if a word is not an isogram.', function() {
        const result = source.isIsogram(notIsogram);
        expect(result).toEqual(false);
    });
});

describe('[3] Purchase goods.', function() {
    const price = 109.4356;
    const discountedPrice = price * 0.8;
    const roundedPrice = discountedPrice.toFixed(2);

    it('Returns undefined for students aged below 13.', function() {
        const result = source.purchase(12, price);
        expect(result).toBeUndefined();
    });

    it('Returns discounted price (rounded off) for students aged 13 to 21.', function() {
        const result = source.purchase(15, price);
        expect(result).toEqual(roundedPrice);
    });

    it('Returns discounted price (rounded off) for senior citizens.', function() {
        const result = source.purchase(72, price);
        expect(result).toEqual(roundedPrice);
    });

    it('Returns price (rounded off) for people aged 22 to 64.', function() {
        const result = source.purchase(34, price);
        expect(result).toEqual(price.toFixed(2));
    });
});

describe('[4] Find hot categories.', function() {
    const items = [
        { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' },
        { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' },
        { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' },
        { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' },
        { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }
    ];

    it('Returns item categories without stocks.', function() {
        const result = source.findHotCategories(items);
        expect(result).toEqual(['toiletries', 'gadgets']);
    });
});

describe('[5] Find flying voters.', function() {
    const candidateA = ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m'];
    const candidateB = ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l'];

    it('Returns the array of flying voters.', function() {
        const result = source.findFlyingVoters(candidateA, candidateB);
        expect(result).toEqual(['LIWf1l', 'V2hjZH']);
    });
});