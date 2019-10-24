import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  `


function NavBar() {
  return (
    <Nav>
        <div className='link'>
          <Link to="/list">List</Link>
        </div>
        <div className='link'>
          <Link to="/new">New list</Link>
        </div>
        <div className='link'>
          <Link to="/settings">Settings</Link>
        </div>
      </Nav>
  )
}

export default NavBar;
