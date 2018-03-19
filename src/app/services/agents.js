import http from './http'
import apiUrl from './apiUrl'

export function get(filters = {}) {
  let url = `${apiUrl}/users?`;

  for (let key in filters) {
    url += `${key}=${filters[key]}&`
  }

  return http.get({ url })
}

export function upsert(data = {}) {
  let url = `${apiUrl}/users`;
  const body = new FormData();
  let method = 'post';

  body.append('role', 'agent');
  body.append('emailAddress', data.emailAddress);
  body.append('firstName', data.firstName);
  body.append('lastName', data.lastName);
  body.append('phoneNumber', data.phoneNumber);
  body.append('phoneStatus', data.phoneStatus);
  body.append('address', data.address);
  body.append('bankName', data.bankName);
  body.append('bankRoutingNumber', data.bankRoutingNumber);
  body.append('acountNumber', data.acountNumber);
  body.append('businessName', data.businessName);
  body.append('businessAddress', data.businessAddress);

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

export function destroy(id) {
  const url = `${apiUrl}/users/${id}`;

  return http.delete({ url })
}
