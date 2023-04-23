import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BlogData as Data } from "../Data";
import { Context, server } from "../main";

const Profile = () => {
  const { user, isAuthenticated } = useContext(Context);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get(`${server}/blog/getByUserId/${user._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.blogs;
        setBlogData(data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={`/`} />;
  }


  return (
    <>
      <Container centerContent py={10}>
        <Avatar name={user.name} size={"2xl"} />
        <Heading as="h2" size="lg" p={5}>
          {user.name}
        </Heading>
        <Link to={`/writeBlog/${0}`}>
          <Button>Writer new blog</Button>
        </Link>
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
        minH={"50vh"}
      >
        {blogData.map((e, i) => {
          return (
            <BlogCard
                key={i}
                blogData={e}
                editor={true}
              />
          )
        })}
      </SimpleGrid>
    </>
  );
};

export default Profile;
