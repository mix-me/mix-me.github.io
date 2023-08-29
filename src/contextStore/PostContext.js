import React, { createContext,useContext,useState } from "react";


export const PostContext = createContext()

const ContextPost =({children})=>{
    const[postContent,setPostContent]=useState([])

    return (
        <PostContext.Provider value={{postContent,setPostContent}}>
            {children}
        </PostContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(PostContext);
  };    
export default ContextPost