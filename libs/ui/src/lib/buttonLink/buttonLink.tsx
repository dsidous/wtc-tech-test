import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import { Button, ButtonProps } from '@mono-nx-test-with-nextjs/ui';

const Link = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Button innerRef={ref} {...rest}>
      {children}
    </Button>
  );
});

export const ButtonLink = (props: ButtonProps) => {
  const { children, href, ...rest } = props;
  return (
    <NextLink href={href} passHref>
      <Link {...rest}>{children}</Link>
    </NextLink>
  );
};

export default ButtonLink;
