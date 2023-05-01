import { Injectable } from '@nestjs/common';
import { RecordUser } from './user.create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model,} from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private  userModel:Model<User>){}
    async record(dto:RecordUser){
       return await this.userModel.create(dto);
    }
}
