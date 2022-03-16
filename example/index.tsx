import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PreviewContainer, IImgItem } from '../.';

const imgUrl =
  'https://panojson-oss.kujiale.com/pano/pano-editor/2022/03/14/MIXOCI5MDSYP4AABAAAAADY8.png?x-oss-process=image/format%2Cwebp';
const imgUrl2 =
  'https://panojson-oss.kujiale.com/pano/pano-editor/2022/03/14/MIXOCI5MDSYP4AABAAAAABY8.png?x-oss-process=image/format%2Cwebp';

const App = () => {
  let source: IImgItem[] = [];
  for (let i = 0; i < 20; i++) {
    source.push({
      id: String(i + 1),
      src: i % 2 === 0 ? imgUrl2 : imgUrl,
    });
  }

  return (
    <div>
      <PreviewContainer sources={source}>
        <div>show</div>
      </PreviewContainer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
