import React from 'react';

function ResourceCard({ resource, onDelete }) {
  return (
    <div>
      <p>{resource.title} - {resource.category}</p>
      <a href={resource.url}>Link</a>
      <button onClick={() => onDelete(resource.id)}>Delete</button>
    </div>
  );
}

export default ResourceCard;
