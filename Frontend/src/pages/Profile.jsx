import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BlogData } from "../Data";
import { Context } from "../main";

const Profile = () => {

  const { user , isAuthenticated} = useContext(Context);

if(!isAuthenticated){
  return <Navigate to={`/`} />
}

  return (
    <>
      <Container centerContent py={10}>
        <Avatar name={user.name} size={"2xl"} />
        <Heading as="h2" size="lg" p={5}>
          {user.name}
        </Heading>
        <Link to={`/new`} >
        <Button>Writer new blog</Button></Link>
      </Container>

      <Divider />
      <Center>
        <Heading as="h2" size="xl" p={5}>
          Your Blog's
        </Heading>
      </Center>

      <SimpleGrid
        columns={1}
        mt={6}
        mx={{
          base: 4,
          md: 8,
          lg: "auto 5",
        }}
        // marginRight={["auto", "auto", 5]}
        gap={5}
      >
        {BlogData.map((element, index) => {
          return (
            <>
              {/* <Link to={`/blog/${1}`}> */}
              <BlogCard
                key={index}
                img={element.image}
                title={element.title}
                desc={element.description}
                editor={true}
              />
              {/* </Link> */}
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Profile;
