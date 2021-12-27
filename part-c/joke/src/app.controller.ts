import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { CreateJokeDto } from './dto/create-joke.dto'
import { Joke } from './schemas/joke.schema'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    findAllJoke(): Promise<Joke[]> {
        return this.appService.findAllJoke()
    }

    @Get(':id')
    findJoke(@Param('id') id: string): Promise<Joke> {
        return this.appService.findJoke(id)
    }

    @Post()
    createJoke(@Body() data: CreateJokeDto): Promise<Joke> {
        return this.appService.createJoke(data)
    }

    @Post(':id/like')
    likeJoke(@Param('id') id: string) {
        return this.appService.updateJoke(id, true)
    }

    @Post(':id/dislike')
    dislikeJoke(@Param('id') id: string) {
        return this.appService.updateJoke(id, false)
    }

    @Delete(':id')
    deleteJoke(@Param('id') id: string) {
        return this.appService.deleteJoke(id)
    }
}
