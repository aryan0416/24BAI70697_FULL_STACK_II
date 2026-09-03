import React, { useState } from 'react';
import ResourceCard from './ResourceCard';

function ResourceList({ resources, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  let displayed = resources.filter(r => r.title.includes(searchTerm));
  if (filterCategory) {
    displayed = displayed.filter(r => r.category === filterCategory);
  }

  return (
    <div>
      <h4>Resources</h4>
      <input placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
      <input placeholder="Filter Category..." onChange={e => setFilterCategory(e.target.value)} />
      <div>
        {displayed.map(res => (
          <ResourceCard key={res.id} resource={res} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default ResourceList;
