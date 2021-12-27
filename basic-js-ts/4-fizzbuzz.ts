function fizzBuzz(num: number): string {
    const [a = 'Fizz', b = 'Buzz'] = [
        num % 3 === 0 ? undefined : '',
        num % 5 === 0 ? undefined : '',
    ]
    return a + b
}
