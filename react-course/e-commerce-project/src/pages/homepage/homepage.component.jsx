// jshint esversion:6

import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = ({history}) => (
  <div className='homepage'>
    <Directory />
  </div>
)

export default HomePage;
