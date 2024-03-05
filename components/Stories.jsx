"use client"
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import { fakeUser } from '@/util/fakeUserType.ts'
import Story from '@/components/Story'

function Stories() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const fetchedSuggestions = faker.helpers.multiple(fakeUser, {
            count: 20,
        });

        setSuggestions(fetchedSuggestions)
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-auto scrollbar-thin scrollbar-thumb-black'>
            {suggestions.map(profile => (
                <Story key={profile.id} 
                    img={profile.avatar} 
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories