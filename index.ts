import readline from "readline";
import { checkDay, setupDay } from "./init";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter day number: ", async (answer) => {
    if (answer === "") {
        console.log("Getting current date");
        const day = new Date().getDate();
        answer = day.toString();
    } else {
        if (Number(answer) > 30 || answer === "" || isNaN(Number(answer))) {
            console.log("Invalid day number");

        } else {
            const day = Number(answer);
        }
    }
    rl.close();

    if (checkDay(Number(answer))) {
        await runDay(Number(answer));
    } else {
        setupDay(Number(answer));
    }
});

const runDay = async (day: number) => {
    const dayFile = `./solutions/day${day}/day${day}.ts`;
    const dayModule = await import(dayFile);
    dayModule.part1();
    dayModule.part2();
}