import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { procura } from '../../features/procura';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Container } from './style';

const Search = ()=>{

    const [pesquisa, setPesquisa] = useState('');
    const dispatch = useDispatch();
    
    return(
        <Container>
            <input 
                type="text" 
                placeholder="Buscar"
                onChange = {e =>{
                    setPesquisa(e.target.value);                      
                }}
            />
            <div onClick={()=>dispatch(procura(pesquisa))} className="fa fa-search" aria-hidden="true"></div>
        </Container>
    )
}

export default Search;