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

describe("Backstage", () => {

  it("ne devrait jamais avoir sa qualité supérieure à 50", () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(19);
    expect(items[0].quality).toEqual(50);
  });

  it("devrait augmenter sa qualité par trois lorsque la date de péremption est de 5 jours ou moins", () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(43);
  });
});

describe('Sulfuras', () => {
  
  it("should never decrease quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras", 0, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80)

  });
})


describe('Conjured', () => {
  
  it("should decrease quality two times faster", function() {
    const gildedRose = new Shop([ new Item("Conjured", 0, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(38)

  });
})
