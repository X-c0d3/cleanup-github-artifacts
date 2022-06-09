/*
  # Author : Watchara Pongsri
  # [github/X-c0d3] https://github.com/X-c0d3/
  # Web Site: https://www.rockdevper.com
*/

import { cleanupArtifacts } from './util/Githubs';

const runTask = async () => {
  try {
    const projects = ['SolarPower', 'EasyOrderMan'];

    for await (const proj of projects) {
      await cleanupArtifacts(proj);
    }

    console.log('****** The artifacts sucessfully ******');
  } catch (error: any) {
    console.log('Error:' + error.message);
  }
};

runTask();
