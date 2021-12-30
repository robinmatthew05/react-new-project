import React, { useState, useRef, useEffect } from 'react'

const Accordion = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  const titleStyle = {
    fontWeight: 450,
    fontSize: '11px',
  }

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toogleActive} class="set">
      <i class='fas fa-angle-down' id="fas"></i>
        <img src={props.source} class={props.class} class="imgasset"/>
        <p style={titleStyle} class="assettitle">{props.title}</p>
        <span className={active ? 'accordion-icon rotate': 'accordion-icon'}> 
        </span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default Accordion