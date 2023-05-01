import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  mongoose, { HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<Apointments>;

  
@Schema({autoIndex:true})
export class Apointments {
    doctor: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'}

    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

    date: Date
    
    duration: Number
}


export const ApointmentsSchema = SchemaFactory.createForClass(Apointments);
