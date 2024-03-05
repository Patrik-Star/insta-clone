import React from 'react'
import Post from '@/components/Post'

const posts = [
    {
        id: '123',
        username: 'shark',
        userImg: 'https://patrikbolander.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfilePic.4b682267.png&w=384&q=95',
        img: 'https://patrikbolander.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfilePic.4b682267.png&w=384&q=95',
        caption: 'this is cool'
    },
    {
        id: '124',
        username: 'shark',
        userImg: 'https://patrikbolander.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfilePic.4b682267.png&w=384&q=95',
        img: 'https://patrikbolander.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfilePic.4b682267.png&w=384&q=95',
        caption: 'this is cool'
    }
]

function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
        ))}
        
    </div>
  )
}

export default Posts