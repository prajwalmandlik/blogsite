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
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, desc, editor = false }) => {
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
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
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
          Build Your New{" "}
        </chakra.h2>

        <chakra.span
          fontSize="xs"
          textTransform="uppercase"
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          Product
        </chakra.span>

        <Text
          mt={4}
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
          noOfLines={3}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus
          enim expedita aperiam mollitia iure consectetur dicta tenetur, 
        </Text>
        {editor ? (
          <>
            <HStack mt={8}>
              <Button>Read More</Button>
              <Button ml={4}>Edit</Button> <Button ml={4}>Delete</Button>
            </HStack>
          </>
        ) : (
          <>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                alt={"Author"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Achim Rolle</Text>
                <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
              </Stack>
            </Stack>
          </>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default BlogCard;
