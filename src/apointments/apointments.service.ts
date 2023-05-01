import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Apointments } from './apointments.schema';


@Injectable()
export class ApointmentsService {
    constructor(
        @InjectModel('Appointment') private readonly appointmentModel: Model<Apointments>,
      ) {}
    
      async findAll(): Promise<Apointments[]> {
        return this.appointmentModel.find().populate('doctor').populate('user').exec();
      }
    
      async findOne(id: string): Promise<Apointments> {
        return this.appointmentModel.findById(id).populate('doctor').populate('user').exec();
      }
    
      async create(createAppointmentDto: Apointments): Promise<Apointments> {
        const createdAppointment = new this.appointmentModel(createAppointmentDto);
        return createdAppointment.save();
      }
    
      async delete(id: string): Promise<Apointments> {
        return this.appointmentModel.findByIdAndDelete(id).exec();
      }
}

