import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SetNewBlog = () => {
  const [img, setImg] = useState();

  const modules = {
    toolbar: [
      [{ header: [2, 3, 4, 5, 6] }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <>
      <Box m={10} ml={0} minH={"100vh"}>
        <form>
          <FormControl py={4}>
            <FormLabel>Flare</FormLabel>
            <Input
              border={"none"}
              type="file"
              accept="image/*"
              onChange={(e) => setImg(e.target.files[0])}
            />
            <Box py={4}>
              {img && (
                <Img
                  src={URL.createObjectURL(img)}
                  alt="blog img"
                  objectFit={"contain"}
                  h={"30vh"}
                />
              )}
            </Box>
          </FormControl>

          <FormControl py={4}>
            <FormLabel>Title</FormLabel>
            <Input type="text" border={"1px black solid"} />
          </FormControl>

          <FormControl py={4} >
            <ReactQuill
              theme="snow"
              className={"text-editor"}
              modules={modules}
            />
          </FormControl>

          <FormControl py={4}>
            <Input type="submit"  border={"1px black solid"} />
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default SetNewBlog;
