/*
  # Author : Watchara Pongsri
  # [github/X-c0d3] https://github.com/X-c0d3/
  # Web Site: https://www.rockdevper.com
*/

import axios from 'axios';
import { AppConfig } from '../constants/Constants';

const AUTH_HEADER = {
  timeout: 7000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/vnd.github.v3+json',
  },
  auth: {
    username: `${AppConfig.USER_NAME}`,
    password: `${AppConfig.GITHUB_TOKEN}`,
  },
};

const cleanupArtifacts = async (projectName: string, skipExpired = true) => {
  let hasNextPage = false;
  const maxPerPage = 100;
  let currentPage = 1;

  const data: any[] = [];
  do {
    var response: any = await axios
      .get(
        `${AppConfig.API_URL}/repos/${AppConfig.USER_NAME}/${projectName}/actions/artifacts?per_page=${maxPerPage}&page=${currentPage}`,
        AUTH_HEADER
      )
      .catch((err) => console.error('api error:', err.response.data));

    if (response) {
      hasNextPage = response?.data.total_count / maxPerPage > currentPage;
      for (const artifact of response.data.artifacts) {
        data.push(artifact);
      }
    } else {
      hasNextPage = false;
    }

    currentPage++;
  } while (hasNextPage);

  console.log(`Total artifacts: ${data.length} - ${projectName}`);
  await removeArtifacts(projectName, data, skipExpired);
};

const removeArtifacts = async (projectName: string, deletedArtifacts: any[], skipExpired: boolean = true) => {
  for await (const artifact of deletedArtifacts) {
    if (!artifact.expired && skipExpired) {
      console.log(`Skip => ${artifact.name}`);
      continue;
    }
    console.log(`delted: => ${artifact.name} | expired: ${artifact.expired}, created_at: ${artifact.created_at}`);
    await axios
      .delete(`${AppConfig.API_URL}/repos/${AppConfig.USER_NAME}/${projectName}/actions/artifacts/${artifact.id}`, AUTH_HEADER)
      .catch((err) => console.log(err));
  }
};

export { cleanupArtifacts };
