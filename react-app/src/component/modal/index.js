import React from 'react';

export const SuccessModal = ({isVisible= false, title= 'Success', subTitle= '', text= '', hide}) =>
<div className={isVisible ? 'modal is-active' : 'modal'}>
  <div className="modal-background"></div>
  <div className="modal-content">
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{title}</strong>
              <small>{subTitle}</small>
              <br/>
              {text}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
  <button
    className="modal-close"
    onClick={hide}
  ></button>
</div>;

