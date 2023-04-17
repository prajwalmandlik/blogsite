import { Button, HStack } from "@chakra-ui/react";
import React from "react";

const Filter = () => {
  const filters = [
    "All",
    "Web",
    "Mobile",
    "AI",
    "Cloud Computing",
    "Cybersecurity",
    "Data Science",
    "Trends",
    "Tech News",
    "Recommendations",
  ];

  return (
    <>
      <HStack
        maxW={["auto", "auto", "auto", "1080px"]}
        m={"0 auto"}
        bgColor="#fff"
        borderRadius={"10px"}
        p={"2rem 0"}
      >
        <HStack
          align={"center"}
          wrap="nowrap"
          gap={"1rem"}
          m={"1rem 2rem .4rem 2rem"}
          overflowY={"hidden"}
          overflowX={"auto"}
          className={"sort"}
        >
          {filters.map((element) => {
            return (
              <>
                <Button
                  minW={"auto"}
                  p={"1rem 2rem"}
                  bgColor={"black"}
                  color={"white"}
                  _hover={{ color: "black", bgColor: "#fff" }}
                  variant='outline'

                >
                  {element}
                </Button>
              </>
            );
          })}
        </HStack>
      </HStack>
    </>
  );
};

export default Filter;
