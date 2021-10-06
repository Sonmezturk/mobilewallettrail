import { Module } from '@nestjs/common';
import { BlockbookModule } from './blockbookModule';

@Module({
  imports: [BlockbookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
