import React from 'react';
import { FlexGrid } from 'baseui/flex-grid';

// import Plain from './templates/Plain';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled, darkTheme } from 'baseui';

import {  RequestProvider } from './RequestContext';
import Header from './component/Header';
import Output from './component/Output';
import InputForm from './component/InputForm';
import Submit from './component/Submit';
import 'bootstrap/dist/css/bootstrap.min.css';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%'
});

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Header />
        <Centered>
          <RequestProvider>
            <FlexGrid flexGridColumnCount={1} >
              <InputForm />
              <Submit />
              <Output />
            </FlexGrid>
          </RequestProvider>
        </Centered>
      </BaseProvider>
    </StyletronProvider >
  )
}

export default App;
