import type { ImgHTMLAttributes } from 'react';

type StubProps = ImgHTMLAttributes<HTMLImageElement> & {
  readonly fill?: boolean;
  readonly priority?: boolean;
};

const NextImageStub = ({ fill: _fill, priority: _priority, alt = '', ...rest }: StubProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img alt={alt} {...rest} />
);

export default NextImageStub;
