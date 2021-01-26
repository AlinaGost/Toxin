import React, { memo } from 'react';
import Header from '@components/header';
import Inner from '@components/pageInner';
import Footer from '@components/footer';
import Copyright from '@components/copyright';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Inner />
      <Footer />
      <Copyright text={'Copyright © 2018 Toxin отель. Все права зачищены.'} />
    </div>
  );
};

export default memo(SimpleForm);
