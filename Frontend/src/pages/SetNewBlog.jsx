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
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 } from "uuid";
import { storage } from "../firebase/Firebase";
import { Context, server } from "../main";
import imageCompression from "browser-image-compression";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const SetNewBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, setLoading, isAuthenticated, user } = useContext(Context);
  const [blogData, setBlogData] = useState({
    flare: "",
    title: "",
    description: "",
    category: "",
    blog: "",
    author: {
      authorId: user._id,
      name: user.name,
      profileImg: user.profileImg,
    },
  });

  let name, value;
  const updateData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setBlogData({ ...blogData, [name]: value });
  };

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
    "Web Development",
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
          setBlogData({ ...blogData, flare: url });
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id !== "0") {
      try {
        axios
          .get(`${server}/blog/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            const blog = res.data.blog;
            setBlogData(blog);
            console.log({...blog});
            console.log(blogData);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (id === "0") {
        const data = await axios.post(
          `${server}/blog/new`,
          { ...blogData },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        toast.success(data.data.message);
        setLoading(false);
        navigate("/profile");
      } else {
        const data = await axios.put(
          `${server}/blog/${id}`,
          { ...blogData },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        toast.success(data.data.message);
        setLoading(false);
        navigate("/profile");
      }
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
      <Box m={10} mx={{base: 4, md: 0}} minH={"100vh"}>
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
              {blogData.flare && (
                <Img
                  src={blogData.flare}
                  alt="blog img"
                  fill={"cover"}
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
              value={blogData.title}
              onChange={updateData}
              name="title"
              placeholder="write title"
            />
          </FormControl>

          <FormControl py={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              border="1px black solid"
              value={blogData.description}
              name="description"
              onChange={updateData}
              placeholder="describe your blog"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder="Select category"
              onChange={updateData}
              name="category"
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
              value={blogData.blog}
              onChange={(value) => {
                setBlogData({ ...blogData, blog: value });
              }}
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
