import { useState, useEffect } from 'react';

/**
 * Custom Hook: useLocalStorage
 * Responsibilities: Save data, Read data, Remove data from window.localStorage
 */
export const useLocalStorage = (key, initialValue) => {
  // Read initial data from localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Save data to localStorage whenever key or storedValue changes
  useEffect(() => {
    try {
      if (storedValue === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  // Remove data helper
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(undefined);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setStoredValue, removeValue];
};

export default useLocalStorage;
