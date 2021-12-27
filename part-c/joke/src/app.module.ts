import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Joke, JokeSchema } from './schemas/joke.schema'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/thai_joke', { useNewUrlParser: true }),
        MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
