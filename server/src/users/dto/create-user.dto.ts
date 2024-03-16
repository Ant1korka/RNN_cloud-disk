import { ApiProperty } from "@nestjs/swagger";

export class createUserDto {
    @ApiProperty({example: 'a@email.ru', description: 'Почтовый адрес'})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'Пароль'})
    readonly password: string;
}