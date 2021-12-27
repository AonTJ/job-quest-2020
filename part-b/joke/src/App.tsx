import './App.css'
import React, { useEffect, useState } from 'react'
import { FormInput } from './types/Form'
import { Response } from './types/Response'
import { Joke } from './types/Joke'
import { Brand, Label, Input, Select, Button, ListItem, Checkbox } from './components'

const baseUrl = 'https://api.icndb.com'
const numOfResult = [5, 10, 20]

function App() {
    const [loading, setLoading] = useState<boolean>(false)
    const [jokes, setJokes] = useState<Joke[]>()
    const [categories, setCategories] = useState([])
    const [jokeCount, setJokeCount] = useState<number>(0)

    useEffect(() => {
        if (jokes && categories) return
        getData()
    }, [jokes, categories])

    const getData = async () => {
        setLoading(true)

        const responses = await Promise.all([
            fetch(`${baseUrl}/jokes/random/${numOfResult[0]}?escape=javascript`),
            fetch(`${baseUrl}/categories`),
            fetch(`${baseUrl}/jokes/count`),
        ])
        const data = await Promise.all(responses.map((response) => response.json()))

        setJokes(data[0].value)
        setCategories(data[1].value)
        setJokeCount(data[2].value)

        setLoading(false)
    }

    const getQueryStr = (firstName: string, lastName: string, categories: string[]) => {
        let queryStr = ''
        if (firstName !== '') queryStr += `&firstName=${firstName}`
        if (lastName !== '') queryStr += `&lastName=${lastName}`
        if (categories.length > 0) queryStr += `&limitTo=[${categories.join(',')}]`
        return queryStr
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { firstName, lastName, categories, numOfResult } = e.target as FormInput<
            typeof e.target
        >
        console.log(categories.value)
        const queryStr = getQueryStr(firstName.value, lastName.value, categories.value)

        try {
            setLoading(true)
            const response = await fetch(
                `${baseUrl}/jokes/random/${numOfResult.value}?escape=javascript${queryStr}`
            )
            const data = (await response.json()) as Response<Joke[]>
            setJokes(data.value)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col">
            <div className="py-10 flex flex-wrap justify-evenly bg-slate-300">
                <Brand jokeCount={jokeCount} />
                <div className="p-10 shadow-2xl rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <Label>Enter your name in a joke</Label>
                        <div className="mt-1 flex space-x-4">
                            <Input name="firstName" placeholder="Firstname" />
                            <Input name="lastName" placeholder="Lastname" />
                        </div>
                        <div className="flex space-x-4">
                            <div className="mt-5 flex flex-col flex-1">
                                <Label>Random</Label>
                                <div className="mt-1">
                                    <Select name="numOfResult">
                                        {numOfResult.map((num) => (
                                            <option key={num} value={num}>
                                                {num} jokes
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col flex-1">
                                <Label>Category</Label>
                                <div className="mt-1 space-x-4">
                                    {categories?.map((category, index: number) => (
                                        <Checkbox name="categories" value={category} key={index}>
                                            {category}
                                        </Checkbox>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex space-x-4">
                            <Button type="submit">Give me a jokes</Button>
                            <Button type="reset">Reset</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="px-20 py-10">
                {loading ? (
                    <h1 className="text-center">Loading...</h1>
                ) : (
                    <ul className="flex flex-wrap">
                        {jokes?.map((joke: Joke, index: number) => (
                            <ListItem joke={joke} key={index} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default App
