import React from "react";
import FeaturedPost from "../../components/featured-post";
import Post from "../../components/post";
import Postwo from "../../components/postwo";

export default function Home () {
    return (
        <div>
           <FeaturedPost/>
           <Post/>
           <Postwo/>
        </div>
    );
}



