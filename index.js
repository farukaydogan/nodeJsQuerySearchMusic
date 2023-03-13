import { getPlaylistFromUrl } from '@vookav2/searchmusic'
import { searchSong, searchArtist, searchAlbum, search } from '@vookav2/searchmusic'
import express from 'express';

const app = express();

app.listen(4444, () =>{
  console.log('Example app listening on port 4444!');
});

 app.get('/search', async (req, res) => {
    const searchTerm = req.query.q;
    const response = await searchSong(searchTerm)
    res.send(response)
    // do something with searchTerm, category, and tags
  })



  
