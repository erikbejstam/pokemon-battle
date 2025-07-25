import { Pokemon } from "./model/pokemon";

export async function simulateBattle(team1: Pokemon[], team2: Pokemon[]) {
    const team1Names = team1.map(p => p.name);
    const team2Names = team2.map(p => p.name);

    const battleLog: string[] = [];
    const welcomeStrings: string[] = [`Get ready for battle!`, `Team 1: ${team1Names}`, `Team 2: ${team2Names}`];
    battleLog.push(...welcomeStrings);

    let team1Wins = 0;
    let team2Wins = 0;

    for (const p1 of team1) { 
        for (const p2 of team2) {
        const w1 = parseFloat(p1.weight.replace(" kg", ""));
        const w2 = parseFloat(p2.weight.replace(" kg", ""));

        let battleMsg = "";
        if (w1 > w2) {
            team1Wins++;
            battleMsg = `${p1.name} (${w1}kg) beats ${p2.name} (${w2}kg)`;
        } else if (w2 > w1) {
            team2Wins++;
            battleMsg = `${p2.name} (${w2}kg) beats ${p1.name} (${w1}kg)`;
        } else {
            battleMsg = `${p1.name} and ${p2.name} tie at ${w1}kg`;
        }
        const fullMsg = `${battleMsg}. SCORE: Team 1: ${team1Wins}, Team 2: ${team2Wins}`;
        battleLog.push(fullMsg);
        }
    }

    const winner =
        team1Wins > team2Wins ? "team1" :
        team2Wins > team1Wins ? "team2" : "draw";

    winner === "draw"
        ? battleLog.push(`The battle has ended in a draw...`)
        : battleLog.push(`The winner is... ${winner}!!!`);

    return battleLog;
}