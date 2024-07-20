import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title, description } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} padding={'2rem'}>
         <Box component={'img'} src={image} alt={'mockup'} style={{ width: '100%', marginBottom: '1rem', borderRadius: '10px', marginTop: '-4rem', marginBottom: '-4rem' }} />
         <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h1>
         <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>{description}</p>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'} alignItems={'center'} fontSize={'1.5rem'} py={'1rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'} fontSize={'1rem'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;