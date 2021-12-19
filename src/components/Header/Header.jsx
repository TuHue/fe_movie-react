import React, { useEffect, useRef } from 'react';
import './header.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/tmovie.png'
import { ComHeaderNav } from '../../commons/Nav';

function CompHeader() {
    const { pathname } = useLocation();
    const active = ComHeaderNav.findIndex(e => e.path === pathname);
    const headerRef = useRef(null);
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div className='header'>
            <div className='header__wrap container'>
                <div className='header__logo'>
                    <img src={logo} alt="" />
                    <Link to='/'>tMovie</Link>
                </div>
                <ul className='header__nav'>
                    {
                        ComHeaderNav.map((el, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={el.path}>
                                    {el.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default CompHeader;