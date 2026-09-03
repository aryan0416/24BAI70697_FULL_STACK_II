// Service helper for external API operations

export const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Return the first 10 posts as specified
    return data.slice(0, 10);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
