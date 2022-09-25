import { styled } from '@zero-ui/core';
import { ComponentPropsWithRef } from '@zero-ui/types';
import { ElementType } from 'react';
import { buttonStyles } from './button.styles';

export const Button = styled('button', buttonStyles);

export type ButtonProps<E extends ElementType = 'button'> =
  ComponentPropsWithRef<typeof Button, E>;
