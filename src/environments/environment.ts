export const environment = {
  production: false,
  apiUrl: 'http://localhost:8084',
  tokenAllowedDomains: [  /localhost:8084/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/],
};
