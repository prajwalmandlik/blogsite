import {
  Avatar,
  Box,
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
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        placeItems="center"
        minH={"50vh"}
        maxW={"50vw"}
        m={"auto"}
      >
        <Box><Avatar name={"Prajwal Mandlik"} size="2xl"/></Box>
        <Box>
          <VStack spacing={2} align={"start"}>
            <Text>Name : Prajwal Mandlik</Text>
            <Text>Email : prajwal@gmail.com</Text>
            <Text>Join At : 9 Jan 2023</Text>
            <Text>Total Blog's : 10</Text>
            <Text>Total Views : 10000</Text>
          </VStack>
        </Box>
      </SimpleGrid>
      <Divider />
      <Center>
        <Heading as="h2" size="xl" p={5}>Your Blog's</Heading>
      </Center>
      <SimpleGrid
        columns={[1, 1, 2, 2, 3]}
        maxW={"1080px"}
        m={[2, 2, 2, "auto", "auto"]}
        gap={5}
        pt={5}
      >
        {BlogData.map((element, index) => {
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
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Profile;
