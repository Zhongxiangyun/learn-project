import React, {useState} from 'react';

const Switch = () => {
  const [status, setStatus] = useState (false);
  const handleOntap = () => {
    setStatus (!status);
  };
  return <h1 onClick={handleOntap} style={{color: '#f00'}}>Switch-{status?'存在':'消失'}</h1>;
};
export default Switch;
