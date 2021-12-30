import React from 'react';

export const CategoryModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
        <div className={showHideClassName}>
        <section className="modal-main">
        <button class = "btn-close" onClick={handleClose}>x</button>
          {children}
        </section>
      </div>
      
    );
    
  };
  