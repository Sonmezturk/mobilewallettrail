import { Injectable } from '@nestjs/common';
import { Blockbook } from 'blockbook-client';
import configuration from '../config/configuration';

@Injectable()
export class GenerateBlockbookWithNodeNameService {
  createBlockBookNode(nodeName: string): Blockbook {
    return new Blockbook({
      nodes: configuration().nodeNameMap[nodeName.toString()],
    });
  }
}
