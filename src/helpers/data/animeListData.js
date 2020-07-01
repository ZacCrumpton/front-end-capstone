import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getAllAnimeLists = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/animeList.json`)
    .then((response) => {
      const fbAnimeLists = response.data;
      const animeLists = [];
      if (fbAnimeLists) {
        Object.keys(fbAnimeLists).forEach((fbId) => {
          fbAnimeLists[fbId].id = fbId;
          animeLists.push(fbAnimeLists[fbId]);
        });
      }
      resolve(animeLists);
    })
    .catch((err) => reject(err));
});

export default { getAllAnimeLists };
