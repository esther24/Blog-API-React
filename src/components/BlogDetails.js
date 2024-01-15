import {formatDistanceToNow} from 'date-fns/formatDistanceToNow'

const BlogDetails = ({blog}) => {
    const handleClick = async() => {
        const response = await fetch('/api/blogapi/blogs/' + blog._id ,
        {
            method: "DELETE"
        })
        const json = await response.json()

        if(response.ok){
            
            console.log("Blog Deleted!!!",json)
        }
    }


    return(
        <div className="blog-details">
            <h4>{blog.title}</h4>
            <p><strong>Description: </strong>{blog.description}</p>
            <hr></hr>
            <br></br>
            <p><strong></strong>{blog.body}</p>
            <br></br>
            <hr></hr>
            <br></br>
            <p><strong>Author: </strong>{blog.author}</p>
            <br></br>
            <p>{formatDistanceToNow(new Date (blog.createdAt), {addSuffix:true})}</p>
            <span className= " material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>

    )
}

export default BlogDetails;