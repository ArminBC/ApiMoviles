import { Test, TestingModule } from '@nestjs/testing';
import { LogServicesService } from './log_serv.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicesService } from '../services/services.service';
import { LogService } from './entities/log_serv.entities';

describe('LogServicesService', () => {
  let service: LogServicesService;
  let logServiceRepository: Repository<LogService>;
  let servicesService: ServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogServicesService,
        {
          provide: getRepositoryToken(LogService),
          useClass: Repository,
        },
        {
          provide: ServicesService,
          useValue: {}, // You can provide a mock implementation of ServicesService if needed
        },
      ],
    }).compile();

    service = module.get<LogServicesService>(LogServicesService);
    logServiceRepository = module.get<Repository<LogService>>(getRepositoryToken(LogService));
    servicesService = module.get<ServicesService>(ServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});