import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import './style.css';

const View = (props) => {
  return (
  <section>
    <div className="hero-banner">
        <div className="content">
            <h1 className="burst-text">News</h1>
            
            <div className="radio-waves">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  </section> 
  );
};

export default withBlockExtensions(View);
