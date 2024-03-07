"use client"
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import { fakeUser } from '@/util/fakeUserType.ts'
import Story from '@/components/Story'

function Stories() {

    const [stories, setStories] = useState([])

    useEffect(() => {
        const fetchedstories = faker.helpers.multiple(fakeUser, {
            count: 20,
        });

        setStories(fetchedstories)
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-auto scrollbar-thin scrollbar-thumb-black'>
            {stories.map(profile => (
                <Story key={profile.id} 
                    img={profile.avatar} 
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories