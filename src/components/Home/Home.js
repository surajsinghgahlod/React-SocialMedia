import React from 'react'
import Navbar from './Navbar'
import Post from './Post'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
            <h3>Welcome to the Social-24 page!</h3>
            <Post />
        </div>
    </div>
  )
}

export default Home
