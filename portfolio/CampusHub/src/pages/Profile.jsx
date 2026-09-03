import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useFetch } from '../hooks/useFetch';

function ProfilePage() {
  const [user] = useLocalStorage('user', { name: '', email: '' });
  const { data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2>Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>

      <h3>Recent Posts</h3>
      <ul>
        {posts && posts.slice(0, 10).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;
