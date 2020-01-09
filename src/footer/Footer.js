import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer className='section footer-clssic context-dark bg-image' style={{ background: "#2d3246", color: "#fff" }}>
                <p className='pFooter'>My first react app, 2020 © iGorG</p>
            </footer>
        )
    }
}

export default Footer;