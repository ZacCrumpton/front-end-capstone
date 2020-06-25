import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getListsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/list.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbLists = response.data;
      const lists = [];
      if (fbLists) {
        Object.keys(fbLists).forEach((fbId) => {
          fbLists[fbId].id = fbId;
          lists.push(fbLists[fbId]);
        });
      }
      resolve(lists);
    })
    .catch((err) => reject(err));
});

const getSingleList = (listId) => axios.get(`${baseUrl}/list/${listId}.json`);

const postList = (newList) => axios.post(`${baseUrl}/list.json`, newList);

export default { getListsByUid, getSingleList, postList };
