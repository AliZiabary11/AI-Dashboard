
export const environment = {
  production: true,
  apiUrl: `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}/`, //get origin without baseurl
};
