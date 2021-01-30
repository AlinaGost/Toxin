import React, { memo } from 'react';
import Header from '@components/header';
import Inner from '@components/pageInner';
import Footer from '@components/footer';
import Copyright from '@components/copyright';
import Sidebar from '@components/sidebar';
import Rooms from '@components/rooms';
import DatePicker from '@components/select';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Rooms />
      <Sidebar />
      <Footer />
      <Copyright text={'Copyright © 2018 Toxin отель. Все права зачищены.'} />
    </div>
  );
};

export default memo(SimpleForm);
