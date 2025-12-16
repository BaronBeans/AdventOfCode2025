import fs from "fs";

export const checkDay = (day: number) => {
    const dayFolder = `./solutions/day${day}`;
    const dayFile = `${dayFolder}/day${day}.ts`;
    if (!fs.existsSync(dayFile)) {
        return false;
    }
    return true;
};

export const setupDay = (day: number) => {
    const dayFolder = `./solutions/day${day}`;
    const dayFile = `${dayFolder}/day${day}.ts`;
    // const dayInput = `${dayFolder}/day${day}.input`;
    // const dayOutput = `${dayFolder}/day${day}.output`;

    if (!fs.existsSync(dayFolder)) {
        fs.mkdirSync(dayFolder);
    }
    if (!fs.existsSync(dayFile)) {
        fs.writeFileSync(dayFile, fs.readFileSync(`./template.txt`, 'utf8').replaceAll("{day}", day.toString()));
    }
};