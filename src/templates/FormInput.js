import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { H6 } from 'baseui/typography';

import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { LightTheme, BaseProvider, styled } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Textarea } from "baseui/textarea";

import { SIZE } from "baseui/input";


const engine = new Styletron();

const Lefted = styled('div', {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    height: '100%',
});

export default (props) => {
    const [input, setInput] = React.useState("");
    const [inputError, setInputError] = React.useState(false);
    return (
        <div>
        <H6>JSON</H6>
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
