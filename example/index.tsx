import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PhotoPreview, IImgItem } from '../.';

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
  imgWebUrl3,
  imgWebUrl1,
  imgWebUrl2,
  imgWebUrl4,
  imgWebUrl5,
  imgWebUrl6,
];

const dis = [
  'description of picture',
  'Sint velit eveniet. Rerum atque repellat voluptatem quia rerum. Numquam exceptur beatae sint laudantium consequatur. Magni occaecati itaque sint et sit tempore. Nesciunt amet quidem. Iusto deleniti cum autem ad quia aperiam.',
  'A consectetur quos aliquam. In iste aliquid et aut similique suscipit.',
];
const App = () => {
  let [isSingle, setIsSingle] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  let source: IImgItem[] = [];
  const N = 28;
  for (let i = 0; i < N; i++) {
    source.push({
      id: String(i + 1),
      src: imgUrl[i % imgUrl.length],
      desc: dis[i % 3],
    });
  }

  const handleSwitch = () => {
    setIsSingle(!isSingle);
  };

  return (
    <div>
      {visible && (
        <button
          style={{ position: 'fixed', top: 60, zIndex: 10000 }}
          onClick={handleSwitch}
        >
          切换单/多图模式
        </button>
      )}

      <PhotoPreview
        sources={isSingle ? source.slice(0, 1) : source}
        visible={visible}
        onClose={() => {
          console.log('close...');
          setVisible(false);
        }}
      >
        <button onClick={() => setVisible(true)}>open</button>
      </PhotoPreview>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
