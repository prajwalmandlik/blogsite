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
  const [blogData, setBlogData] = useState("");

  useEffect(() => {
    try {
      axios
        .get(`${server}/blog/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          const blog = res.data.blog;
          setBlogData(...blog);
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
      <Container maxW={'7xl'}>
      <SimpleGrid
       columns={1}
        py={4}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={blogData.flare}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
              {blogData.title}
            </Heading>
          </Box>

          <Box>
            <Text dangerouslySetInnerHTML={{__html: blogData.blog}} ></Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Container>
    </>
  );
}

