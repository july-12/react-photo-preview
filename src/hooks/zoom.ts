import * as React from 'react';
import WZoom from 'vanilla-js-wheel-zoom';

const extinction = 0.04;
export function useZoom(): [
  any,
  React.MutableRefObject<HTMLDivElement | null>,
  React.MutableRefObject<
    | {
        changeSlider: (val: number) => void;
      }
    | undefined
  >
] {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const zoomRef = React.useRef<{ changeSlider: (val: number) => void }>();
  const [wzoom, setWZoom] = React.useState<any>();

  React.useEffect(() => {
    if (ref.current && !wzoom) {
      let el = ref.current;
      let wzoom = WZoom.create(el.firstChild, {
        dragScrollableOptions: {
          smoothExtinction: extinction,
          onGrab: function () {
            el.style.cursor = 'grabbing';
          },
          onDrop: function () {
            el.style.cursor = 'pointer';
          },
        },
        smoothExtinction: extinction,
        minScale: 0.1,
        maxScale: 5,
        speed: 4,
        zoomOnClick: false,
        prepare: function () {
          setTimeout(() => {
            if (wzoom) {
              wzoom._zoom(1);
              setWZoom(wzoom);
            }
          }, 0);
        },
        rescale: function () {
          zoomRef.current?.changeSlider(wzoom.content.currentScale);
        },
      });
    }
  }, [wzoom, ref.current]);

  return [wzoom, ref, zoomRef];
}
