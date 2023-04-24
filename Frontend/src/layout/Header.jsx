import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
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
  Button,
  Menu,
  MenuButton,
  HStack,
  MenuList,
  MenuItem,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context, server } from "../main";

const Header = () => {
  const sidebar = useDisclosure();
  const { pathname } = useLocation();
  const {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    filter,
    setFilter,
    search,
    setSearch,
  } = useContext(Context);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const logOut = async () => {
    try {
      await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      });
      const data = { email: "" };
      setIsAuthenticated(false);
      setUser(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const applaySearch = (e) => {
    e.preventDefault();
    setSearch(searchValue);
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const NavItem = (props) => {
    const { icon, selected, children, ...rest } = props;
    return (
      <Button
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        bg={filter === children.toLowerCase() ? "whiteAlpha.900" : "inherit"}
        color={
          filter === children.toLowerCase()
            ? "blackAlpha.900"
            : "whiteAlpha.900"
        }
        _hover={{
          bg: "whiteAlpha.900",
          color: "blackAlpha.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
        onClick={() => {
          setFilter(children.toLowerCase());
          navigate("/");
        }}
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
      </Button>
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
        <Link to="/">
          <Text
            fontSize="2xl"
            ml="2"
            color="whiteAlpha.900"
            fontWeight="semibold"
          >
            Blogger
          </Text>
        </Link>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        gap="2"
      >
        <NavItem>All</NavItem>
        <NavItem>Web</NavItem>
        <NavItem>App</NavItem>
        <NavItem>C++</NavItem>
        <NavItem>JavaScript</NavItem>
        <NavItem>Python</NavItem>
        <NavItem>AI</NavItem>
        <NavItem>Other</NavItem>
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
            _focus={{ bg: "white" }}
            _active={{ bg: "white" }}
            _hover={{ bg: "white" }}
            bg="white"
          />
          <Box>
            <form onSubmit={applaySearch}>
              <HStack gap={0}>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                    w={["100%", "100%", "100%", "30rem"]}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() => {
                        setSearchValue("");
                      }}
                      _focus={{ bg: "inherit" }}
                      _active={{ bg: "inherit" }}
                      _hover={{ bg: "inherit" }}
                      hidden={searchValue === "" ? true : false}
                    >
                      <CloseIcon fontSize={".8rem"} />
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <IconButton
                  type={"submit"}
                  bg={"inherit"}
                  _focus={{ bg: "inherit" }}
                  _active={{ bg: "inherit" }}
                  _hover={{ bg: "inherit" }}
                  px={[0, 0, "1rem"]}
                >
                  <SearchIcon />
                </IconButton>
              </HStack>
            </form>
          </Box>
          <Box>
            {isAuthenticated ? (
              <User name={user && user.name} logOut={logOut} />
            ) : (
              <>
                <Link to={`/signIn`}>
                  <Button variant="outline" colorScheme="blue">
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const User = ({ name = "user", logOut }) => {
  const firstName = name.split(" ")[0];
  return (
    <>
      <Menu>
        <MenuButton>
          <HStack>
            <Avatar size="sm" name={name} />
            <Text>{firstName.toUpperCase()}</Text>
          </HStack>
        </MenuButton>
        <MenuList minW={"120px"}>
          <Link to={`/profile`}>
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem onClick={logOut}>Log out</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Header;
