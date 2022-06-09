/*
  # Author : Watchara Pongsri
  # [github/X-c0d3] https://github.com/X-c0d3/
  # Web Site: https://www.rockdevper.com
*/

import axios from 'axios';
import { AppConfig } from '../constants/Constants';

// httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
// httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("token", GithubToken);
// httpClient.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", "ArtifactsCleaner/1.0");
// httpClient.BaseAddress = new Uri("https://api.github.com");

const getAllArtifacts = async (projectsX: any) => {
  // Get all project's artifacts
  // var artifacts = new List<Artifact>();
  // var pageIndex = 1;
  // var pageSize = 100;
  // Artifacts page;
  // do
  // {
  //     var url = $"/repos/{project}/actions/artifacts?per_page={pageSize}&page={pageIndex}";
  //     page = await httpClient.GetFromJsonAsync<Artifacts>(url);
  //     artifacts.AddRange(page.Items);
  //     pageIndex++;
  // } while (page.Items.Length >= pageSize);

  const project = 'X-c0d3/rabbitmq-python-tls';
  var pageIndex = 1;
  var pageSize = 100;

  return await axios({
    method: 'get',
    url: `${AppConfig.API_URL}/repos/${project}/actions/artifacts?per_page=${pageSize}&page=${pageIndex}`,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/vnd.github.v3+json',
      Authorization: `${AppConfig.GITHUB_TOKEN}`,
    },
  })
    .then((res) => {
      console.log('XX: ', res);
    })
    .catch((err) => console.log(err));
};

const removeArtifacts = async (message: String) => {
  // Delete artifacts older than 1 day
  //  foreach (var item in artifacts)
  //  {
  //      if (!item.Expired && item.CreatedAt < DateTime.UtcNow.AddDays(-1))
  //      {
  //          var deleteUrl = $"repos/{project}/actions/artifacts/{item.Id}";
  //          try
  //          {
  //              Console.WriteLine(deleteUrl);
  //              await httpClient.DeleteAsync(deleteUrl);
  //          }
  //          catch (Exception ex)
  //          {
  //              Console.WriteLine(ex);
  //          }
  //      }
  //  }
};

export { getAllArtifacts, removeArtifacts };
