import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'

export type JokeSaticfactionDocument = JokeSaticfaction & Document

@Schema({ collection: 'joke_saticfactions', timestamps: true })
export class JokeSaticfaction {
    @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
    jokeId: string

    @Prop({ type: MongooseSchema.Types.ObjectId })
    userId: string

    @Prop({ type: Boolean, required: true })
    like: boolean

    @Prop({ type: Boolean, default: false })
    deleted: boolean
}

export const JokeSaticfactionSchema = SchemaFactory.createForClass(JokeSaticfaction)
