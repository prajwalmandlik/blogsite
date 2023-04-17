import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import Filter from '../components/Filter'
import { BlogData } from '../Data'

const Home = () => {
  return (
    <>
      <Filter />
      <SimpleGrid columns={[1,1,2,2,3]} maxW={"1080px"} m={[2,2,2,"auto", "auto"]} gap={5} >
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
