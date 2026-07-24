// Utility functions for form validation

export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validatePassword = (password) => {
  if (!password) return false;
  return password.length >= 4;
};

export const validateLoginForm = ({ email, password }) => {
  const errors = {};
  
  if (!email || !email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!password) {
    errors.password = 'Password is required';
  } else if (!validatePassword(password)) {
    errors.password = 'Password must be at least 4 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
