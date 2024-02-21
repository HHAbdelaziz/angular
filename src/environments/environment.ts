import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'PAS',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44356/',
    redirectUri: baseUrl,
    clientId: 'PAS_App',
    responseType: 'code',
    scope: 'offline_access PAS',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44356',
      rootNamespace: 'PAS',
    },
  },
} as Environment;
