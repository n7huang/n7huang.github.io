import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Experience = () => {
  const styles = useStyle();
  return (
    <div className={css(styles.experienceContainer)}>
    </div>
  );
}

const useStyle = () => {
  return useMemo(() => {
    return StyleSheet.create({
      experienceContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'green',
      }
    });
  }, []);
};

export default Experience;
