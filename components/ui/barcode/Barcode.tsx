import React from 'react';
import Barcode1 from 'react-barcode'; // react-barcode에서 직접 import

function Barcode({ barcodenumber }: { barcodenumber: string }) {
  const barcodenumber1 = barcodenumber;

  return (
    <div className='p-2'>
      <Barcode1
        value={barcodenumber1}
        format={"CODE128"}
        width={2.63}
        height={48}
        fontOptions={"bold"}
        displayValue={true} // 오타 수정
        textAlign={"right"}
        fontSize={13}
        margin={9}
      />
    </div>
  );
}

export default Barcode
