import { useEffect, useState } from "react";
import BlogDetails from "../components/BlogDetails"
import BlogForm from "../components/BlogForm"
//import { useBlogContext } from "../hooks/useBlogContext";


const Home = () =>{
    const [blogs,setBlogs] = useState(null) //initially state null if resp ok then we update blogs with setblogs
    //const {blogs, disptach} = useBlogContext()

    useEffect (() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogapi/allblogs') //fetches data and stores it in resp obj
            const json = await response.json() //storing json from responsse obj 
            
            if(response.ok){
                
                setBlogs(json) //updating blogs with setblogs with array of blogs in json resp
                //disptach({type: 'SET_BLOGS' , payload: json})
            }
        }
        fetchBlogs()

        const intervalId = setInterval(() => {
            fetchBlogs(); // Fetch data every 600 ms
          }, 600);

        return () => clearInterval(intervalId);


    }, []);

    return (
        <div className="home">
            <div className="blogs">
                {blogs && blogs.map((blog) => (
                    <BlogDetails key={blog._id} blog = {blog}/>
                ))}
            </div>
            <BlogForm/>
        </div>
    )
}


export default Home;