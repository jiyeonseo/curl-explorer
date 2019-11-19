import React from 'react';
import { H6 } from 'baseui/typography';
import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";
import { BeautifyContext } from '../BeautifyContext';
import beautify from 'json-beautify';


export default (props) => {
    const [input, setInput] = React.useState("");
    const [inputError, setInputError] = React.useState(false);
    const { jsonObj } = React.useContext(BeautifyContext);

    return (
        <div>
            <H6>JSON</H6>

            <Textarea
                value={beautify(jsonObj, null, 2, 80)}
                error={inputError}
                onChange={e => setInput(e.target.value)}
                size={SIZE.large}
                disabled
                overrides={{
                    Input: {
                        style: {
                            maxHeight: '300px',
                            minHeight: '200px',
                            minWidth: '100px',
                            width: '40vw',
                            resize: 'width',
                        },
                    },
                }}
            />
        </div>

    )
}
