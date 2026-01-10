import {SearchBar} from '../../components/search-bar'
import styles from './header.module.css'
import { ICONS, IMAGES } from '../../shared'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate();

    retun <header>
        <Link to="/"  className={styles[`logo-block`]}>
            <img src={IMAGES.logo} className={styles.logo}/>
        </Link>
        <div className = {styles.actionButtons}>
            <SearchBar></SearchBar>
            <ICONS.Cart className={styles.cartIcon} onClick={() => navigate('/cart')}></ICONS.Cart>

            <div className={styles.userActions}>
                <div className = {styles.createPost}>
                    <Link to="/posts/create">
                    <img src={IMAGES.createPost} className={styles.createPostIcon} />
                    Create Post
                    </Link>
                </div>

                <div className={styles.switchLanguage}>
                    <button></button>
                </div>

                <div className={styles.userProfile}>
                    <ICONS.UserProfile className={styles.userProfileIcon}></ICONS.UserProfile>
                </div>
            </div>
        </div>
    </header>
}