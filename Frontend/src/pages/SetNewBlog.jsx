import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Img,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 } from "uuid";
import { storage } from "../firebase/Firebase";
import { Context, server } from "../main";
import imageCompression from 'browser-image-compression'
import { Navigate } from "react-router-dom";

const SetNewBlog = () => {
  const [flare, setFlare] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [blog, setBlog] = useState("");
  const { loading, setLoading, isAuthenticated , user } = useContext(Context);

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
      ["link"],
      ["clean"],
    ],
  };

  const categoryOption = [
    "Wev Development",
    "App Development",
    "C++",
    "JavaScript",
    "Python",
    "AI",
    "Other",
  ];

  const uploadImage = async (e) => {
    const imageFile = e.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);

      const imageRef = ref(storage, `Flares/${compressedFile.name + v4()}`);
      uploadBytes(imageRef, compressedFile).then(() => {
        toast.success("image Upload");
        getDownloadURL(imageRef).then((url) => {
          setFlare(url);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const author = {
      authorId: user._id,
      name: user.name,
      profileImg: user.profileImg,
    };

    try {
      const data = await axios.post(
        `${server}/blog/new`,
        {
          flare,
          title,
          blog,
          description,
          category,
          author,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.data.message);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={`/`} />;
  }

  return (
    <>
      <Box m={10} ml={0} minH={"100vh"}>
        <form onSubmit={handleSubmit}>
          <FormControl py={4}>
            <FormLabel>Flare</FormLabel>
            <Input
              border={"none"}
              type="file"
              accept="image/*"
              onChange={uploadImage}
            />
            <Box py={4}>
              {flare && (
                <Img
                  src={flare}
                  alt="blog img"
                  fit={"cover"}
                  rounded={"md"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              )}
            </Box>
          </FormControl>

          <FormControl py={4}>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              border={"1px black solid"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="write title"
            />
          </FormControl>

          <FormControl py={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              border="1px black solid"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="descripe your blog"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder="Select category"
              onChange={(e) => setCategory(e.target.value)}
              border={"1px black solid"}
            >
              {categoryOption.map((option) => {
                return (
                  <>
                    <option value={option}>{option}</option>
                  </>
                );
              })}
            </Select>
          </FormControl>

          <FormControl py={4}>
            <FormLabel>Blog</FormLabel>
            <ReactQuill
              theme="snow"
              className={"text-editor"}
              modules={modules}
              value={blog}
              onChange={setBlog}
            />
          </FormControl>

          <FormControl py={4}>
            <Button
              type="submit"
              border={"1px black solid"}
              isLoading={loading}
              loadingText="Publishing"
              w={"full"}
              bg={"white"}
            >
              Publish Blog
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default SetNewBlog;
