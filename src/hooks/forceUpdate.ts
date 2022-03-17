import * as React from 'react';

export function useForceUpdate() {
  const [val, setVal] = React.useState(0);
  return () => setVal(val + 1);
}
