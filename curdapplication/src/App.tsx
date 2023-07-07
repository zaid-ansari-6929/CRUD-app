import { useState } from 'react'
import AddPost from './components/AddPost'
import ShowPost from './components/ShowPost'
import UpdatePost from './components/UpdatePost'

interface Post {
  title: string;
  body: string;
}

function App() {
  const [Post, setPost] = useState<Post[]>([]);
  const [mode, setMode] = useState<boolean>(false);
  const [editPost, setEditPost] = useState<any>();
  const [postIndex, setIPostndex] = useState<number>() as any;

  function setPostValue(post: any): void {
    setPost([
      ...Post,
      post
    ])
  }

  function deletePost(index: number): any {

    // first method
    // let updatedPosts = [...Post];
    // updatedPosts.splice(index, 1);
    // setPost([...updatedPosts])


    // second method
    let filteredPost = Post.filter((_, postIndex: number) => postIndex !== index);
    setPost([...filteredPost]);
  }

  function editSinglePost(editIndex: number): any {
    setMode(true);
    setIPostndex(editIndex);
    setEditPost(Post[editIndex])
  }



  function updatePost(updatePost: Post): any {
    const updatedPosts = [...Post];
    // updatedPosts[postIndex] = {
    //   ...updatedPosts[postIndex],
    //   title: updatePost.title,
    //   body: updatePost.body,
    // };

    updatedPosts[postIndex].title = updatePost.title
    updatedPosts[postIndex].body = updatePost.body

    setPost([...updatedPosts]);
    setMode(false);
  }



  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-md-6 mt-5 border border-dark p-5">
            {
              mode ? <UpdatePost post={editPost} setPostValue={updatePost} /> : <AddPost setPostValue={setPostValue} />

            }
          </div>
          <div className="col-md-6 mt-5">
            <ShowPost posts={Post} deletePost={deletePost} updatePost={editSinglePost} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
