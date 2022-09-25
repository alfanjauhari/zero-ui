import { ComponentProps, ElementType } from 'react';
import { PolymorphicPropsWithRef } from 'react-polymorphic-types';

export type ComponentPropsWithRef<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  E extends ElementType
> = PolymorphicPropsWithRef<ComponentProps<T>, E>;
