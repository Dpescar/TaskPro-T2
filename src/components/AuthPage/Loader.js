import { RotatingSquare } from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Spinner>
      <RotatingSquare
        visible={true}
        type="TailSpin"
        height="35"
        width="35"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="#8FA1D0"
      />
    </Spinner>
  );
};

export default Loader;
