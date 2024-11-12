export default {
  get: async (endpoint, path, params) => {
    let url = path ? `${endpoint}/${path}` : endpoint;
    const queryString = new URLSearchParams(params).toString();
    url = queryString ? `${url}?${queryString}` : url;

    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (resp.ok) {
      return resp.json();
    } else {
      return false;
    }
  }
};

