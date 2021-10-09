import React from 'react';
import { Container } from './style';

const Playlist = (props) => {
   
    function fancyTimeFormat(duration){   
        // Hours, minutes and seconds
        var hrs = ~~(duration / 3600);
        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;
        var ret = "";
    
        if (hrs > 0) ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

    return(
        <Container>
            <table>
                <tbody>
                {props.data?.map( musica =>{
                    return (
                            <tr key={musica.id} className="tr">
                                <td><img src={musica.album.cover_small} alt=""></img></td>

                                <td>
                                    <input type="checkbox" id={`favorito${musica.id}`} value={musica.id} />
                                    <label htmlFor={`favorito${musica.id}`} className="icon" onClick={()=>{ console.log(musica.id)}}>
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                    </label>
                                </td>

                                <td><h3>{musica.title}</h3><p>{musica.artist.name}</p></td>
                                
                                <td>
                                    <a href={musica.link} target='_blank' rel="noreferrer" className="fa fa-share-square-o" aria-hidden="true"></a>
                                </td>

                                <td>
                                    <i className='fa fa-play play' aria-hidden="true" onClick={()=>{document.getElementById(musica.id).play();}}></i>
                                    <audio id={musica.id} >
                                        <source src={musica.preview} type="audio/mp3" />
                                    </audio>
                                </td>
                                
                                <td>{fancyTimeFormat(musica.duration)}</td>
                            </tr>
                    )
                })}

            </tbody>
            </table>
        </Container>
    )
}

export default Playlist;
