import { Box, Img, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { BlogData } from '../Data'

const Home = () => {
  return (
    <>
      <Img />
      <SimpleGrid columns={[1,1,1,2,3]} mt={6}  marginRight={[4, "auto",5]} gap={5} >
        {BlogData.map((element,index) => {
          return (
            <>
            <Link to={`/blog/${1}`}>
              <BlogCard
                key={index}
                img={element.image}
                title={element.title}
                desc={element.description}
              />
              </Link>
            </>
          )
        })
      }
      </SimpleGrid>
    </>
  )
}

export default Home
