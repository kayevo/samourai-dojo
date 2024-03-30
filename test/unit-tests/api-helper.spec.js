const assert = require("assert");
const apiHelper = require("../../accounts/api-helper");

describe("APIHelper", function () {
  describe("checkEntitiesParams()", function () {
    it("Given there is at least one not empty entity parameter Should return true", function () {
        const validParams = {
            active: true,
        };
        assert(apiHelper.checkEntitiesParams(validParams));
    });

    it("Given no empty entity parameter Should return true", function () {
        const validParams = {
            active: true,
            new: true,
            pubkey: "exampleValue",
            bip49: "exampleValue",
            bip84: "exampleValue",
        };
        assert(apiHelper.checkEntitiesParams(validParams));
      });

    it("Given all empty entity parameter Should return false", function () {
        const invalidParams = {};
        assert(!apiHelper.checkEntitiesParams(invalidParams));
    });
  });
});
