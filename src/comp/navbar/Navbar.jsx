import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if the screen size is mobile or laptop
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        // Initial check
        handleResize();

        // Add event listener to track screen resizing
        window.addEventListener('resize', handleResize);

        // Clean up event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='sec'>
            <nav className='navc'>
                {!isMobile && <label className="logo">DesignX</label>}
                <ul>
                    {/* Render the first 5 list items for both mobile and laptop */}
                    <li><Link id='l1' to="/livep">Live Scores</Link></li>
                    <li><Link id='l1' to="#">Schedule</Link></li>
                    <li><Link id='l1' to="#">Series</Link></li>
                    <li><Link id='l1' to="#">News</Link></li>


                    {/* Conditionally render the remaining list items */}
                    {isMobile ? (
                        
                        <li className="dropup">
                            <button className="dropbtn">Dropup</button>
                            <div className="dropup-content">
                                <Link id='l2' to="#">Archvies</Link>
                                <Link id="l2" to="#">Teams</Link>
                                <Link id="l2" to="#">Rankings</Link>
                                <Link id="l2" to="#">Link 2</Link>
                                <Link id="l2" to="#">Link 3</Link>
                                <Link id="l2" to="#">Link 3</Link>
                            </div>
                        </li>
                    ) : (
                        // For laptop, display all items side by side
                        <>
                            <li><Link id='l1' to="#">Archvies</Link></li>
                            <div className="dropdown">
                                <button className="dropbtn">Teams
                                    <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                    <Link id='l1' to="#">Link 1</Link>
                                    <Link id='l1' to="#">Link 1</Link>
                                    <Link id='l1' to="#">Link 1</Link>
                                   
                                </div>
                            </div>
                            <li><Link id='l1' to="#">Rankings</Link></li>
                            <div className="dropdown">
                                <button className="dropbtn">More
                                    <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                    <Link id='l1' to="#">Link 1</Link>
                                    <Link id='l1' to="#">Link 1</Link>
                                    <Link id='l1' to="#">Link 1</Link>
                                   
                                </div>
                            </div>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}
