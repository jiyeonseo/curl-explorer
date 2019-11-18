import * as React from "react";
import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";

export default () => {
    //   const onChange =  e => setOutput(e.target.value);
    const output = '';
    const onChange = () => { };
    return (
        <Textarea
            value={output}
            onChange={onChange}
            size={SIZE.large}
            placeholder="Output"
            disabled
        />
    );
}