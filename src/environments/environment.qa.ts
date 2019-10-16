import { environment as defaultEnvironment } from './environment.defaults';
export const environment = {
  ...defaultEnvironment,
  production: true,
  environmentName: 'qa',
  apiUrl: 'QA url'
};