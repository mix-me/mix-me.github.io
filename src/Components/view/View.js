import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contextStore/PostContext";
import { Firebase } from "../../firebase/config";
import { useHistory } from "react-router";

function View() {
    let { postContent } = useContext(PostContext);//from the global store PostContext we can get information about desired product post that we want to show (the user is clicked item on the card)
  return (
    <div>
      
    </div>
  )
}

export default View
