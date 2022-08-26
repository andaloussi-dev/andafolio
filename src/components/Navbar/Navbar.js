import React, { useState, useRef, useEffect } from 'react'
import { Header, Nav, Logo, Menulinks, ResumeButton, Sidebar, HamburgerButton, Menu } from './NavbarStyles'
import { useOnClickOutside } from '../../hooks';
import { KEY_CODES } from '../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const buttonRef = useRef(null);
    const navRef = useRef(null);

    let menuFocusables;
    let firstFocusableEl;
    let lastFocusableEl;

    const setFocusables = () => {
        menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))];
        firstFocusableEl = menuFocusables[0];
        lastFocusableEl = menuFocusables[menuFocusables.length - 1];
    };

    const handleBackwardTab = e => {
        if (document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
        }
    };

    const handleForwardTab = e => {
        if (document.activeElement === lastFocusableEl) {
            e.preventDefault();
            firstFocusableEl.focus();
        }
    };

    const onKeyDown = e => {
        switch (e.key) {
            case KEY_CODES.ESCAPE:
            case KEY_CODES.ESCAPE_IE11: {
                setMenuOpen(false);
                break;
            }

            case KEY_CODES.TAB: {
                if (menuFocusables && menuFocusables.length === 1) {
                    e.preventDefault();
                    break;
                }
                if (e.shiftKey) {
                    handleBackwardTab(e);
                } else {
                    handleForwardTab(e);
                }
                break;
            }

            default: {
                break;
            }
        }
    };

    const onResize = e => {
        if (e.currentTarget.innerWidth > 768) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        window.addEventListener('resize', onResize);

        setFocusables();

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const wrapperRef = useRef();
    useOnClickOutside(wrapperRef, () => setMenuOpen(false));


    return (
        <Header>
            <Nav>
                <Logo />
                <Menulinks>
                    <ol>
                        <li> About </li>
                        <li> Experinece </li>
                        <li> Work </li>
                        <li> Contact </li>
                    </ol>
                    <ResumeButton> Resume </ResumeButton>
                </Menulinks>
                <Menu>
                    <div ref={wrapperRef}>
                        <HamburgerButton
                            onClick={toggleMenu}
                            menuOpen={menuOpen}
                            ref={buttonRef}
                            aria-label="Menu">
                            <div className="ham-box">
                                <div className="ham-box-inner" />
                            </div>
                        </HamburgerButton>

                        <Sidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
                            <nav ref={navRef}>
                                <ol>
                                    <li> About </li>
                                    <li> About </li>
                                    <li> About </li>
                                    <li> About </li>
                                </ol>

                                <a href="/resume.pdf" className="resume-link">
                                    Resume
                                </a>
                            </nav>
                        </Sidebar>
                    </div>
                </Menu>
            </Nav>
        </Header>
    )
}

export default Navbar