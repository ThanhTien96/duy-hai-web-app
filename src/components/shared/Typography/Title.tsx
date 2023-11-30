import React from 'react';
import PropTypes from 'prop-types';

type TTitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | number;
  className?: string;
  children: React.ReactNode;
};

const Title: React.FC<TTitleProps> = ({ level, className, children }) => {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;
  return React.createElement(Heading, { className }, children);
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
