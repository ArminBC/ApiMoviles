import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Request() req, @Body() createContactDto: CreateContactDto) {
    return {status: 'Success', data: await this.contactsService.create(+req.user.id, createContactDto)};
  }

  @Get()
  async findAll(@Request() req) {
    return {status: 'Success', data: await this.contactsService.findAll(+req.user.id)};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(+id, updateContactDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {status: "Success", data: await this.contactsService.remove(+id)};
  }
}
