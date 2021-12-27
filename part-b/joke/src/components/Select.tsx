import { FC } from 'react'

type SelectProps = {
    name: string
}

const Select: FC<SelectProps> = ({ children, name }) => {
    return (
        <select
            name={name}
            className="w-full border border-grey-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
        >
            {children}
        </select>
    )
}

export default Select
