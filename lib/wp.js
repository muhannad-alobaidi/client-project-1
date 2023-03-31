import dayjs from "dayjs";

const API_URL = process?.env?.WP_API_URL ? process.env.WP_API_URL : '';

const fetchAPIRest = async (url, method = 'GET') => {
  const headers = {};
  const result = await fetch(API_URL + url, {
    method,
    headers
  });
  if (result.status !== 200) {
    // no dice
    return null;
  }
  const json = await result.json();
  if (json.errors) {
    // no dice
    return null;
  }
  return json;
};

const getPages = async () => {
  const data = await fetchAPIRest('/pages');
  return data;
};

const getPosts = async () => {
  const data = await fetchAPIRest('/posts');
  return data;
};

const getNavi = async () => {
  const data = await fetchAPIRest('/navi');
  return data;
};

const getDate = async () => {
  return dayjs().format('D.M.YYYY');
};

export {
  getPages,
  getPosts,
  getNavi,
  getDate,
};
