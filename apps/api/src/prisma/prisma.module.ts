import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
})
export class PrismaModule {}
