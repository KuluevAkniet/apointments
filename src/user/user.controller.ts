import { Body, Controller,Post,Get,Param,Delete,Put } from '@nestjs/common';
import { RecordUser } from './user.create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
     @Post('record')
     async record(@Body() dto: RecordUser){
         return await this.userService.record(dto)
     }

     

}
