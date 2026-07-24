import React, { useState, useMemo } from 'react';
import ResourceList from '../components/ResourceList';
import useFetch from '../hooks/useFetch';

const ResourcesPage = ({ resources, onAddResource, onDeleteResource }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Documentation',
    url: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const { data: externalPosts, loading: fetchLoading, error: fetchError } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.url.trim()) return;

    let formattedUrl = formData.url.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    onAddResource({
      title: formData.title,
      category: formData.category,
      url: formattedUrl
    });

    setFormData({
      title: '',
      category: 'Documentation',
      url: ''
    });
    setShowAddForm(false);
  };

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === 'all' ||
        resource.category.toLowerCase() === categoryFilter.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [resources, searchQuery, categoryFilter]);

  const categories = useMemo(() => {
    const defaultCats = ['Documentation', 'Video', 'Article', 'Tools', 'Course'];
    const customCats = resources.map((r) => r.category).filter(Boolean);
    return Array.from(new Set([...defaultCats, ...customCats]));
  }, [resources]);

  return (
    <div className="page-container resources-page">
      <div className="page-header">
        <div>
          <h2>Resource Library</h2>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary"
        >
          {showAddForm ? 'Cancel' : 'Add Resource'}
        </button>
      </div>

      {showAddForm && (
        <div className="form-card">
          <h3>Add New Resource</h3>
          <form onSubmit={handleFormSubmit} className="resource-form">
            <div className="form-group">
              <label htmlFor="resource-title">Title *</label>
              <input
                type="text"
                id="resource-title"
                name="title"
                required
                placeholder="Resource title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="resource-category">Category</label>
                <select
                  id="resource-category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="resource-url">URL *</label>
                <input
                  type="text"
                  id="resource-url"
                  name="url"
                  required
                  placeholder="https://example.com"
                  value={formData.url}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Save Resource
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="controls-card">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <div className="control-item">
            <label>Category:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h3>Bookmarked Resources ({filteredResources.length})</h3>
        <ResourceList
          resources={filteredResources}
          onDelete={onDeleteResource}
        />
      </div>

      <div className="section-block fetch-posts-section">
        <div className="section-header-badge">
          <h3>External Posts (Fetched via useFetch)</h3>
        </div>
        <p className="section-subtitle">
          Displaying first 10 posts from API (https://jsonplaceholder.typicode.com/posts)
        </p>

        {fetchLoading && (
          <div className="loading-state">
            <p>Loading posts...</p>
          </div>
        )}

        {fetchError && (
          <div className="error-state">
            <p>Error fetching posts: {fetchError}</p>
          </div>
        )}

        {!fetchLoading && !fetchError && externalPosts && (
          <div className="posts-grid">
            {externalPosts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-id">Post #{post.id}</div>
                <h4 className="post-title">{post.title}</h4>
                <p className="post-body">{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
