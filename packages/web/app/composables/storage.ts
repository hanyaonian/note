export const useStorage = <T>(key: string) => {
  const getItem = () => {
    if (!import.meta.client) return null;
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  };

  const setItem = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    getItem,
    setItem,
  };
};
