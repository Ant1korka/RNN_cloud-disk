import { Injectable } from '@nestjs/common';
import { User } from './users.models';
import { InjectModel } from '@nestjs/sequelize';
import { createUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: createUserDto) {
        const user = await this.userRepository.create(dto);
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}})
        return user
    }
}
