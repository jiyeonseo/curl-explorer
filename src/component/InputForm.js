import React from 'react';
import PlainInput from '../templates/PlainInput';
import FormInput from '../templates/FormInput';
import { Button, KIND, SHAPE } from "baseui/button";
import { H6 } from 'baseui/typography';

import InputContext from '../templates/InputContext';

import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import nullthrows from '../nullthrows';

const itemProps = {
  // backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const narrowItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({ $theme }) => ({
        width: $theme.sizing.scale1600,
        flexGrow: 0,
      }),
    },
  },
};
const InputForm = () => {

  return (
    <FlexGrid
      flexGridColumnCount={3}
      flexGridColumnGap="scale1000"
      flexGridRowGap="scale900"
      style={{ marginTop: '150px', display: 'flex', width: '100%' }}
    >
      <FlexGridItem {...itemProps}>
        <PlainInput />
      </FlexGridItem>
      <FlexGridItem {...narrowItemProps}>
        <div>
          <Button> {'Prittier'} </Button>
          <Button> {'Plainer'}  </Button>
        </div>
      </FlexGridItem>
      <FlexGridItem {...itemProps}>
        <FormInput />
      </FlexGridItem>

    </FlexGrid>
  );
}

export default InputForm;
