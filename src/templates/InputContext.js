import React from 'react';
import { createContext } from "react";

type curlExplorerContext = {
    setCurlExplorerInfo: (context: curlExplorerContext ) => void,
    curlText: string,
    curlObject: Object,
    jsonText: string,
  };

const InputContext = createContext({
    setCurlExplorerInfo: ()=> {},
    curlText: '',
    curlObject: {},
    jsonText: '',
});

export default InputContext;
