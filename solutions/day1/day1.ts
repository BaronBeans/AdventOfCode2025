import { getDayInput } from "../../utils/input";

export const part1 = async () => {
    const input = await getDayInput(1);
    const start = 50;
    const numberOfZeros = countZeros(input, start);

    console.log(`part 1 amount of zeros = ${numberOfZeros}`);
}

export const countZeros = (input: string, start: number): number => {
    let current = start;
    let count = 0;
    for (const line of input.split('\n')) {
        const dir = line.split('').shift();
        const amount = Number(line.split('').splice(1).join(''));
        current = move(current, dir, amount)
        if (current === 0) count++;
    }
    return count;
}

export const move = (start: number, dir: string | undefined, amount: number) => {
        if (!dir) {
            return start;
        }
        if (dir === 'L') {
            if (start - amount < 0) {
                start = 100 + (start - amount)
            } else {
                start = start - amount;
            }
        }
        if (dir === 'R') {
            if (start + amount > 99) {
                start = start + amount - 100
            } else {
                start = start + amount;
            }
        }
        return start;
}

export const part2 = async () => {
    const input = await getDayInput(1);
    console.log("complete part 2");
}
