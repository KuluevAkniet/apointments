import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  mongoose, { HydratedDocument} from 'mongoose';
import { Apointments } from 'src/apointments/apointments.schema';


export type UserDocument = HydratedDocument<Doctor>;

  
@Schema({autoIndex:true})
export class Doctor {


  @Prop({required:true})
  name: string;
  
  @Prop({required:true})
  spec:number;

  @Prop({required:true})
  slots: [];
}


export const DoctorSchema = SchemaFactory.createForClass(Doctor);
