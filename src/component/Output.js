import * as React from "react";
import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { RequestContext } from '../RequestContext';
import { H6 } from 'baseui/typography';
import { Radio, RadioGroup } from 'baseui/radio';
import beautify from 'json-beautify';

const itemProps = {
    marginTop: '100px',
    height: 'scale1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
};

const getOutputString = (response, type) => {
    if(response.body == null) return '';

    if(type == 'body') {
        return response.body.toString();
    }else {
        const responseObj = response.httpResponse;

        return beautify({
            header: responseObj.headers,
            body: responseObj.body,
        }, null, 2, 160);

    }
        
}
export default () => {
    const [value, setValue] = React.useState('body');
    const { output } = React.useContext(RequestContext);

    return (
        <FlexGrid
            flexGridColumnCount={1}
            style={{ marginTop: '10px', display: 'flex', width: '100%' }}
        >
            <FlexGridItem {...itemProps}>
                <div style={{ width: '93%' }}>
                    <span>
                        <H6>Response</H6>
                        <RadioGroup
                            align="horizontal"
                            name="radio group"
                            onChange={e => setValue(e.target.value)}
                            value={value}
                        >
                            <Radio value="body">Body</Radio> {'   '}
                            <Radio value="whole">Whole Response</Radio>
                        </RadioGroup>
                    </span>
                    
                    <Textarea
                        value={getOutputString(output, value)}
                        size={SIZE.large}
                        placeholder="Output"
                        disabled
                        overrides={{
                            Input: {
                              style: {
                                maxHeight: '300px',
                                minHeight: '200px',
                                resize: 'width',
                              },
                            },
                          }}
                    />
                </div>
            </FlexGridItem>
        </FlexGrid>
    );
}