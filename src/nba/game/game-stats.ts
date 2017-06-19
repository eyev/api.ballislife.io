// Game - Stats
export class GameStats {
    fastBreakPoints: string;
    pointsInPaint: number;
    biggestLead: number;
    secondChancePoints: string;
    pointsOffTurnovers: number;
    longestRun: string;
    totals: {
        points: string,
        fgm: string,
        fga: string;
        fgp: string;
        ftm: string;
        fta: string;
        ftp: string;
        tpm: string;
        tpa: string;
        tpp: string;
        offReb: string;
        defReb: string;
        totReb: string;
        assists: string;
        pFouls: string;
        steals: string;
        turnovers: string;
        blocks: string;
        plusMinus: string;
        min: string;
    }
    leaders: {
        points: {
            value: string;
            players: Array<Object>;
        };
        rebounds: {
            value: string;
            players: Array<Object>;
        };
        assists: {
            value: string;
            players: Array<Object>;
        }
    }
}