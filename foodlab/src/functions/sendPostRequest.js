import axios from 'axios';

export function sendPostRequest(link, dataSent, func) {
  axios
    .get(link, dataSent)
    .then(response => func(response))
    .catch(() => alert('Server error, try again'));
}