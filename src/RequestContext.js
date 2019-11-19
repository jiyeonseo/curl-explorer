import React from 'react';

import parser from './Parser';

import request from 'request';

const RequestContext = React.createContext([{}, () => { }]);
const requestWithCURLString = (text, setOutput) => {
  console.log(text);
  if (text === '' || 0 !== text.indexOf('curl ')) {

    return;
  }

  const parsed = parser(text);
  if (!parsed.url) {
    return;
  }

  return requestCURL(parsed, setOutput);

}

const requestCURL = (req, setOutput) => {
  request({
    method: req.method,
    uri: req.url,
    form: req.form
  }, function (err, httpResponse, body) {
    // setIsLoading(false);
    console.log(body);
    setOutput(body.toString());
    // return body.toString();
  });
}

const RequestProvider = (props) => {

  const ref = React.useRef(null);
  
  const [context, setContextImp] = React.useState({
    setContextImp: context => {
      const newContext = {
        ...ref.current,
        ...context,
      };
      setContextImp(newContext);
    },
    curlString: '',
    output :'',
    requestCURL: (aa) => {
      requestWithCURLString(aa, (out) => {
        const newContext = {
          ...ref.current,
          output: out,
        };
        setContextImp(newContext);
      })
      
    }
  });

  React.useEffect(() => {
    ref.current = context;
  }, [context]);

  return (
    <RequestContext.Provider value={context}>
      {props.children}}
    </RequestContext.Provider>
  );
}

export { RequestContext, RequestProvider };
