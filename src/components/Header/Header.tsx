import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import css from "./Header.module.css"

interface ThemeState {
    isDark: boolean;
}


const Header: React.FC = () => {

    const initialThemeState: ThemeState = {
        isDark: localStorage.getItem('theme') === 'dark',
    };
    const [theme, setTheme] = useState<ThemeState>(initialThemeState);

    const toggleTheme = () => {
        const newThemeState: ThemeState = { isDark: !theme.isDark };
        setTheme(newThemeState);
        localStorage.setItem('theme', newThemeState.isDark ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme.isDark ? 'dark-theme' : 'light-theme';
    }, [theme]);

    return (
        <div className={css.Header}>
            <div>The MovieDB</div>
            <div className={css.Navigate}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <div className={css.User}>
                <div className={`header ${theme.isDark ? 'dark-theme' : 'light-theme'}`}>
                    <label className={css.switch}>
                        <input
                            type="checkbox"
                            checked={theme.isDark}
                            onChange={toggleTheme}
                        />
                        <span className={css.slider}></span>
                    </label>
                </div>
                <div className={css.Img}>
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="React"/>
                    <p>user</p>
                </div>
            </div>
        </div>
    );
};

export {Header};