import { useState } from "react"
//import { useBlogContext } from "../hooks/useBlogContext";

const BlogForm = () => {
    //const {dispatch} = useBlogContext;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [ author, setAuthor] = useState('');
    const [ error, setError] = useState(null);
    const [emptyFeilds, setemptyFeilds] = useState([])

    const handleSubmit = async (e) => {
//prevents refresh which is after the form is submitted
        e.preventDefault()
        //dummy blog obj for req
        const blog = {title,description,body,author}
//fetch api to send post req
        const response = await fetch('/api/blogapi/blog' , 
        {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })  

        const json = await response.json() // we are storing the json we get back after post .. see controller
        if(!response.ok){
            setError(json.error) // error prop from controller
            setemptyFeilds(json.emptyFeilds)
        }
        //if resp ok the set error to null if there was one n print
        if(response.ok){
        //reseting the values so that after submit we will not have to delete/clear data to fill form again
            setTitle('')
            setDescription('')
            setBody('')
            setAuthor('')
            setError(null)
            setemptyFeilds([])
            console.log("New Blog Added!!!",json)
            //dispatch({type:'CREATE_BLOG', payload: json })
        }

    }

    

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Blog</h3>
            <label>Title for New Blog:</label>
            <input type = "text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFeilds.includes('title') ? 'error' : ''}/>

            <label>Add Description for New Blog:</label>
            <input type = "text" onChange={(e) => setDescription(e.target.value)} value={description} className={emptyFeilds.includes('description') ? 'error' : ''}  />

            <label>Body for New Blog:</label>
            <input type = "text" onChange={(e) => setBody(e.target.value)} value={body} className={emptyFeilds.includes('body') ? 'error' : ''}/>

            <label>Add Author Name:</label>
            <input type = "text" onChange={(e) => setAuthor(e.target.value)} value={author} className={emptyFeilds.includes('author') ? 'error' : ''}/>

            <button>Post Blog</button>
            {error && <div className="error">{error}</div>} 
             
        </form>
    )


        
}

export default BlogForm;