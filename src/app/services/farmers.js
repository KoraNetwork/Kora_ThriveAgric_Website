import http from './http'
import apiUrl from './apiUrl'

export function get(filters = {}) {
  let url = `${apiUrl}/users?`;

  for (let key in filters) {
    if(filters[key]) url += `${key}=${filters[key]}&`
  }

  return http.get({ url })
}

export function upsert(data = {}) {
  let url = `${apiUrl}/users`;
  const body = new FormData();
  let method = 'post';

  body.append('role', 'farmer');
  body.append('emailAddress', data.emailAddress);
  body.append('firstName', data.firstName);
  body.append('lastName', data.lastName);
  body.append('phoneNumber', data.phoneNumber);
  body.append('phoneStatus', data.phoneStatus);

  if (data.password) body.append('password','secret');

  if (data.id) {
    url += `/${data.id}`;
    method = 'put'
  }

  return http[method]({ url, body })
}

export function getOne(id) {
  let url = `${apiUrl}/users/${id}`;

  return http.get({ url })
}
