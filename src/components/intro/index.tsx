import * as React from 'react';
import styles from './styles.module.scss';
import IntroInner from '@components/intro__inner';

// interface IProps {
//   introTitle?: string;
// }

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className="container">
        <IntroInner
          introTitle={'Лучший вкус, это вкус долголетнего вина'}
          introText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam quis.'
          }
        />
      </div>
    </div>
  );
};

export default Intro;
