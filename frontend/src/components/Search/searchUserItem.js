import React from "react";
import { useHistory } from "react-router-dom";
import './searchUser.css';

const SearchUserShow = ({id, name}) => {
    const history = useHistory();
    const newId = id.toString();
    const newName = name.split(' ').join('');
    
    let newPath;
    const changeRoute = () => {
        newPath = newId;
        history.push('/'+newPath+'/'+newName);
        // window.location.reload(false);
    };

    return(
        <div id="container-name-search">
            <button onClick={changeRoute} id="button-name-search">{name}</button>
        </div>
    )
};

export default SearchUserShow;