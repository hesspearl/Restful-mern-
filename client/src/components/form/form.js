import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./style";
import {useDispatch, useSelector} from "react-redux"
import {createPosts , updatePost} from "../../store/action/posts"

const Form = (props) => {
  const{ currentId , setCurrentId }=props
  const post = useSelector(state => currentId ? state.posts.find((p)=> p._id===currentId):null)
  const classes = useStyles();
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFiles: "",
  });

  useEffect(() => {
    if(post)setPostData(post)
  }, [post])

  const handleSubmit = (e) => {
      e.preventDefault()
    
      if(currentId){
      dispatch(updatePost(currentId ,postData))

      }else{
          dispatch(createPosts(postData))
      }
    
      clear()
  };

  const clear=()=>{
    setCurrentId(null)
    setPostData({  creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFiles: "",
  })
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId? 'Editing':' Creating'} a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(text) => {
            setPostData({ ...postData, creator: text.target.value });
          }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(text) => {
            setPostData({ ...postData, title: text.target.value });
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(text) => {
            setPostData({ ...postData, message: text.target.value });
          }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(text) => {
            setPostData({ ...postData, tags: text.target.value.split(',') });
          }}
        />
         <div className={classes.fileInput}>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFiles: base64 })
          }
        />
      </div>

      <Button
        className={classes.buttonSubmit}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
      >
        Submit
      </Button>
      <Button
       
        variant="contained"
        color="secondary"
        size="small"
        onClick={clear}
        fullWidth
      >
       Clear
      </Button>
      </form>
     
    </Paper>
  );
};

export default Form;
