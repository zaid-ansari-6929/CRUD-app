import React from 'react';

interface Post {
  title: string;
  body: string;
}

interface ShowPostProps {
  posts: Post[];
  deletePost:(index:number)=>typeof index
  updatePost:(index:number)=>typeof index
}

const ShowPost: React.FC<ShowPostProps> = ({ posts,deletePost,updatePost }) => {
    const handleDelete = (id: number) => {
        // TODO: Implement delete functionality
        console.log(`Deleting post with id: ${id}`);
        deletePost(id);
    };
    
      const handleUpdate = (id: number) => {
        // TODO: Implement update functionality
        updatePost(id);
      };
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleUpdate(index)}
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
