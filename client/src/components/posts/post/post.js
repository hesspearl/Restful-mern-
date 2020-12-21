import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import styles from "./style";
import {deletePost, likePost} from '../../../store/action/posts';
import {useDispatch} from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

const Post = ({post, setCurrentId}) => {
  
  const classes = styles();
  const dispatch = useDispatch();

  return (
    <>
      <Card className={classes.card} >
      {post? <CardMedia className={classes.media}  image={post.selectedFiles} title={post.title} />:
      <Skeleton variant="rect" width='100%' height={200} style={{ marginBottom: 10}}/> }
       {post? <div className={classes.overlay} >
           
          <Typography variant="h6"> {post.creator} </Typography>:
          <Skeleton /> 
           <Typography variant="body2"> {moment(post.createdAt).fromNow()} </Typography>
        </div>:<Skeleton width="60%"/>}
        <div className={classes.overlay2} >
            <Button  style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)} >
                <MoreHorizIcon fontSize="default" />
            </Button>
        </div>
        { post ?  <div className={classes.details} >
            <Typography variant="body2" color="textSecondary" >{post.tags.map(tag => `#${tag}`)}</Typography>
        </div>:<Skeleton width="50%" style={{ marginBottom: 10}}/>}
       { post ?
       <Box>
         <Typography className={classes.title} variant="h5" gutterBottom >{post.title}</Typography>
        <CardContent>
          <Typography variant="body2"  color="textSecondary" > {post.message} </Typography>
        </CardContent>
       </Box>
       :
       <Box>
          <Skeleton style={{ marginRight: 10}}/>
        <Skeleton style={{ marginRight: 10 , marginBottom:10}} />
       </Box>
       }
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))} >
              <ThumbUpAltIcon fontSize="small"/>&nbsp; Like &nbsp; {post?  post.likeCount:<Skeleton/>}
            </Button>
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
                <DeleteIcon fontSize="small"/> Delete
            </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
