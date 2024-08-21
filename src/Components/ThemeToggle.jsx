import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { systemBasedThemeChange } from '../Features/ThemeSwitcher/themeSwitcher';

export const ThemeToggle = () => {
    const dispatch = useDispatch();
    const isDarkThemeDark = useSelector((state) => state.themeSwitcher.dark)
    //system theme detector
    useEffect(() => {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        const mqListener = (e) => {
            dispatch(systemBasedThemeChange(e.matches));
        };

        darkThemeMq.addEventListener('change', mqListener);

        return () => darkThemeMq.removeEventListener('change', mqListener);
    }, [dispatch]);

    //toggle theme on the basis of i s dark true
    useEffect(() => {
        if (isDarkThemeDark) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    }, [isDarkThemeDark])
}
