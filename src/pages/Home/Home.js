import { useEffect, useState } from "react";
import "./Home.scss";

function Home () {
    const [post, setPosts] = useState([])
    
            useEffect(() => {
                fetch("http://localhost:4000/posts",)
                .then(response => response.json())
                .then(data => setPosts(data))
            }, [])

          const [deletepost, setDeletePost] = useState([]) 
         const token = window.localStorage.getItem('token')
              const deletePosst = async()=> {
                  fetch("http://localhost:4000/delete", {
                      method: "POST",
                      body: JSON.stringify(token),
                  }).then(res => res.json())
                  .then(data => console.log(data))
              }
                return(
                    <>
                             {
                  post.length > 0 && <ul className="post-list">
                      {
                          post.map((element) => ( (
                             ( console.log(element)),
                                <li className="post-item" key={element.post_id}>
                                        <br></br>
                                        <img src={`http://localhost:4000/public/${element.post_img}` } height="100" with="100"/>
                                        <h3 className="video-photographer">{element.post_title}</h3>
                                        <p>{element.post_text}</p>
                                        <button onClick={deletePosst} >Delete post</button>
                                       <form action="http://localhost:4000/createpost" method="post">
                                       <input type="text" name="title" />
                                        <textarea name="text"></textarea>
                                        <button  type="submit">Comment</button>
                                       </form>
                                </li>

                              

                          )
                          ))
                      }
                  </ul>
              }
                    </>
                )
         
}

export default Home
