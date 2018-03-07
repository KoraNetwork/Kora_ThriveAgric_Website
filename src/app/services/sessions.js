import http from './http';
import apiURL from './apiUrl';

export function login(payload) {
  const url = `${apiURL}/entrance/login`;
  const body = JSON.stringify({
    emailAddress: payload.emailAddress,
    password: payload.password
  });

  return http.post({ url, body })
}
