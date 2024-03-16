import { Controller, Post, Body, Get } from '@nestjs/common';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './users.models';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @ApiOperation({summary: 'Create user'}) 
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: createUserDto) {
        return this.usersService.createUser(userDto)
    }
    
    @ApiOperation({summary: 'Get all users'}) 
    @ApiResponse({status: 200, type: User})
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

}
