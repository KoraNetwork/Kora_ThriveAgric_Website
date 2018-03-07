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

export function profile() {
  const url = `${apiURL}/account/profile`;

  return http.get({ url })
}

export function updateProfile(data) {
  const url = `${apiURL}/account/profile`;
  const body = new FormData();

  if(data.emailAddress) body.append('emailAddress', data.emailAddress);
  if(data.fullName) body.append('fullName', data.fullName);

  return http.put({ url, body })
}

export function updatePassword(pw, newPw) {
  const url = `${apiURL}/passwords/update`;
  const body = new FormData();

  body.append('currentPassword', pw);
  body.append('newPassword', newPw);

  return http.put({ url, body })
}
