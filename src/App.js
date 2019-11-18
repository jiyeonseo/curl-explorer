import React from 'react';

import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

import { Button, KIND, SHAPE } from "baseui/button";
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import request from 'request';

// import Plain from './templates/Plain';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled, darkTheme } from 'baseui';

import InputContext from './templates/InputContext';

import Header from './component/Header';
import Output from './component/Output';
import InputForm from './component/InputForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import parser from './Parser';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%'
});

const itemProps = {
  marginTop: '100px',
  // backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const App = () => {
  const [selectedType, setFormType] = React.useState([
    { label: "plain", id: "plain" }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputError, setInputError] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const [inputURL, setInputURL] = React.useState("");

  const submit = () => {
    if (selectedType[0].id === 'plain') {
      parse(input);
    } else {
      alert('hello')
    }
  }
  const parse = (text) => {

    if (text === '' || 0 !== text.indexOf('curl ')) {
      setInputError(true);
      return;
    }

    const parsed = parser(text);
    if (!parsed.url) {
      setInputError(true);
      return;
    }

    setInputError(false);

    console.log(parsed);

    request_curl(parsed);

  }

  const request_curl = (req) => {
    setIsLoading(true);
    request({
      method: req.method,
      uri: req.url,
      form: req.form
    }, function (err, httpResponse, body) {
      setIsLoading(false);
      setOutput(body.toString());

    });
  }
  const formModalRef = React.useRef(null);

  const [context, setInfoImp] = React.useState({
    setCurlExplorerInfo: context => {
      const newContext = {
        ...formModalRef.current,
        ...context,
      };
      setInfoImp(newContext);
    },
    curlText: '',
    curlObject: {},
    jsonText: '',
  });
  
  React.useEffect(() => {
    formModalRef.current = context;
  }, [context]);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Header />
        <Centered>
          <InputContext.Provider value={context}>
            <FlexGrid flexGridColumnCount={1} >
              <InputForm />

              <FlexGridItem {...itemProps}>
                <Button isLoading={isLoading} onClick={() => {
                  submit();
                }}>Submit</Button>
              </FlexGridItem>

              <FlexGridItem {...itemProps}>
                <Output />
              </FlexGridItem>
            </FlexGrid>
          </InputContext.Provider>
        </Centered>
      </BaseProvider>
    </StyletronProvider >
  )
}

export default App;
