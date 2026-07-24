import React from 'react';
import ResourceCard from './ResourceCard';

const ResourceList = ({ resources, onDelete }) => {
  if (!resources || resources.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-title">No resources saved</p>
        <p className="empty-subtitle">Add a learning resource above.</p>
      </div>
    );
  }

  return (
    <div className="resource-grid">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ResourceList;
