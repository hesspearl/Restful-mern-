import axios from 'axios'

const url = 'https://mern--memories.herokuapp.com/posts'

export const fetchPosts =()=> axios.get(url)
export const createPosts =(newPost)=>axios.post(url, newPost)
export const updatePost=(id , updatedPost)=> axios.patch(`${url}/${id}`,updatedPost)
export const deletePost=(id )=> axios.delete(`${url}/${id}`)
export const updateLike=(id )=> axios.patch(`${url}/${id}/likePost`)
