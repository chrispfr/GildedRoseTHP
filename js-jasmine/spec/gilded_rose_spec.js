import {Shop, Item} from '../src/gilded_rose.js'

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});

describe("Aged Brie", () => {

  it("ne devrait jamais avoir sa qualité supérieure à 50", () => {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].quality).toEqual(50);
  });
});

describe('Backstage passes ', () => {
  
  it("should increase quality +3", function() {
    const gildedRose = new Shop([ new Item("Backstage passes", 4, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(5);
  });
})

describe('Backstage passes', () => {
 
  it("should destroy quality if sellIn is passed", function() {
    const gildedRose = new Shop([ new Item("Backstage passes", 0, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)

  });
})
describe('Sulfuras', () => {
  
  it("should never decrease quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras", 0, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80)

  });
})
describe('Aged Brie', () => {
 
  it("should increase quality", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(41)

  });
})

describe('Conjured', () => {
  
  it("should decrease quality two times faster", function() {
    const gildedRose = new Shop([ new Item("Conjured", 0, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(38)

  });
})
