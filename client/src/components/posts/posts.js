import React from "react";
import Post from "./post/post";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({setCurrentId}) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  //console.log(posts);
  return  (

    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {(!posts.length ? 
      Array.from(new Array(4))
      : posts).map((post, index) => (
        <Grid item key={index} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>)
  
};

export default Posts;
