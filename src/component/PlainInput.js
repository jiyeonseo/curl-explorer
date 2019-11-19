import React from 'react';
import { Textarea } from "baseui/textarea";

import { SIZE } from "baseui/input";
import { H6 } from 'baseui/typography';

import {RequestContext} from '../RequestContext';
import {BeautifyContext} from '../BeautifyContext';

export default (props) => {
    const [input, setInput] = React.useState("");
    
    const {setReqeustContextImp, error} = React.useContext(RequestContext);
    const {setBeautifyContextImp, toJson, curlString} = React.useContext(BeautifyContext);
    
    return (
        <div>
        <H6>CURL command</H6>
        <Textarea
            value={input}
            error={error}
            onChange={e => {
                setInput(e.target.value);
                setReqeustContextImp({
                    curlString : e.target.value
                });
                toJson(e.target.value);
                
            }}
            size={SIZE.large}
            placeholder="insert curl"
            clearable
            overrides={{
                Input: {
                  style: {
                    maxHeight: '300px',
                    minHeight: '200px',
                    minWidth: '100px',
                    width: '40vw', // fill all available space up to parent max-width
                    resize: 'width',
                  },
                },
              }}
        />
        </div>
        
    )
}
