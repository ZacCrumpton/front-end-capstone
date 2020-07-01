import listData from './listData';
import animeData from './animeData';
import animeListData from './animeListData';

const getCompleteLists = (uid) => new Promise((resolve, reject) => {
  listData.getListsByUid(uid)
    .then((lists) => {
      animeData.getAnimeByUid(uid)
        .then((anime) => {
          animeListData.getAllAnimeLists()
            .then((animeList) => {
              const finalLists = [];
              lists.forEach((list) => {
                const newList = { ...list };
                newList.anime = [];
                const selectedAnimeList = animeList.filter((x) => x.listId === list.id);
                selectedAnimeList.forEach((a) => {
                  const selectedAnime = anime.find((x) => x.id === a.animeId);
                  newList.anime.push(selectedAnime);
                });
                finalLists.push(newList);
              });
              resolve(finalLists);
            });
        });
    })
    .catch((err) => reject(err));
});

export default { getCompleteLists };
