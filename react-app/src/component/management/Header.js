import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({title, addLink}) => <div className="section product-header">
  <div className="container">
    <div className="columns">
      <div className="column">
            <span className="title is-3">
              {title}
            </span>
        <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
        <span className="title is-4 has-text-muted">
              Management
            </span>
        <span className="title is-4 is-info is-pulled-right ">
                <Link
                  className="icon is-large"
                  to={addLink}
                >
                  <i className="fa fa-plus-circle"></i>
                </Link>
            </span>
      </div>
    </div>
  </div>
</div>;

export default Header;