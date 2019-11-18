import React from 'react';
const RequestContext = React.createContext([{}, () => { }]);


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

  
const PlainCurlProvider = (props) => {

    consdt 

    return (
        <>
        </>
    );
}

export { RequestContext, RequestProvider};
