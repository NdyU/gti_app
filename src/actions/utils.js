const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN;

export const composeApiUrl = (path) => {

  path = path.trim();
  if(path.charAt(0) == '/') {
    path = path.substring(1);
  }
  return `${SERVER_DOMAIN}/api/${path}`;
}
