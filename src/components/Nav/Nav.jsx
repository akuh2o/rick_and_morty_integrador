import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css';
/*import {onSearch} from '../'*/

/*class Nav extends React.Component{
    constructor (props){
        super()
    }

    render(){
        return(
        <nav>
            <SearchBar onSearch={this.props.onSearch}/>
        </nav>
        )
    }
}*/

function Nav (props){
    return(
    <div>
        <Link to={'/home'}>
        <button>Home</button>
        </Link>
        <Link to={'/about'}>
        <button>About</button>
        </Link>
        <Link to={'/favorites'}>
        <span>Favorites</span>
        </Link>
        <SearchBar onSearch={props.onSearch} /> 
    </div> 
    );
}

export default Nav;