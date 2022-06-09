import * as dotenv from 'dotenv';
dotenv.config();

const AppConfig = {
  API_URL: process.env.API_URL,
  ENABLE_LINE_NOTIFY: process.env.ENABLE_LINE_NOTIFY,
  USER_NAME: process.env.USER_NAME,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
};

export { AppConfig };
