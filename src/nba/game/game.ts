import { GameTeam } from './game-team';

// Game 
export class Game {
    id: string;
    isGameStarted: boolean;
    clock: string;
    buzzer: boolean;
    time: Date;
    period: {
        current: number;
        type: number;
        maxRegular: number;
        isHalftime: boolean;
        isEndOfPeriod: boolean;
    };
    home: GameTeam;
    visitor: GameTeam;
    broadcast: string;
}
