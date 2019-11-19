import React from 'react';

import parser from './Parser';

import request from 'request';

const RequestContext = React.createContext([{}, () => { }]);

const initialOutput = {err: null, httpResponse: null, body: null};

const requestWithCURLString = (text, setOutput) => {
  
  if (text === '' || 0 !== text.indexOf('curl ')) {
    setOutput(initialOutput, true);
    return;
  }

  const parsed = parser(text);
  if (!parsed.url) {
    setOutput(initialOutput, true);
    return;
  }
  setOutput(initialOutput, false);
  return requestCURL(parsed, setOutput);

}

const requestCURL = (req, setOutput) => {
  request({
    method: req.method,
    uri: req.url,
    form: req.form
  }, function (err, httpResponse, body) {
    
    setOutput({err, httpResponse, body}, false);
    // setOutput(body.toString(), false);
  });
}

const RequestProvider = (props) => {

  const ref = React.useRef(null);
  
  const [context, setReqeustContextImp] = React.useState({
    setReqeustContextImp: context => {
      const newContext = {
        ...ref.current,
        ...context,
      };
      setReqeustContextImp(newContext);
    },
    curlString: '',
    output :initialOutput,
    error: false,
    requestCURL: (str) => {
      requestWithCURLString(str, (out, err) => {
        const newContext = {
          ...ref.current,
          output: out,
          error: err,
        };
        setReqeustContextImp(newContext);
      })
      
    }
  });

  React.useEffect(() => {
    ref.current = context;
  }, [context]);

  return (
    <RequestContext.Provider value={context}>
      {props.children}
    </RequestContext.Provider>
  );
}

export { RequestContext, RequestProvider };
