import {useServerProps, useUrl} from '@shopify/hydrogen';
import {useEffect} from 'react';

export default function FathomAnalytics() {
  const url = useUrl();
  const {pending} = useServerProps();

  // Track fathom pageviews on mount and URL changes
  useEffect(() => {
    if (!pending) {
      window.fathom?.trackPageview();
    }
  }, [pending, url]);

  return null;
}
