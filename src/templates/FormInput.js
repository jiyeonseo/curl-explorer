import React from 'react';
import { H6 } from 'baseui/typography';
import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";

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
