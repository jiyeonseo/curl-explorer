import React from 'react';
import { FlexGridItem } from 'baseui/flex-grid';
import {RequestContext} from '../RequestContext';
import { Button } from "baseui/button";


const itemProps = {
    marginTop: '200px',
    height: 'scale1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
export default () => {  
   const {requestCURL, curlString} = React.useContext(RequestContext);

    return (
        <FlexGridItem {...itemProps}>
            <Button onClick={() => {
                requestCURL(curlString);   
            }}>Submit</Button>
        </FlexGridItem> 
    )
}
