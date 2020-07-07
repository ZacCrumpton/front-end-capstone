import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import imagePath from '../../../images/demonslayer.jpg';
import imagePath2 from '../../../images/towerofgod.jpg';
import imagePath3 from '../../../images/stardust.jpg';

import authData from '../../../helpers/data/authData';
import animeData from '../../../helpers/data/animeData';
import animeListData from '../../../helpers/data/animeListData';

import './Home.scss';

class Home extends React.Component {
  state = {
    anime: [],
    animeList: [],
  }

  getAnimes = () => {
    const uid = authData.getUid();
    animeData.getAnimeByUid(uid)
      .then((anime) => this.setState({ anime }))
      .catch((err) => console.error('unable to get animes: ', err));
  }

  getAnimeLists = () => {
    animeListData.getAllAnimeLists()
      .then((animeList) => this.setState({ animeList }))
      .catch((err) => console.error('unable to get animeLists: ', err));
  }

  componentDidMount() {
    this.getAnimes();
    this.getAnimeLists();
  }

  render() {
    return (
      <div className="Home">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src={imagePath}
              alt="Demon Slayer"
              SameSite="None"
            />
          <Carousel.Caption>
            <h1 className="imgCarTitle">Demon Slayer: Kimetsu no Yaiba</h1>
            <p className="imgCarDesc">"With its unique character designs, fluid action sequences, and gorgeous landscapes, weaving a tapestry of eye-gasmic beauty! While Demon Slayer is full of well executed plot points."</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src={imagePath2}
              alt="Third slide"
            />

          <Carousel.Caption>
            <h1 className="imgCarTitle">Tower of God</h1>
            <p className="imgCarDesc">"..the series has many redeeming elements. ToG takes a shonen trope and magnifies it in a way thats entertaining. Combined with a big cast of unique characters with ideological struggles that nod to a bigger picture, Tower of God has a lot going for it."</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src={imagePath3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="imgCarTitle">JoJo's Bizzare Adventure: Stardust Crusaders</h1>
              <p className="imgCarDesc">"..It is violent and has some childish humor, but doesn’t lose its overall story. While completely silly at times, when taking into account Araki’s inspiration, I can’t help but say that this series is a lot of fun. And that’s what it needs to be, fun."</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="card homeCard bg-dark">
          <h2>Welcome</h2>
          <p className="text-left">Here at Konichiwa Anime our goal is to help anime fans share their favorite anime's with their friends by creating watchlists or wish lists. If you've ever wanted an easy way to share animes with your friends then look no further. this is the place for you!</p>
          <h2>Other Info</h2>
          <p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
    );
  }
}

export default Home;
