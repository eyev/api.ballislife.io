import { Controller, Get, Post, HttpStatus } from '@nestjs/common';

import { data } from 'nba.js';

import { Game } from './game';
import { GameFactory } from './game.factory';
import { GamePreview } from './game-preview';

@Controller('game')
export class GameController {
    constructor(private gameFactory: GameFactory) { }

    @Get()
    getGamesByDate(req, res, next) {
        data.calendar()
            .then(calendar => { 
                res.status(HttpStatus.OK).json(calendar);
            })
    }

    @Get('/detail/:date/:gameId')
    getGameDetail(req, res, next): void {
        data.boxscore({
            date: req.params.date,
            gameId: req.params.gameId
        }).then(gameDetail => { 
            res.status(HttpStatus.OK)
                .json(this.gameFactory.createGameDetail(gameDetail));
        }).catch(error => {
            res.status(HttpStatus.NO_CONTENT)
          });
    }
    @Get('/preview/:date')
    getGamePreview(req, res, next): void {
        data.scoreboard({
            date: req.params.date
        }).then(gamePreview => {
            res.status(HttpStatus.OK)
                .json(this.gameFactory.createGamePreview(gamePreview))
        }).catch(error => { 
            res.status(HttpStatus.NO_CONTENT)
        })
    }
}