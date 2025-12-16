import fs from 'fs';

export const getDayInput = async (day: number): Promise<string> => {
    const path = `./solutions/day${day}/input.txt`;
    const content = await fs.readFileSync(path);
    return content.toString();
}