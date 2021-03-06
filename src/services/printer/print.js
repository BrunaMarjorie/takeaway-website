import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'react-bootstrap';

import { ComponentToPrint } from './componentToPrint';

//react-to-print library
const Printer = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Button style={{marginTop: '10px'}} onClick={handlePrint}>Print Invoice</Button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default Printer;