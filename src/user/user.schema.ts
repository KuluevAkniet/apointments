import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import  mongoose, { HydratedDocument} from 'mongoose';
import { Apointments, ApointmentsSchema } from 'src/apointments/apointments.schema';


export type UserDocument = HydratedDocument<User>;

  
@Schema({autoIndex:true})
export class User {

 @Prop({required:true})
  name: string;
  
  @Prop({required:true})
  phone:number;

}


export const UserSchema = SchemaFactory.createForClass(User);



