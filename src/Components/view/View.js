import React, { useContext, useEffect, useState } from "react";
import { PostContext, useAppContext } from "../../contextStore/PostContext";
import { useHistory } from "react-router";

function View() {
 const {postContent}=useAppContext();
 console.log(postContent);
    return (
    <div>
      {postContent.name}<br/>
      {postContent.link}<br/>
      {postContent.image}<br/>


    </div>
  )
}

export default View
