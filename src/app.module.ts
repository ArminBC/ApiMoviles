import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BanksModule } from './banks/banks.module';
import { TransferencesModule } from './transferences/transferences.module';
import { AccountsModule } from './accounts/accounts.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Bank } from './banks/entities/bank.entity';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { Account } from './accounts/entities/account.entity';
import { Card } from './accounts/entities/card.entity';
import { Transference } from './transferences/entities/transference.entity';
import { Service } from './services/entitites/services.entitys';
import { LogService } from './log_services/entities/log_serv.entities';
import { ServicesModule } from './services/services.module';
import { LogServicesModule } from './log_services/log_serv.module';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/entities/contact.entity';
import { BankBranches } from './bank_branches/entities/bankbranches.entities';
import { BankBranchesModule } from './bank_branches/bankbranches.module';

const Database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'roundhouse.proxy.rlwy.net',
  port: 36501,
  username: 'root',
  password: 'ofYwsuslNOmehLLsVQuZfYQQnefziYlh',
  database: 'railway',
  synchronize: true,
  entities: [Bank, User, Account, Card, Transference, Service, LogService, Contact, BankBranches],
};
@Module({
  imports: [
    TypeOrmModule.forRoot(Database),
    UsersModule,
    BanksModule,
    TransferencesModule,
    AccountsModule,
    AuthModule,
    ServicesModule,
    LogServicesModule,
    ContactsModule,
    BankBranchesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule { }
