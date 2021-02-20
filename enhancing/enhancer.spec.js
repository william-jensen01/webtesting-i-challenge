const enhancer = require('./enhancer.js');
// test away!
describe("testing the enhancer system", () => {
    let newItem;

    beforeEach(() => {
        newItem = {
            name: "Stargazer",
            durability: 10,
            enhancement: 15
        };
    });

    test("test that the repair method works", () => {
        const actualItem = enhancer.repair(newItem);

        expect(actualItem.name).toBe("Stargazer");
        expect(actualItem.durability).toBe(100);
        expect(actualItem.enhancement).toBe(15);
    });

    test("test that the success method works", () => {
        const actualItem = enhancer.success(newItem);

        expect(actualItem.name).toBe("Stargazer");
        expect(actualItem.durability).toBe(10);
        expect(actualItem.enhancement).toBe(16);
    });

    test("test that the fail methods works", () => {
        const actualItem = enhancer.fail(newItem);

        expect(actualItem.name).toBe("Stargazer")
        expect(actualItem.durability).toBe(10)
        expect(actualItem.enhancement).toBe(15);
    })
})