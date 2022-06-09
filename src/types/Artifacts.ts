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
