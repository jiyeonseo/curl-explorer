import * as React from "react";
import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";
import {  FlexGridItem } from 'baseui/flex-grid';
import {RequestContext} from '../RequestContext';
const itemProps = {
    marginTop: '100px',
    height: 'scale1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  
export default () => {

   const {output} = React.useContext(RequestContext);
    return (
        <FlexGridItem {...itemProps}>
        <Textarea
            value={output}
            size={SIZE.large}
            placeholder="Output"
            disabled
        />
        </FlexGridItem>
    );
}