const apiEndpoint = 'http://localhost:8000/api';

export const register = async (email, username, password) => {
  const body = JSON.stringify({ email, username, password });
  const response = await fetch(apiEndpoint + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
    credentials: 'include',
  });

  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

export const login = async (email, password) => {
  const body = JSON.stringify({ email, password });
  const response = await fetch(apiEndpoint + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
    credentials: 'include',
  });

  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

export const logout = async () => {
  const response = await fetch(apiEndpoint + '/logout', {
    method: 'POST',
    credentials: 'include',
  });

  return await response.json();
};

export const verifyToken = async () => {
  const response = await fetch(apiEndpoint + '/verify', {
    credentials: 'include',
  });

  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

export const fetchTasks = async () => {
  const response = await fetch(apiEndpoint + '/tasks', {
    credentials: 'include',
  });
  return await response.json();
};

export const fetchTask = async (id) => {
  const response = await fetch(apiEndpoint + `/task/${id}`, {
    credentials: 'include',
  });
  return await response.json();
};

export const createTask = async (title, text, dueDate, postDate) => {
  const body = JSON.stringify({ title, text, dueDate, postDate });
  const response = await fetch(apiEndpoint + '/task', {
    method: 'POST',
    body: body,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

export const updateTask = async (id, title, text, dueDate, postDate) => {
  const body = JSON.stringify({ title, text, dueDate, postDate });
  const response = await fetch(apiEndpoint + `/task/${id}`, {
    method: 'PUT',
    body: body,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(apiEndpoint + `/task/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return await response.json();
};
