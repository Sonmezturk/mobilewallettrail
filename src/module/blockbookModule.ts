import { Module } from '@nestjs/common';
import { BlockbookController } from '../controller/blockbookController';
import { BlockBookService } from '../service/blockBookService';
import { GenerateBlockbookWithNodeNameService } from '../service/generateBlockbookWithNodeNameService';

@Module({
  imports: [],
  controllers: [BlockbookController],
  providers: [BlockBookService, GenerateBlockbookWithNodeNameService],
})
export class BlockbookModule {}
