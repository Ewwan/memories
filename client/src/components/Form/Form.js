import React from 'react'; // , { useState, useEffect }
// import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import { useDispatch, useSelector } from "react/redux";
// import FileBase from "react-file-base64";

import useStyles from './formStyles';
// import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  // const [postData, setPostData] = useState({
  //   creator: "",
  //   title: "",
  //   message: "",
  //   tags: "",
  //   selectedFile: "",
  // });
  // const post = useSelector((state) =>
  //   currentId ? state.posts.find((message) => message._id === currentId) : null
  // );

  return <h1>FORM</h1>;
};

export default Form;
