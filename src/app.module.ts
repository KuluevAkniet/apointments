import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { DoctorModule } from './doctor/doctor.module';
import { ApointmentsModule } from './apointments/apointments.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://kuluev877:Akni3223@cluster0.hig5uob.mongodb.net/test'), UserModule, DoctorModule, ApointmentsModule],
  controllers:[],
  providers: [],
})
export class AppModule {}
