function secondMax(input: number[]): number | string {
    if (input.length === 0) return 'Error!'
    if (input.length === 1) return input[0]

    const firstMax = Math.max(...input)
    const withoutFirstMax = input.filter((value) => value !== firstMax)
    const secondMax = withoutFirstMax.length > 0 ? Math.max(...withoutFirstMax) : firstMax

    return secondMax
}
