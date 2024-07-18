import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/accounts/entities/account.entity';
import { User } from 'src/users/entities/user.entity';
import { LogService } from './entities/log_serv.entities';
import { Service } from 'src/services/entitites/services.entitys';
import { LogServicesController } from './log_serv.controller';
import { LogServicesService } from './log_serv.service';

@Module({
  imports: [TypeOrmModule.forFeature([LogService, Service, Account, User])],
  controllers: [LogServicesController],
  providers: [LogServicesService],
  exports: [LogServicesService],
})
export class LogServicesModule {}