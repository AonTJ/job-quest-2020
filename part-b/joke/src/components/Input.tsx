import { FC } from 'react'

type InputProps = {
    name: string
    placeholder: string
}

const Input: FC<InputProps> = ({ name, placeholder }) => {
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-grey-300 rounded-lg shadow-sm caret-pink-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
        />
    )
}

export default Input
