import React from 'react';
import Section from "@shared/Section/Section";
import CenterInfo from "@entites/CenterInfo/CenterInfo";
import Typography from "@shared/Typography/Typography";
import LogoIcon from "@shared/Logo/LogoIcon";

const Footer = () => {
   return (
      <Section bg={`light`}>
         <CenterInfo mt={false} column={true}>
            <LogoIcon />
            <Typography tag={'small'} variant={'label-1'}>NextJs 13 Test App</Typography>
         </CenterInfo>
      </Section>
   );
};

export default Footer;