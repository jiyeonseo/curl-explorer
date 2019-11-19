import React from 'react';
import curlconverter from 'curlconverter';
import parser from './Parser';
const BeautifyContext = React.createContext([{}, () => { }]);

const BeautifyProvider = (props) => {

  const ref = React.useRef(null);
  
  const [context, setBeautifyContextImp] = React.useState({
    setBeautifyContextImp: context => {
      const newContext = {
        ...ref.current,
        ...context,
      };
      setBeautifyContextImp(newContext);
    },
    curlString: '',
    jsonString :'',
    jsonObj: {},
    toJson: (str) => {
      if (str === '' || 0 !== str.indexOf('curl ')) {
        return;
      }
      const parsed = parser(str);
      if (!parsed.url) {
        return;
      }
      
      const newContext = {
        ...ref.current,
        jsonString: curlconverter.toJsonString(str),
        jsonObj: JSON.parse(curlconverter.toJsonString(str)),
      };
      setBeautifyContextImp(newContext);
    }
  });

  React.useEffect(() => {
    ref.current = context;
  }, [context]);

  return (
    <BeautifyContext.Provider value={context}>
      {props.children}
    </BeautifyContext.Provider>
  );
}

export { BeautifyContext, BeautifyProvider };
