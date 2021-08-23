// placeholder component that redirects to /home

import React from 'react';
import  { Redirect } from 'react-router-dom';
export default function Home() {
  return <Redirect to='/home' />;
}
