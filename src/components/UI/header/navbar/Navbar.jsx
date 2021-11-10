import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Favorite from '../../main/favorite/favoriteIcon';

const MenuItems = [
  {
    title: 'heroes',
    url: 'heroes',
    cName: 'nav-links',
  },
  {
    title: 'comics',
    url: 'comics',
    cName: 'nav-links',
  },
  {
    title: 'favorites',
    url: 'favorites',
    cName: 'nav-links',
  },
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked }); // eslint-disable-line
    };
    /* eslint-disable */

    render() {
      return (
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            MARVEL
            <i className="fas fa-spider" />
                </h1>
                <div  className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas' + ' fa-bars'}/>
                </div>
                <ul >
                    <li className={this.state.clicked ? 'nav-menu active':
                    'nav-menu'}>
                      {MenuItems.map((item, index) => {
                        return(
                          <li key={index}>
                            <Link className={item.cName} to={item.url}>
                              {item.title}
                                </Link>
                              </li>
                            )
                        })}
                     </li>
                </ul>
                <Favorite/>
            </nav>

        )
    }
}

export default Navbar;