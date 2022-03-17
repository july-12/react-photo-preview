import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PreviewContainer, IImgItem } from '../.';

const imgUrl1 =
  'https://panojson-oss.kujiale.com/pano/pano-editor/2022/03/14/MIXOCI5MDSYP4AABAAAAADY8.png?x-oss-process=image/format%2Cwebp';
const imgUrl2 =
  'https://panojson-oss.kujiale.com/pano/pano-editor/2022/03/14/MIXOCI5MDSYP4AABAAAAABY8.png?x-oss-process=image/format%2Cwebp';
const imgUrl3 =
  'https://panojson-oss.kujiale.com/pano/pano-editor/2022/01/10/MHN6OWVMDSK2UAABAAAAAEA8.png?x-oss-process=image/format%2Cwebp';
const imgUrl = [imgUrl1, imgUrl2, imgUrl3];

const App = () => {
  let source: IImgItem[] = [];
  const N = 8;
  for (let i = 0; i < N; i++) {
    source.push({
      id: String(i + 1),
      src: imgUrl[i % imgUrl.length],
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
