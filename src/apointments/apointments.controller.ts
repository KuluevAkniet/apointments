import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ApointmentsService } from './apointments.service';
import { Apointments } from './apointments.schema';

@Controller('apointments')
export class ApointmentsController {
     constructor(private readonly apointments:ApointmentsService){

     }
     @Get('record')
     async findAll(): Promise<Apointments[]> {
        return this.apointments.findAll()
      }


      @Get(':id')
      async findOne(@Param('id') id: string): Promise<Apointments> {
        return this.apointments.findOne(id);
      }

      @Post()
      async create(@Body() createAppointmentDto: Apointments): Promise<Apointments> {
        return this.apointments.create(createAppointmentDto);
      }


      @Delete(':id')
      async delete(@Param('id') id: string): Promise<Apointments> {
        return this.apointments.delete(id);
      }
}
