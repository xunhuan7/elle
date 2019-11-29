const fetch =  require('dva').fetch;

export function get({ page = 1 }) {
  return fetch(`/api/users?_page=${page}&_limit=7`);
}

export function remove(id) {
  return fetch(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return fetch(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
