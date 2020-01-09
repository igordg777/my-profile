import React from 'react';
import './Header.css'
import logo from './1.jpeg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='top'>My profile</div>
                <div>
                    <table align={"center"} width={"70%"} style={{ fontStyle: "Courier New monospace, font-weight: bold" }}>
                        <tr>
                            <td align={"left"}>
                                <p style={{ fontSize: '25px' }}>ИГОРЬ АЛЕКСАНДРОВИЧ Г.</p>
                                <p> ЮРИСТ, МЕНЕДЖЕР, УПРАВЛЯЮЩИЙ ПРОЕКТАМИ, ЭКОНОМИСТ</p>
                                <p>г. Москва ,</p>
                                <img width={"20px"} src={"https://img.icons8.com/color/48/000000/lighthouse.png"} /> м. Шаболовская, <img width={"20px"} src={"https://img.icons8.com/nolan/64/men-age-group-3.png"} /> Возраст: 33 года
                            </td>
                            <td >
                                <img src={logo} className="App-logo" alt="logo" />
                            </td>
                        </tr>
                        <hr color='red'></hr>
                    </table>
                </div>
            </header>
        )
    }
}

export default Header;