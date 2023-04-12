import BlogList from "./BlogList";
import { useState } from "react";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs,isPending,error}=useFetch('https://jsonplaceholder.typicode.com/todos/1');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> } 
        </div>
     );
}
 
export default Home;