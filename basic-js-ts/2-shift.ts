enum Direction {
    left = 'left',
    right = 'right',
}

function shift(input: number[], direction: Direction, n: number): number[] {
    if (direction === Direction.left) {
        const shift = input.slice(0, n)
        input.splice(0, n)
        return [...input, ...shift]
    }
    if (direction === Direction.right) {
        const shift = input.slice(input.length - n, input.length)
        input.splice(input.length - n, input.length)
        return [...shift, ...input]
    }
}
