import { Component } from '@nestjs/common';

import * as _ from "lodash";
import * as moment from 'moment-timezone';

import { GamePlayer } from '../game/game-player';
import { Game } from '../game/game';
import { GamePreview } from '../game/game-preview';
import { PlayerInfo } from '../shared/players/player-info';

import TEAMS from '../shared/team/teams';
import PLAYERS from '../shared/players/players';

@Component()
export class GameFactory {
    /* GameFactory
          Take the raw returns from NBA api and format for ballislife.io
    */

    // /game/detail/:date/:gameId
    createGameDetail(dirtyGame): Array<Game> {
        let prettyGame = [];
        let game = {
            id: dirtyGame['basicGameData'].gameId,
            isGameStarted: this.isGameStarted(dirtyGame['basicGameData'].startTimeUTC, dirtyGame['basicGameData'].hTeam.linescore.length),
            clock: dirtyGame['basicGameData'].clock,
            buzzer: dirtyGame['basicGameData'].isBuzzerBeater,
            time: moment(dirtyGame['basicGameData'].startTimeUTC, "America/New_York"),
            period: dirtyGame['basicGameData'].period,
            home: dirtyGame['basicGameData'].hTeam,
            visitor: dirtyGame['basicGameData'].vTeam,
            broadcast: dirtyGame['basicGameData'].watch.broadcast.broadcasters.national
        }
        game.home.stats = dirtyGame['stats'].hTeam;
        game.visitor.stats = dirtyGame['stats'].vTeam;
        game.home.players = this.getPlayers(game.home.teamId, dirtyGame['stats'].activePlayers);
        game.visitor.players = this.getPlayers(game.visitor.teamId, dirtyGame['stats'].activePlayers);
        game.home.info = _.find(TEAMS, teamInfo => teamInfo.teamId == game.home.teamId);
        game.visitor.info = _.find(TEAMS, teamInfo => teamInfo.teamId == game.visitor.teamId);

        prettyGame.push(game);
        return prettyGame;
    }

    // /game/preview/:date
    createGamePreview(dirtyGames): GamePreview[] {
        let games = dirtyGames.games.map(game => {
            return {
                id: game.gameId,
                isGameStarted: this.isGameStarted(game.startTimeUTC, game.hTeam.linescore.length),
                clock: game.clock,
                buzzer: game.isBuzzerBeater,
                time: moment.tz(game.startTimeUTC, "America/New_York"),
                period: game.period,
                home: game.hTeam,
                visitor: game.vTeam,
                broadcast: game.watch.broadcast.broadcasters.national
            }
        });
        return games;
    }
    
    // sifts through response and gets players for a specific team
    private getPlayers(teamId, activePlayers) {
        let players = _.filter(activePlayers, player => player['teamId'] === teamId);
        // cycle through each player and add their player info
        players.forEach(player => {
            player['playerInfo'] = this.getPlayerInfo(player['personId']);
        });

        return players;
    }

    private getPlayerInfo(playerId): PlayerInfo {
        return _.filter(PLAYERS, (theplayer) => theplayer['person_id'] === +playerId)[0];
    }

    private isGameStarted(gameTime: string, score: number): boolean {
        return moment().utc().isAfter(gameTime, 'minute') && score > 0;
    }
}