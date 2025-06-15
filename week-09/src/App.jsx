import React, { useState } from 'react';
import './App.css'
import { PostComponent } from './Post';

function App() {
  const [posts, setPosts] = useState([]);

  const PostComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />
  )

  function addPost() {
    setPosts([...posts, {
      name: "Vivek",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://imgs.search.brave.com/UrFiXdk4j3jnRsZHUcHTZN8Lp3qLQdHIgruTAaBSX2s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzIwLzM1LzU1/LzM2MF9GXzExMjAz/NTU1NzBfSXRXMkli/NVFQM1UzemNVVnRU/WlRicE1NS3lCdVdp/RGIuanBn",
      description: "Hi all i am here to learn react for my development journey"
    }])
  }

  return (
    <div style={{height: "100vh", background: "pink"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display: "flex-col", justifyContent: "center"}}>
        {PostComponents}
      </div>
    </div>
  )
}

// const ToggleMessage = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setIsVisible(!isVisible)}>
//                 Toggle Message
//             </button>
//             {isVisible && <p>This message is conditionally rendered!</p>}
//         </div>
//     );
// };

// const ToggleMessage = () => {
//     const [notificationCount, setNotificationCount] = useState(false);

//     function increment(){
//       setNotificationCount(notificationCount + 1);
//     }
//     return (
//         <div>
//             <button onClick={increment}>
//                 Toggle Message
//             </button>
//             {notificationCount}
//         </div>
//     );
// };


export default App
