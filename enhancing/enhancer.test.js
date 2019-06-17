const { repair, succeed, fail } = require("./enhancer.js");

describe("enhancer object", () => {
  describe("repair", () => {
    it("restores durability property to 100", () => {
      expect(repair({ durability: 89 }).durability).toBe(100);
    });
  });

  describe("succeed", () => {
    it("item's enhancement increases by 1", () => {
      expect(succeed({ enhancement: 15, durability: 44 })).toEqual({
        enhancement: 16,
        durability: 44
      });
    });

    it("item's enhancement to remain at 20 if enhancement is currently 20", () => {
      expect(succeed({ enhancement: 20, durability: 44 })).toEqual({
        enhancement: 20,
        durability: 44
      });
    });
  });

  describe("fail", () => {
    it("item's enhancement less than 15, durability should be decreased by 5", () => {
      expect(fail({ enhancement: 14, durability: 50 })).toEqual({
        enhancement: 14,
        durability: 45
      });
    });

    it("item's enhancement is 15 or more, durability should be decreased by 10", () => {
      expect(fail({ enhancement: 15, durability: 60 })).toEqual({
        enhancement: 15,
        durability: 50
      });
    });

    it("item's enhancement is great than 16, enhancement level decreases by 1", () => {
      expect(fail({ enhancement: 17, durability: 60 })).toEqual({
        enhancement: 16,
        durability: 50
      });
    });
  });
});
