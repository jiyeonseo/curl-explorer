import React from 'react';
import { Textarea } from "baseui/textarea";

import { SIZE } from "baseui/input";
import { H6 } from 'baseui/typography';

import {RequestContext} from '../RequestContext';

export default (props) => {
    const [input, setInput] = React.useState("");
    const [inputError, _] = React.useState(false);

    const {setContextImp} = React.useContext(RequestContext);

    return (
        <div>
        <H6>CURL command</H6>
        <Textarea
            value={input}
            error={inputError}
            onChange={e => {
                setInput(e.target.value);
                setContextImp({
                    curlString : e.target.value
                });
            }}
            size={SIZE.large}
            placeholder="insert curl "
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
