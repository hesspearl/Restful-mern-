export const CREATE= "CREATE"
export const UPDATE= "UPDATE"
export const FETCH_ALL= "FETCH_ALL"
export const DELETE= "DELETE"
export const LIKE= "LIKE"
import * as api from "../../api"


export const getPosts=()=> async(dispatch)=>{

    try{
        const {data}= await api.fetchPosts()

        dispatch({type:FETCH_ALL, payload:data})
    }catch(err){

    }
}

export const createPosts=(post)=> async(dispatch)=>{
    
    try{
        const {data}= await api.createPosts(post)
  
      
        dispatch({type:CREATE, payload:data})
    }catch(err){
console.log(err)
    }
}



export const updatePost=(currentId, post)=> async(dispatch)=>{

    try{
        const {data}= await api.updatePost(currentId, post)

        dispatch({type:UPDATE, payload:data })
    }catch(err){

    }
}

export const deletePost=(id)=> async(dispatch)=>{

    try{
        await api.updatePost(id)

        dispatch({type:DELETE, payload:id })
    }catch(err){

    }
}

export const likePost=(id)=> async(dispatch)=>{

    try{
        const {data}= await api.updateLike(id)
        
        dispatch({type:LIKE, payload:data })
    }catch(err){

    }
}