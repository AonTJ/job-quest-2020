import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

export type JokeDocument = Joke & Document

@Schema({ collection: 'jokes', timestamps: true })
export class Joke {
    @Prop({ type: MongooseSchema.Types.ObjectId })
    userId: string

    @Prop({ type: String, required: true })
    joke: string

    @Prop({ type: Number, default: 0 })
    likeCount: number

    @Prop({ type: Number, default: 0 })
    dislikeCount: number
}

export const JokeSchema = SchemaFactory.createForClass(Joke)
