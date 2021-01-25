import React, { memo } from 'react';
import Header from '@components/header';
import Inner from '@components/pageInner';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header />
      <Inner />
    </div>
  );
};

export default memo(SimpleForm);
