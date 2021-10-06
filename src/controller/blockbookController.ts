import {
  Controller,
  Get,
  Param,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BlockBookService } from '../service/blockBookService';
import { GenerateBlockbookWithNodeNameService } from '../service/generateBlockbookWithNodeNameService';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SystemInfo } from 'blockbook-client/src/types/index';

//@UseFilters(new ExceptionsLoggerFilter())
//@UseInterceptors(TransformInterceptor)
//@UseGuards(JwtAuthGuard)
//@ApiBearerAuth('access-token')
@Controller()
export class BlockbookController {
  constructor(
    private readonly blockBookService: BlockBookService,
    private readonly generateBlockbookWithnodeNameService: GenerateBlockbookWithNodeNameService,
  ) {}

  @ApiTags('blockBook')
  @Get(':nodeName/status')
  async blockBookstatus(
    @Param('nodeName') nodeName: string,
  ): Promise<SystemInfo> {
    return await this.blockBookService.blockBookStatus(
      this.generateBlockbookWithnodeNameService.createBlockBook(nodeName),
    );
  }

  @ApiTags('blockBook')
  @Get(':nodeName/sendTx/:hash')
  async sendTx(
    @Param('nodeName') nodeName: string,
    @Param('txHash') txHash: string,
  ): Promise<string> {
    return await this.blockBookService.sendTx(
      this.generateBlockbookWithnodeNameService.createBlockBook(nodeName),
      txHash,
    );
  }
}
