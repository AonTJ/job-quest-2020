import { FC } from 'react'
import { Joke } from '../types/Joke'
import ListItemButton from './ListItemButton'

type ListItemProps = {
    joke: Joke
}

const ListItem: FC<ListItemProps> = ({ joke }) => {
    return (
        <li className="mb-5 mr-5 p-5 border-2 border-pink-500 rounded-3xl shadow-lg" key={joke.id}>
            <p className="text-lg">{joke.joke}</p>
            <div className="mt-2 float-right space-x-1">
                <ListItemButton>Copy</ListItemButton>
                <ListItemButton>Share</ListItemButton>
            </div>
        </li>
    )
}

export default ListItem
