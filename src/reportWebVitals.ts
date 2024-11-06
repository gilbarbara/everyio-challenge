import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

export default function reportWebVitals(fn?: (params: any) => void) {
  if (process.env.NODE_ENV === 'production' || !fn) {
    return;
  }

  onCLS(fn);
  onFCP(fn);
  onINP(fn);
  onLCP(fn);
  onTTFB(fn);
}
