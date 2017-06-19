import { PlayerInfo } from '../shared/players/player-info';

// Game - Player
export class GamePlayer {
    personId: string;
    teamId: string;
    isOnCourt: boolean;
    points: string;
    pos: string;
    min: string;
    fgm: string;
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
    dnp: string;
    playerInfo: PlayerInfo;
    sortKey: {
        name: number;
        pos: number;
        points: number;
        min: number;
        fgm: number;
        fga: number;
        fgp: number;
        ftm: number;
        fta: number;
        ftp: number;
        tpm: number;
        tpa: number;
        tpp: number;
        offReb: number;
        defReb: number;
        totReb: number;
        assists: number;
        pFouls: number;
        steals: number;
        turnovers: number;
        blocks: number;
        plusMinus: number;
    };
}
