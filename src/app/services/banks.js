import http from './http'
import apiUrl from './apiUrl'

export function get(filters = {}) {
  let url = `${apiUrl}/banks?`;

  for (let key in filters) {
    url += `${key}=${filters[key]}&`
  }

  return http.get({ url })
}

export function upsert(data = {}) {
  let url = `${apiUrl}/banks`;
  const body = new FormData();
  let method = 'post';

  body.append('bankName', data.bankName);
  body.append('bankRoutingNumber', data.bankRoutingNumber);
  body.append('acountNumber', data.acountNumber);

  if (data.id) {
    url += `/${data.id}`;
    method = 'put'
  }

  return http[method]({ url, body })
}

export function getOne(id) {
  let url = `${apiUrl}/banks/${id}`;

  return http.get({ url })
}
