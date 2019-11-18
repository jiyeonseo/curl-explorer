import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Textarea } from "baseui/textarea";
import { FormControl } from 'baseui/form-control';
import { SIZE } from "baseui/input";
import { H6 } from 'baseui/typography';
import InputContext from '../templates/InputContext';
// const PlainCurlContext = React.createContext([{}, () => { }]);

export default (props) => {
    const [input, setInput] = React.useState("");
    const [inputError, setInputError] = React.useState(false);
    const {setCurlExplorerInfo} = React.useContext(InputContext);


    return (
        <div>
        <H6>CURL command</H6>
        <Textarea
            value={input}
            error={inputError}
            onChange={e => setInput(e.target.value)}
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
