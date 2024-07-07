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


const Database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: "central_bank",
  synchronize: true,
  entities: [Bank, User]
}
@Module({
  imports: [TypeOrmModule.forRoot(Database), UsersModule, BanksModule, TransferencesModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
