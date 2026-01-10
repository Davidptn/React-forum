import {useState, useEffect} from 'react';
import styles from './search-bar.module.css';
import { ICONS } from "../../shared";
import { useGetPost} from "../../hooks";
import {Link} from "react-router-dom";

export function SearchBar() {
    const [ searchValue, setSearchValue] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {posts, isLoading, error} = useGetPostss()
    const [filteredPosts, setFilteredPosts] = useState(postss)
    useEffect( () => {
        const foundProducts = products.filter( product => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        setFilteredProducts(foundProducts)
    }, [searchValue, products])

    const isContent: boolean = !isLoading && !error

    return <div className={styles.searchBar}>
        <input
            type="text" 
            placeholder="Find posts" 
            onFocus={() => {setIsOpen(true)}}
            onBlur={() => setIsOpen(false)}
            onChange={event => setSearchValue(event.target.value)}
            value={searchValue}
        />
        <ICONS.Search className={styles.searchIcon}></ICONS.Search>
        {isOpen && <div>            
            {isContent && filteredPosts.map( post => 
                <Link to={`/posts/${post.id}`}></Link>
            )}
            {isLoading && <div>Loading..</div>}
            {error && <div>Error {error}</div>}
        </div>}
    </div>