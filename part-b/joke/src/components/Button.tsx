import { FC } from 'react'

type ButtonProps = {
    type: 'submit' | 'reset'
}

const Button: FC<ButtonProps> = ({ children, type }) => {
    return (
        <button
            type={type}
            className="w-full p-3 border border-transparent rounded-full text-white font-medium bg-pink-500 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/50"
        >
            {children}
        </button>
    )
}

export default Button
