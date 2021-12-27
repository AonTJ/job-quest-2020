import { IsNotEmpty, IsString } from 'class-validator'

export class CreateJokeDto {
    @IsNotEmpty()
    @IsString()
    joke: string
}
