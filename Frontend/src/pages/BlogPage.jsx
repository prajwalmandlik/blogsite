import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { server } from "../main";

export default function BlogPage() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${server}/blog/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          const blog = res.data.blog;
          setBlogData(blog);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <>
      <h1>{blogData.title}</h1>
    </>
  );
}

