const apiEndpoint = 'http://localhost:8000/api';

export const register = async (email, username, password) => {
  try {
    const body = JSON.stringify({ email, username, password });
    const response = await fetch(apiEndpoint + '/register', {
      method: 'POST',
      body: body,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const body = JSON.stringify({ email, password });
    const response = await fetch(apiEndpoint + '/login', {
      method: 'POST',
      body: body,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchTasks = async () => {
  try {
    const response = await fetch(apiEndpoint + '/tasks');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchTask = async (id) => {
  try {
    const response = await fetch(apiEndpoint + `/task/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (title, text, dueDate, postDate) => {
  try {
    const body = JSON.stringify({ title, text, dueDate, postDate });
    const response = await fetch(apiEndpoint + '/task', {
      method: 'POST',
      body: body,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (id, title, text, dueDate, postDate) => {
  try {
    const body = JSON.stringify({ title, text, dueDate, postDate });
    const response = await fetch(apiEndpoint + `/task/${id}`, {
      method: 'POST',
      body: body,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(apiEndpoint + `/task/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
