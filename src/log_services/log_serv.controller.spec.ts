import { Test, TestingModule } from '@nestjs/testing';
import { LogServicesController } from './log_serv.controller';
import { LogServicesService } from './log_serv.service';
import { UsersService } from '../users/users.service';
import { AccountsService } from '../accounts/accounts.service';
import { ServicesService } from '../services/services.service';

describe('LogServicesController', () => {
  let controller: LogServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogServicesController],
      providers: [LogServicesService, UsersService, AccountsService, ServicesService],
    }).compile();

    controller = module.get<LogServicesController>(LogServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});