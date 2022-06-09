// artifacts: [
//   {
//     id: 254379262,
//     node_id: 'MDg6QXJ0aWZhY3QyNTQzNzkyNjI=',
//     name: 'solar-monitoring-2.0.30',
//     size_in_bytes: 9246270,
//     url: 'https://api.github.com/repos/X-c0d3/SolarPower/actions/artifacts/254379262',
//     archive_download_url: 'https://api.github.com/repos/X-c0d3/SolarPower/actions/artifacts/254379262/zip',
//     expired: false,
//     created_at: '2022-05-28T13:49:53Z',
//     updated_at: '2022-05-28T13:49:54Z',
//     expires_at: '2022-06-27T13:49:17Z',
//     workflow_run: [Object]
//   }
// ]

export type Artifact = {
  id: number;
  node_id: string;
  name: string;
  size_in_bytes: number;
  url: string;
  archive_download_url: string;
  expired: boolean;
  created_at: Date;
  updated_at: Date;
  expires_at: Date;
  workflow_run: any;
};

interface GitHubAction {
  code: number;
  data: {
    artifacts: [Artifact];
    total_count: number;
  };
  message: string;
}

export { GitHubAction };
