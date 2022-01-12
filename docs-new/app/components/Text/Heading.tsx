import { CSSProperties, forwardRef, ReactNode } from 'react'
import { getFontStyles } from '~/styles/fontStyles'

import { styled, ScaleValue, CSS, dark } from '~/styles/stitches.config'

export interface HeadingProps {
  tag?: keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  >
  fontStyle?: ScaleValue<'fontSizes'>
  className?: string
  children?: ReactNode
  css?: CSS
  weight?: CSSProperties['fontWeight']
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      tag = 'h1',
      fontStyle = '$S',
      weight = 400,
      className,
      children,
      css,
      ...restProps
    },
    ref
  ) => {
    return (
      <HeadingElement
        className={className}
        ref={ref}
        as={tag}
        css={{
          fontWeight: weight,
          ...getFontStyles(fontStyle),
          ...css,
        }}
        {...restProps}>
        {children}
      </HeadingElement>
    )
  }
)

const HeadingElement = styled('h1', {})