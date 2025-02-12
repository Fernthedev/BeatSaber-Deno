import * as bsmap from 'https://deno.land/x/bsmap@1.3.3/mod.ts';

// YOUR BEAT SABER MAP PATH
bsmap.globals.directory =
    'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/YOUR_MAP_FOLDER/';

const info = bsmap.load.infoSync();
// for beatmap v2, use difficultySync('beatmap.dat', 2)
const difficulty = bsmap.load.difficultySync('ExpertPlusStandard.dat', 3);

bsmap.save.infoSync(info);
bsmap.save.difficultySync(difficulty);
