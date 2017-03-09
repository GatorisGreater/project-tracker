import React from 'react'
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

function Header() {
  return (
    <div className="Header">
      <header>
        <h1>
          Project Portfolio
        </h1>
      </header>
    </div>
)
}

// export default connect ()(Header);

export default Header;
