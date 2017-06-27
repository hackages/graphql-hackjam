import React from 'react';

const TalkItem = ({
 attending,
 talk,
 onClick
}) => {
  return <a
    className="panel-block"
    onClick={() => onClick(talk.id)}
  >
    <span className="panel-icon">
      {
        attending ? <i className="fa fa-check"></i> : <i className="fa fa-user"></i>
      }
    </span>
    {talk.title}
  </a>;
};

export default TalkItem;