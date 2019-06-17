const { repair, succeed, fail } = require("./enhancer.js");

describe("enhancer object", () => {
  describe("repair", () => {
    it("restores durability property to 100", () => {
      expect(repair({ durability: 89 }).durability).toBe(100);
    });
  });

  describe("succeed", () => {
    it("item's enhancement increases by 1", () => {
      expect(succeed({ enhancement: 15 }).enhancement).toBe(16);
    });

    it("item's enhancement to remain at 20 if enhancement is currently 20", () => {
      expect(succeed({ enhancement: 20 }).enhancement).toBe(20);
    });

    it("durability of item should remain the same", () => {
      expect(succeed({ durability: 50 }).durability).toBe(50);
    });
  });

  describe("fail", () => {
    it("item's enhancement less than 15, durability should be decreased by 5", () => {
      expect(fail({ enhancement: 10, durability: 50 }).durability).toBe(45);
    });
  });
});
