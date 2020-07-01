import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getAnimeByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/anime.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbAnime = response.data;
      const anime = [];
      if (fbAnime) {
        Object.keys(fbAnime).forEach((fbId) => {
          fbAnime[fbId].id = fbId;
          anime.push(fbAnime[fbId]);
        });
      }
      resolve(anime);
    })
    .catch((err) => reject(err));
});

const getSingleAnime = (animeId) => axios.get(`${baseUrl}/anime/${animeId}.json`);

export default { getAnimeByUid, getSingleAnime };
