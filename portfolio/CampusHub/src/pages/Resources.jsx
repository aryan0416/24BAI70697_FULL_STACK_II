import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ResourceList from '../components/ResourceList';
import { useLocalStorage } from '../hooks/useLocalStorage';

function ResourcesPage() {
  const [resources, setResources] = useLocalStorage('resources', []);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    setResources([...resources, { id: Date.now(), title, category, url }]);
  };

  const handleDelete = (id) => {
    setResources(resources.filter(r => r.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2>Resource Library</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input placeholder="Category" onChange={e => setCategory(e.target.value)} />
        <input type="url" placeholder="URL" onChange={e => setUrl(e.target.value)} />
        <button type="submit">Add Resource</button>
      </form>
      <ResourceList resources={resources} onDelete={handleDelete} />
    </div>
  );
}

export default ResourcesPage;
