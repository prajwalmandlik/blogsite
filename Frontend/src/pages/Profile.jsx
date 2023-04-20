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
import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BlogData } from "../Data";

const Profile = () => {
  return (
    <>
      <Container centerContent py={10}>
        <Avatar name="Prajwal Mandlik" size={"2xl"} />
        <Heading as="h2" size="lg" p={5}>
          Prajwal Mandlik
        </Heading>
        <Button>Writer new blog</Button>
      </Container>

      <Divider />
      <Center>
        <Heading as="h2" size="xl" p={5}>
          Your Blog's
        </Heading>
      </Center>

      <SimpleGrid columns={1} mt={6} marginRight={[4, "auto", 5]} gap={5}>
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
