import { Module } from '@nestjs/common';

import { NbaModule } from './nba/nba.module';

@Module({
    modules: [ NbaModule ],
})
export class ApplicationModule {}