import React,{useEffect} from 'react';
import {Row} from 'react-bootstrap'

export default function Indicator() {
  useEffect(() => {
    window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  },[])
  return(

      <div className="indicator_container indicator">
        <div className="indicator_bar" id="myBar"></div>
    </div>
  )
}
