import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Typography } from '@mui/material';
import './RightsPage.scss';
import gif from '../../assets/giphy.gif';
// import { useNavigate } from 'react-router-dom';

export const RightsPage: React.FC = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.open('https://creativecommons.org/licenses/by/4.0/', '_blank');

  //     setTimeout(() => {
  //       navigate('/');
  //     }, 1000);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <>
      <Breadcrumbs>
        <Typography>Rights</Typography>
      </Breadcrumbs>
      <div className="container">
        <img src={gif} className="gif" alt="Animated GIF" />
      </div>
    </>
  );
};
