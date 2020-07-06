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

const postAnime = (newAnime) => axios.post(`${baseUrl}/anime.json`, newAnime);

const deleteAnime = (animeId) => axios.delete(`${baseUrl}/anime/${animeId}.json`);

const putAnime = (animeId, updatedAnime) => axios.put(`${baseUrl}/anime/${animeId}.json`, updatedAnime);

export default {
  getAnimeByUid,
  getSingleAnime,
  postAnime,
  deleteAnime,
  putAnime,
};
