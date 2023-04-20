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
  Button,
  Menu,
  MenuButton,
  HStack,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const sidebar = useDisclosure();
  const { pathname } = useLocation();
  const [ login , setLogin ] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const NavItem = (props) => {
    const { icon, selected , children, ...rest } = props;
    return (
      <Button
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        bg="inherit"
        color="whiteAlpha.900"
        _hover={{
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

          <Box>
                {login ? (
                  <User name={"Prajwal Mandlik"} logOut={""} />
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

const User = ({ name, logOut }) => {
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
        <MenuList  minW={"120px"}>
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
