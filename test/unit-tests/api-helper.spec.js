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

    describe("subValidateEntitiesParams()", function () {
        it("Given all params has just alphanumeric text Should return true", function () {
            const params = "item1|item2|item3"
            assert(apiHelper.subValidateEntitiesParams(params))
        })

        it("Given invalid params type Should return false", function () {
            const params = false
            assert(!apiHelper.subValidateEntitiesParams(params))
        })

        it("Given empty text or item Should return false", function () {
            const emptyTextParams = ""
            assert(!apiHelper.subValidateEntitiesParams(emptyTextParams))

            const emptyItemParams = "| "
            assert(!apiHelper.subValidateEntitiesParams(emptyItemParams))
        })
    })
});
