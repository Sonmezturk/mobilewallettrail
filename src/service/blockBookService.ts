import { Injectable } from '@nestjs/common';
import { Blockbook } from 'blockbook-client';
import { SystemInfo } from 'blockbook-client/src/types/index';

@Injectable()
export class BlockBookService {
  async blockBookStatus(blockbook: Blockbook): Promise<SystemInfo> {
    return await blockbook.getStatus();
  }

  async sendTx(blockbook: Blockbook, txHash: string): Promise<string> {
    return await blockbook.sendTx(txHash);
  }
}
