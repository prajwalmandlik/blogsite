import { Box } from "@chakra-ui/react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SetNewBlog = () => {
  return (
    <>
    <Box m={10} ml={0} minH={"100vh"}>
      <ReactQuill theme="snow" className={"text-editor"} />
      </Box>
    </>
  );
};

export default SetNewBlog;
