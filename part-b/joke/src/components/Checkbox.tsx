import { FC } from 'react'

type CheckboxProps = {
    name: string
    value: string
}

const Checkbox: FC<CheckboxProps> = ({ children, name, value }) => {
    return (
        <label>
            <input type="checkbox" name={name} value={value} className="accent-pink-500" />{' '}
            {children}
        </label>
    )
}

export default Checkbox
