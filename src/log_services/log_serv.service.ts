import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicesService } from 'src/services/services.service';
import { UsersService } from 'src/users/users.service';
import { AccountsService } from 'src/accounts/accounts.service';
import { LogService } from './entities/log_serv.entities';
import { CreateLogServiceDto } from './dto/create-log_serv.dto';

@Injectable()
export class LogServicesService {
  constructor(
    @InjectRepository(LogService)
    private logServiceRepository: Repository<LogService>,
    @Inject(ServicesService)
    private readonly servicesService: ServicesService,
    @Inject(UsersService)
    private readonly usersService: UsersService,
    @Inject(AccountsService)
    private readonly accountsService: AccountsService,
  ) { }

  async create(createLogServiceDto: CreateLogServiceDto) {
    const newLogService: LogService = {
        id_service: createLogServiceDto.id_service,
        id_users: createLogServiceDto.id_users,
        id_account: createLogServiceDto.id_account,
        amount: createLogServiceDto.amount,
        reference: createLogServiceDto.reference,
    };

    const insertResult = await this.logServiceRepository.save(newLogService);

    return insertResult;
  }

  async findOne(id: number) {
    return await this.logServiceRepository.findOne({ where: { id } });
  }

  async update(id: number, updateLogServiceDto: CreateLogServiceDto) {
    return await this.logServiceRepository.update({ id: id }, updateLogServiceDto);
  }

  async findOneById(id: number) {
    return await this.logServiceRepository.findOne({ where: { id: id } });
  }


  async findAll() {
    return await this.logServiceRepository.find();
  }
  
}