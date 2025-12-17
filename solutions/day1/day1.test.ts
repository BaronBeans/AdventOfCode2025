import { countZeros, move } from "./day1";

describe("move tests", () => {
    test.each([
        [11, "R", 8, 19],
        [19, "L", 19, 0],
        [5, "L", 10, 95]
    ])('starts at %i, moves %s by %i', (start, dir, amount, expected) => {
        expect(move(start, dir, amount)).toBe(expected);
    });
});

describe("count zeros test", () => {
    test("example input", () => {
        const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

        const start = 50;

        expect(countZeros(input, start)).toBe(3);
    })
})