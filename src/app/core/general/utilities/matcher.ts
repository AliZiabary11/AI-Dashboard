import { UrlSegment } from '@angular/router';

export function startsWith(prefix: string) {
  return (segments: UrlSegment[]): any => {
    if (segments.length === 0 || !segments[0].path.startsWith(prefix)) {
      return null;
    }

    return {
      consumed: [segments[0]],
      posParams: {
        prefix: new UrlSegment(segments[0].path, {})
      }
    };
  };
}
