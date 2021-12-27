import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateJokeDto } from './dto/create-joke.dto'
import { Joke, JokeDocument } from './schemas/joke.schema'

@Injectable()
export class AppService {
    constructor(@InjectModel(Joke.name) private jokeModel: Model<JokeDocument>) {}

    async findAllJoke(): Promise<Joke[]> {
        return this.jokeModel.find().lean()
    }

    async findJoke(id: string): Promise<Joke> {
        return this.jokeModel.findOne({ _id: id }).lean()
    }

    async createJoke(data: CreateJokeDto): Promise<Joke> {
        return this.jokeModel.create(data)
    }

    async updateJoke(id: string, isLike: boolean) {
        return this.jokeModel
            .updateOne(
                { _id: id },
                { $inc: isLike ? { likeCount: 1 } : { dislikeCount: 1 } },
                { new: true },
            )
            .lean()
    }

    async deleteJoke(id: string) {
        return this.jokeModel.deleteOne({ _id: id }).lean()
    }
}
