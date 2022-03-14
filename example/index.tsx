import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PreviewContainer, IImgItem } from '../.';

const App = () => {
  const source: IImgItem[] = [
    { id: '1', src: 'hahah' },
    { id: '2', src: 'hahah' },
    { id: '3', src: 'hahah' },
  ];
  return (
    <div>
      <PreviewContainer sources={source}>
        <div>show</div>
      </PreviewContainer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
