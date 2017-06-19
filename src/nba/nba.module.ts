import { Module } from '@nestjs/common';

import { GameController } from './game/game.controller';
import { GameFactory } from './game/game.factory';

@Module({
    controllers: [GameController],
    components: [GameFactory]
})
export class NbaModule {}