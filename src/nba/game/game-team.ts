import { GamePlayer } from './game-player';
import { GameStats } from './game-stats';

// Game - Team
export class GameTeam {
    teamId: string;
    triCode: string;
    win: string;
    loss: string;
    seriesWin: string;
    seriesLoss: string;
    score: string;
    linescore: Array<{ score: string; }>;
    stats: GameStats;
    info: {
        isNBAFranchise: boolean,
        city: string;
        altCityName: string;
        fullName: string;
        tricode: string;
        teamId: string;
        nickname: string;
        urlName: string;
        confName: string;
        divName: string;
    };
    players: Array<GamePlayer>;
}