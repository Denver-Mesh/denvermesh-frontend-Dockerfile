import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import './style.css';

const View = (props) => {
  return (
  <section className="hero-mesh" style={{height: '200px'}}>  <div className="mesh-container">
    <div className="node green p1"></div>
    <div className="node brown p2"></div>
    <div className="node green p3"></div>
    <div className="node brown p4"></div>
    <div className="node green p5"></div>
    <div className="node brown p6"></div>
    <div className="node green p7"></div>
    <div className="node brown p8"></div>
    <div className="node green p9"></div>
    <div className="node brown p10"></div>
    <div className="node green p11"></div>
    <div className="node brown p12"></div>

    <svg className="mesh-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path className="line" d="M10,10 L30,25 L50,10 L80,20 L90,50 L70,80 L40,90 L10,70 L30,50 L10,10" />
      <path className="line" d="M30,25 L30,50 L50,60 L70,80" />
      <path className="line" d="M50,10 L50,60 L90,50" />
      <path className="line" d="M10,70 L50,60 L80,20" />
      <path className="line" d="M30,25 L80,20" />
    </svg>
    </div>
  
    <div className="hero-content">
      <h1>Community Efforts</h1>
      <p>Projects and Resources Developed By ColoradoMesh</p>
    </div>
  </section> 
  );
};

export default withBlockExtensions(View);
