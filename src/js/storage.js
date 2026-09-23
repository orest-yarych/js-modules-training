export function loadFromLS(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error(`Помилка читання з localStorage ${err.message}`);
    return null;
  }
}

export function saveToLS(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Помилка запису в localStorage ${err.message}`);
  }
}

export function removeFromLS(key) {
  localStorage.removeItem(key);
}
