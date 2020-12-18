import * as api from "../../api"


export const getPosts=()=> async(dispatch)=>{

    try{
        const {data}= await api.fetchPosts()

        dispatch({type:'FETCH_ALL', payload:data})
    }catch(err){

    }
}

export const createPosts=(post)=> async(dispatch)=>{
    
    try{
        const {data}= await api.createPosts(post)
  
      
        dispatch({type:'CREATE', payload:data})
    }catch(err){
console.log(err)
    }
}



export const updatePost=(currentId, post)=> async(dispatch)=>{

    try{
        const {data}= await api.updatePost(currentId, post)

        dispatch({type:'UPDATE', payload:data })
    }catch(err){

    }
}