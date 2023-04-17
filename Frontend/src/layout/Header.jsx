import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value , setValue] = useState('');
  const [searchState, setSearchState] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value === ''){
      setSearchState((state) => !state)
    }else{
      console.log(value)
    }
  }

  return (
    <>
      <Box  px={[5, 5, 5, 10]}>
        <HStack h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <NavLink to={`/`}>
              {"Blog"}
              {/* <Image src={Logo} w={"150px"} h={"auto"} />{" "} */}
            </NavLink>
          </Box>

          <Box>
            <HStack>
              <Box>
                <form onSubmit={handleSubmit} >
                  <HStack gap={0}>
                    <InputGroup hidden={searchState}>
                      <Input
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() => {
                            setValue("");
                          }}
                          _focus={{ bg: "inherit" }}
                          _active={{ bg: "inherit" }}
                          _hover={{ bg: "inherit" }}
                          hidden={(value === '') ? true : false}
                        >
                          <CloseIcon fontSize={".8rem"} />
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Button
                      type={"submit"}
                      bg={"inherit"}
                      _focus={{ bg: "inherit" }}
                      _active={{ bg: "inherit" }}
                      _hover={{ bg: "inherit" }}
                      px={[0,0,"1rem"]}
                    >
                      <SearchIcon />
                    </Button>
                  </HStack>
                </form>
              </Box>
              <Box>
                {isLogin ? (
                  <User name={"prajwal"} nameLogo={"prajwal mandlik"} logOut={"logOut"} />
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
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

const User = ({ name, nameLogo, logOut }) => (
  <>
    <Menu>
      <MenuButton>
        <HStack>
          <Avatar size="sm" name={nameLogo} />
          <Text>{name.toUpperCase()}</Text>
        </HStack>
      </MenuButton>
      <MenuList m={"0 2rem"} minW={"3rem"}>
        <Link to={`/profile`}>
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem onClick={logOut}>Log out</MenuItem>
      </MenuList>
    </Menu>
  </>
);

export default Header;
