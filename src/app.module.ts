import { Module } from '@nestjs/common';
import { MorganModule } from 'nest-morgan';

import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule, MorganModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
