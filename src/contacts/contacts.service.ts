import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) { }


  create(id: number, createContactDto: CreateContactDto) {
    createContactDto.id_user = id
    return this.contactRepository.save(createContactDto);
  }

  async findAll() {
    return await this.contactRepository.find();
  }
  
  findOne(id: number) {
    return this.contactRepository.findOne({where: {id: id}});
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return this.contactRepository.delete({id: id});
  }
}
