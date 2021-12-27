import { FC } from 'react'

const ListItemButton: FC = ({ children }) => {
    return (
        <button className="px-2 text-white text-sm border border-transparent rounded-full bg-pink-500 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/50">
            {children}
        </button>
    )
}

export default ListItemButton
