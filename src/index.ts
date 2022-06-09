/*
  # Author : Watchara Pongsri
  # [github/X-c0d3] https://github.com/X-c0d3/
  # Web Site: https://www.rockdevper.com
*/

import * as dotenv from 'dotenv';
dotenv.config();

import { AppConfig } from './constants/Constants';
import { getAllArtifacts } from './util/Githubs';

const runTask = async () => {
  try {
    const projects = ['X-c0d3/EasyOrderMan'];

    var artifacts = await getAllArtifacts(projects);
    console.log(artifacts);
  } catch (error: any) {
    console.log('Error:' + error.message);
  }
};

runTask();
