import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaSearch } from "react-icons/fa";
import styles from './styles.module.scss';

import {
    filterBySearch,
  } from '../../features/posts/postsSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const [newSearchInput, setNewSearchInput] = useState("");
    const searchRef = useRef(null);

    const filterByInput = (e) => {
        dispatch(filterBySearch({value : newSearchInput}));
        setNewSearchInput("");
    }

    useEffect(() => {
        if(searchRef) {
            searchRef.current.focus();
        }
      }, [searchRef]);

    return (
        <div className = {styles.navCenter}>
                <form 
                className = {styles.searchbar}
                onSubmit = {(e) => filterByInput(e)}>
                    <FaSearch className = {styles.searchIcon}/>
                    <input
                        ref={searchRef} 
                        placeholder = "Search" 
                        type = {styles.searchInput}
                        value = {newSearchInput}
                        onChange = {(e) => setNewSearchInput(e.target.value)} />
                </form>
        </div>
    )
}

export default SearchBar;
