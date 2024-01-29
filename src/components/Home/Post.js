// Post.js
import React, { useState, useEffect, useRef } from 'react';

const Post = () => {
  const [newPost, setNewPost] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  // Reaction state
  const [reactions, setReactions] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedReaction, setSelectedReaction] = useState(null);

  // Comment state
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHoverIndex(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (editingPost !== null) {
      // Edit existing post
      const updatedPosts = [...posts];
      updatedPosts[editingPost] = {
        text: newPost,
        image,
        reactions: reactions[editingPost] || { like: 0, dislike: 0, happy: 0, sad: 0 },
        comments: comments[editingPost] || [],
      };
      setPosts(updatedPosts);
      setEditingPost(null);
    } else {
      // Add new post
      setPosts([
        ...posts,
        {
          text: newPost,
          image,
          reactions: { like: 0, dislike: 0, happy: 0, sad: 0 },
          comments: [],
        },
      ]);
      setReactions([...reactions, { like: 0, dislike: 0, happy: 0, sad: 0 }]);
      setComments([...comments, []]);
    }

    setNewPost('');
    setImage(null);
  };

  const handleEditPost = (index) => {
    const post = posts[index];
    setNewPost(post.text);
    setImage(post.image);
    setEditingPost(index);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);

    const updatedReactions = [...reactions];
    updatedReactions.splice(index, 1);
    setReactions(updatedReactions);

    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleReact = (index, type) => {
    const updatedReactions = [...reactions];
    updatedReactions[index][type]++;
    setReactions(updatedReactions);
    setHoverIndex(null);
    setSelectedReaction(type);
  };

  const handleHover = (index) => {
    setHoverIndex(index);
    setSelectedReaction(null);
  };

  const handleClickReaction = () => {
    setHoverIndex(null);
    if (selectedReaction !== null) {
      // Perform action based on the selected reaction (e.g., update the state, API call, etc.)
      console.log(`Selected Reaction: ${selectedReaction}`);
    }
  };

  const handleCommentSubmit = (index) => {
    const updatedComments = [...comments];
    updatedComments[index] = [...comments[index], newComment];
    setComments(updatedComments);
    setNewComment('');
  };

  return (
    <div>
      <form onSubmit={handlePostSubmit} style={{ backgroundColor: 'whitesmoke', padding: '20px' }}>
        <textarea
          rows="4"
          cols="50"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={handlePostChange}
        />
        <br />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="Selected" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        <br />
        <button type="submit">{editingPost !== null ? 'Edit Post' : 'Add Post'}</button>
      </form>

      <div style={{ backgroundColor: '#DCDCDC', padding: '20px' }} className="my-3">
        {posts.map((post, index) => (
          <div key={index} style={{ marginBottom: '40px' }}>
            <p>{post.text}</p>
            {post.image && (
              <img src={post.image} alt="Posted" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            )}
            <div>
              <div ref={dropdownRef}>
                <button
                  className={hoverIndex === index ? 'active' : ''}
                  onMouseEnter={() => handleHover(index)}
                  onClick={handleClickReaction}
                >
                  {selectedReaction !== null ? selectedReaction : `Reaction (${post.reactions.like})`}
                </button>
                {hoverIndex === index && (
                  <div>
                    <button onClick={() => handleReact(index, 'love')}>Love</button>
                    <button onClick={() => handleReact(index, 'sad')}>Sad</button>
                    <button onClick={() => handleReact(index, 'angry')}>Angry</button>
                    <button onClick={() => handleReact(index, 'shock')}>Shock</button>
                  </div>
                )}
              </div>
            </div>
            <div>
              <button onClick={() => handleEditPost(index)}>Edit</button>
              <button onClick={() => handleDeletePost(index)}>Delete</button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={handleCommentChange}
              />
              <button onClick={() => handleCommentSubmit(index)}>Comment</button>
              <ul>
                {comments[index] &&
                  comments[index].map((comment, commentIndex) => (
                    <li key={commentIndex}>{comment}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
