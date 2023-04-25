import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BlogData as Data } from "../Data";
import { Context, server } from "../main";

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  const { user, isAuthenticated, search, filter } = useContext(Context);

  useEffect(() => {
    const url = [`getAll`, `search/${search}`, `filter/${filter}`];
    if (filter === "all" && search === "") {
      axios
        .get(`${server}/blog/${url[0]}`, {
          withCredentials: true,
        })
        .then((res) => {
          const data = res.data.blogs;
          setBlogData(data);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
          setBlogData([]);
        });
    } else {
      try {
        axios
          .get(`${server}/blog/${filter === "all" ? url[1] : url[2]}`, {
            withCredentials: true,
          })
          .then((res) => {
            const data = res.data.blog;
            setBlogData(data);
          })
          .catch((error) => {
            toast.error(error.response.data.message);
            setBlogData([]);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [search, filter, isAuthenticated]);

  return (
    <>
      {blogData.length === 0 && (
        <>
          <Text>No such blog found</Text>
        </>
      )}
      <SimpleGrid
        columns={1}
        mt={6}
        marginRight={["auto", "auto", 5]}
        mx={{
          base: 4,
          sm: "auto",
        }}
        gap={5}
        minH="100vh"
        f
      >
        {blogData.map((element, index) => {
          return (
            <>
              <Link to={`/blog/${element._id}`}>
                <BlogCard key={index} blogData={element} />
              </Link>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Home;
