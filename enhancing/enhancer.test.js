const { repair } = require("./enhancer.js");

describe("enhancer object", () => {
  describe("repair", () => {
    it("restores durability property to 100", () => {
      expect(repair({ durability: 89 }).durability).toBe(100);
    });
  });
});
