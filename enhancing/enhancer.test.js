const { repair, succeed, fail, get } = require("./enhancer.js");

describe("enhancer object methods", () => {
  // Repair Method Tests
  describe("repair", () => {
    it("restores durability property to 100", () => {
      expect(repair({ durability: 89 }).durability).toBe(100);
      expect(repair({ durability: 70 }).durability).toBe(100);
    });
  });

  // Succeed Method Tests
  describe("succeed", () => {
    it("item's enhancement increases by 1", () => {
      expect(succeed({ enhancement: 15, durability: 44 })).toEqual({
        enhancement: 16,
        durability: 44
      });

      expect(succeed({ enhancement: 12, durability: 66 })).toEqual({
        enhancement: 13,
        durability: 66
      });
    });

    it("item's enhancement to remain at 20 if enhancement is currently 20", () => {
      expect(succeed({ enhancement: 20, durability: 44 })).toEqual({
        enhancement: 20,
        durability: 44
      });
    });
  });

  // Fail Method Tests
  describe("fail", () => {
    it("item's enhancement less than 15, durability should be decreased by 5", () => {
      expect(fail({ enhancement: 14, durability: 50 })).toEqual({
        enhancement: 14,
        durability: 45
      });

      expect(fail({ enhancement: 5, durability: 30 })).toEqual({
        enhancement: 5,
        durability: 25
      });
    });

    it("item's enhancement is 15 or more, durability should be decreased by 10", () => {
      expect(fail({ enhancement: 15, durability: 60 })).toEqual({
        enhancement: 15,
        durability: 50
      });

      expect(fail({ enhancement: 16, durability: 33 })).toEqual({
        enhancement: 16,
        durability: 23
      });
    });

    it("item's enhancement is greater than 16, enhancement level decreases by 1", () => {
      expect(fail({ enhancement: 17, durability: 60 })).toEqual({
        enhancement: 16,
        durability: 50
      });
      expect(fail({ enhancement: 20, durability: 80 })).toEqual({
        enhancement: 19,
        durability: 70
      });
    });
  });

  // Get Method Tests
  describe("get", () => {
    it("if enhancement is equal to 0, name should remain unchanged", () => {
      expect(get({ enhancement: 0, name: "James" })).toEqual({
        enhancement: 0,
        name: "James"
      });
    });

    it("if enhancement is greater than 0, name should be preced by [+enhancement]", () => {
      expect(get({ enhancement: 11, name: "John" })).toEqual({
        enhancement: 11,
        name: "[+11] John"
      });
    });
  });
});
