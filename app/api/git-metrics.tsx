import { Octokit } from "octokit";
import { cache } from "react";

export const getStars = cache(async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const req = await octokit.request("GET /repos/hecker/elonreads.com");
  return req.data.stargazers_count;
});
