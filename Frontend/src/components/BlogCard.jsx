import {
  Box,
  Flex,
  Image,
  Text,
  chakra,
  SimpleGrid,
  Button,
  Stack,
  Avatar,
  VStack,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import moment from "moment/moment";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { server } from "../main";

const BlogCard = ({ blogData, editor = false }) => {
  const deleteScheme = () => {
    const conf = confirm("delete blog");

    if (!conf) {
      return 0;
    }
    try {
      axios
        .delete(`${server}/blog/${blogData._id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          toast.success("blog deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const date = blogData.createdAt.split("T")[0];
  
  
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      mx={{
        base: 1,
        lg: 8,
      }}
      display={{
        lg: "flex",
      }}
      maxW={{
        lg: "5xl",
      }}
      shadow={"lg"}
      rounded={"lg"}
    >
      <Box
        w={{
          lg: "50%",
        }}
        my="auto"
        mx={{
          base: "auto",
          lg: 4,
        }}
      >
        <Box
          h={{
            base: 64,
            lg: 64,
          }}
          rounded={{
            lg: "lg",
          }}
          bgSize="cover"
          bgPosition="center"
          style={{
            backgroundImage: `url(${blogData.flare})`,
          }}
        ></Box>
      </Box>

      <Box
        py={[4, 4, 8]}
        px={6}
        maxW={{
          base: "xl",
          lg: "5xl",
        }}
        w={{
          lg: "50%",
        }}
      >
        <chakra.h2
          fontSize={{
            base: "2xl",
            md: "3xl",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
        >
          {blogData.title}
        </chakra.h2>

        <chakra.span
          fontSize="xs"
          textTransform="uppercase"
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          {blogData.category}
        </chakra.span>

        <Text
          mt={4}
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
          noOfLines={3}
        >
          {blogData.description}
        </Text>
        {editor ? (
          <>
            <HStack mt={8} gap={2}>
              <Link to={`/blog/${blogData._id}`}>
                <Button>Read More</Button>
              </Link>
              <Link to={`/writeBlog/${blogData._id}`}>
                <Button ml={4}>Edit</Button>
              </Link>{" "}
              <Button ml={4} onClick={deleteScheme}>
                Delete
              </Button>
            </HStack>
          </>
        ) : (
          <>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                // src={blogData.author.profileImg}
                name={blogData.author.name}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{blogData.author.name}</Text>
                <Text color={"gray.500"}>{moment(date).fromNow()}</Text>
              </Stack>
            </Stack>
          </>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default BlogCard;
