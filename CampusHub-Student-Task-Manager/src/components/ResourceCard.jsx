import React from 'react';

const ResourceCard = ({ resource, onDelete }) => {
  return (
    <div className="resource-card">
      <div className="resource-header">
        <h3 className="resource-title">{resource.title}</h3>
        <span className="category-badge">{resource.category || 'General'}</span>
      </div>

      <div className="resource-url-wrapper">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-url"
        >
          {resource.url}
        </a>
      </div>

      <div className="resource-actions">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-action btn-visit"
        >
          Open Link
        </a>
        <button
          onClick={() => onDelete(resource.id)}
          className="btn-action btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
