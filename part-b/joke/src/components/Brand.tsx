import { FC } from 'react'

type BrandProps = {
    jokeCount: number
}

const Brand: FC<BrandProps> = ({ jokeCount }) => {
    return (
        <div className="p-20 text-center">
            <p className="mb-10 font-bold text-7xl">
                Find over{' '}
                <span className="underline underline-offset-8 decoration-pink-500">
                    {jokeCount}
                </span>{' '}
                jokes
            </p>
            <p className="font-bold text-5xl text-pink-500 text-center italic">from Chuck Norris</p>
        </div>
    )
}

export default Brand
