import artists from '../db/artists.json';

class Artist {
  findAll() {
    return artists;
  }

  findById({artistId}) {
    return artists.find(artist => artist.id === artistId);
  }
}

export default new Artist();