import React from 'react';
import BackgroundSlider from 'react-background-slider';
import './style.css';
import Image1 from './Image1.png';
import Image2 from './Image2.png';
import Image3 from './Image3.png';


const Home = () => {
    return(
      <div style={{height:"100%", minHeight:"85vh"}}>
        <BackgroundSlider
          images={[Image1, Image2, Image3]}
          duration={10} transition={2}/>
      </div>
    );
};

export default Home;