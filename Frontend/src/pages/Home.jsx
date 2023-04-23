import { Box, Img, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BlogData as Data } from "../Data";
import { Context, server } from "../main";


const Home = () => {
  const [blogData, setBlogData] = useState([]);
  const { user, isAuthenticated } = useContext(Context);

  useEffect(() => {
    axios
      .get(`${server}/blog/getAll`, {
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

  return (
    <>
      <Img />
      <SimpleGrid
        columns={1}
        mt={6}
        marginRight={["auto", "auto", 5]}
        mx={{
          base: 4,
          sm: "auto",
        }}
        gap={5}
      >
        {blogData.map((element, index) => {
          return (
            <>
              <Link to={`/blog/${element._id}`}>
                <BlogCard
                  key={index}
                  blogData={element}
                />
              </Link>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Home;
