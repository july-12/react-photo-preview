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

const imgWebUrl1 =
  'https://react-photo-view.vercel.app/_next/static/media/1.c788857d.jpg';
const imgWebUrl2 =
  'https://react-photo-view.vercel.app/_next/static/media/2.b43f1ead.jpg';
const imgWebUrl3 =
  'https://react-photo-view.vercel.app/_next/static/media/3.70695fb9.jpg';
const imgWebUrl4 =
  'https://react-photo-view.vercel.app/_next/static/media/4.57ff8e86.jpg';
const imgWebUrl5 =
  'https://react-photo-view.vercel.app/_next/static/media/5.7ace37c7.jpg';
const imgWebUrl6 =
  'https://react-photo-view.vercel.app/_next/static/media/6.0271162c.jpg';

const imgUrl = [
  imgUrl1,
  imgUrl2,
  imgUrl3,
  imgWebUrl1,
  imgWebUrl2,
  imgWebUrl3,
  imgWebUrl4,
  imgWebUrl5,
  imgWebUrl6,
];

const App = () => {
  let source: IImgItem[] = [];
  const N = 18;
  for (let i = 0; i < N; i++) {
    source.push({
      id: String(i + 1),
      src: imgUrl[i % imgUrl.length],
      desc: 'hello 哈就范德萨',
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
