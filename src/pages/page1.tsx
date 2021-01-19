import React, { memo } from 'react';
import Header from '@components/header';
import Intro from '@components/intro';
import Collection from '@components/collection';
import Form from '@components/form';
import Footer from '@components/footer';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Intro />
      <Collection />
      <Form />
      <Footer />
    </div>
  );
};

export default memo(SimpleForm);
