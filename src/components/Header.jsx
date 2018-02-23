import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Responsive } from 'semantic-ui-react'
import { elastic as MobileMenu } from 'react-burger-menu'



var menuItemStyle = {


}

var menuStyle = {
  
}

var headerDivStyle = {
  height: '',

}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    margin: '.8em',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.2)'
  }
}

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
      <div style={headerDivStyle}>
        <Responsive minWidth={ 768 }>
          
      <Menu 
      fixed={'top'}
      style={menuStyle}>

        <Menu.Item>
           bandCo
        </Menu.Item>
        <Menu.Menu
          position='right'
        >
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/'>Home</Link>
        </Menu.Item>

        <Menu.Item
          name='bio'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/bio'>About bC</Link>
        </Menu.Item>
        <Menu.Item
          name='showcase'
          active={activeItem === 'showcase'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/showcase'>Showcase</Link>
        </Menu.Item>
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/contact'>Contact bC</Link>
        </Menu.Item>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
          style={menuItemStyle}
        >
          <Link to='/login'>Login</Link>
        </Menu.Item>
        
        </Menu.Menu>
      </Menu>
      
      </Responsive>
      
      <Responsive maxWidth= { 768 }>
         <Menu
          fixed={'top'}
          >
            <MobileMenu styles={ styles } isOpen={false}>
              <Link to='/'>Home</Link>
              <Link to='/bio'>About bC</Link>
              <Link to='/showcase'>Showcase</Link>
              <Link to='/contact'>Contact bC</Link>
              <Link to='/login'>Login</Link>
            </MobileMenu>
            <Menu.Item position='right'>
              bC
            </Menu.Item>
        </Menu>
        </Responsive>
      </div>

    )
  }
}