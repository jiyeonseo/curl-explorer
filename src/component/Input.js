import React from 'react';
import PlainInput from './PlainInput';
import JSONInput from './JSONInput';

import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { BeautifyProvider } from '../BeautifyContext';
const itemProps = {
  
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const Input = () => {
  return (
    <BeautifyProvider>
      <FlexGrid
        flexGridColumnCount={2}
        flexGridColumnGap="scale1000"
        flexGridRowGap="scale900"
        style={{ marginTop: '150px', display: 'flex', width: '100%' }}
      >
          <FlexGridItem {...itemProps}>
            <PlainInput />
          </FlexGridItem>
          
          <FlexGridItem {...itemProps}>
            <JSONInput />
          </FlexGridItem>
        
      </FlexGrid>
    </BeautifyProvider>
  );
}

export default Input;
