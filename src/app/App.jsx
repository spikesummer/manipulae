import React, { useEffect, useState } from 'react';
import {Container} from './style';
import axios from 'axios';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { useSelector } from 'react-redux';
import Search from '../components/search/Search';
import Playlist from '../components/playlist/Playlist';

const App = () => {
  
  const [musicas, setMusicas] = useState([])
  const test = useSelector(state => state.procura.value);
    
  useEffect(()=>{
    
    if(test === ''){
      var options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/1111141961',
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '56e50566a2msh5313a3c226fddf5p13e47bjsn3d1116447c16'
        }
      };

      axios.request(options).then(response => {
        setMusicas(response.data.tracks.data);
        console.log(response.data.tracks.data)
        }).catch(function (error) {
          console.error(error);
        }
      );

    }else{
      var options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: test},
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '56e50566a2msh5313a3c226fddf5p13e47bjsn3d1116447c16'
        }
      };
    
      axios.request(options).then(response => {
        setMusicas(response.data.data);
        console.log(response.data.data)
        }).catch(function (error) {
          console.error(error);
        }
      );
    }
  }, [test])
  
  return (
    
    <Container>
      <Search/>
      <Playlist data = {musicas}/>
    </Container>
  );
}

export default App;
