import { Module } from '@nestjs/common';
import { ApointmentsService } from './apointments.service';
import { ApointmentsController } from './apointments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Apointments, ApointmentsSchema } from './apointments.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Apointments.name, schema:ApointmentsSchema}])],
  providers: [ApointmentsService],
  controllers: [ApointmentsController]
})
export class ApointmentsModule {}
