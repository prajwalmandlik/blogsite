import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const sidebar = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        color="whiteAlpha.900"
        _hover={{
          bg: "whiteAlpha.900",
          color: "blackAlpha.900",
        }}
        _focus={{
          bg: "whiteAlpha.900",
          color: "blackAlpha.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: "gray.900",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="blackAlpha.900"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Text
          fontSize="2xl"
          ml="2"
          color="whiteAlpha.900"
          fontWeight="semibold"
        >
          Bloger
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link to="/"><NavItem icon={MdHome}>Home</NavItem></Link>
        <Link to="/profile"><NavItem >Profile</NavItem></Link>
        <Link to="/new"><NavItem >New Blog</NavItem></Link>
        <Link to="/blog/1"><NavItem >Blog</NavItem></Link>
        <Link to="/signIn"><NavItem >Sign In</NavItem></Link>
        <Link to="/signUp"><NavItem >Sign Up</NavItem></Link>
      </Flex>
    </Box>
  );

  return (
    <Box as="section">
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
        position={"fixed"}
        zIndex="sticky"
        w={{
          base: "full",
          md: `calc(100% - 15rem)`,
        }}
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
          gap={2}
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={sidebar.onOpen}
            icon={<HamburgerIcon />}
            size="md"
            _focus={{ bg: "inherit" }}
            _active={{ bg: "inherit" }}
            _hover={{ bg: "inherit" }}
          />
          <InputGroup
            maxW={96}
            display={{
              base: "flex",
              md: "flex",
            }}
          >
            <InputLeftElement color="gray.500">
              <SearchIcon />
            </InputLeftElement>
            <Input placeholder="Search for articles..." />
          </InputGroup>

          <Flex align="center" gap={2}>
            <Avatar ml="4" size="sm" name="prajwal Mandlik" cursor="pointer" />
            <Text fontWeight={"700"}>PRAJWAL</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
