import { Module } from '@nestjs/common';
import { SchiffeController } from './schiffe.controller';
import { SchiffeService } from './schiffe.service';

@Module({
  controllers: [SchiffeController],
  providers: [SchiffeService]
})
export class SchiffeModule {}
