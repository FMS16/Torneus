import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import '../App.css';
import Footer from './Footer';

/*global FB*/


const Home = () => {
    const location = useLocation();
    const [viewerState, setViewerState] = useState();
    useEffect(() => {
      console.log(location);
      if(location.state == 'viewerUser'){setViewerState(true);}
    }, []);
  return (
    <div>
      {viewerState == true ? <div><Header user='viewer' />sos espectador</div> : <div><Header user='admin' />sos un usuario</div>}
    </div>
  )
}

export default Home


