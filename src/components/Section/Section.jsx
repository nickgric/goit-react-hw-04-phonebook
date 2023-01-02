import React from 'react';
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <section className={styles.container}>
        {title && <h2>{title}</h2>}
        {children}
      </section>
    </>
  );
};
