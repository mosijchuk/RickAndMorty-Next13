import React from 'react';
import s from './typography.module.scss'

type Tag = 'div' | 'span' | 'h1' | 'h2' | 'p'
type Variant = 'title-1' | 'title-2' | 'body-1' | 'body-2' | 'label-1'
type Color = 'light' | 'dark'

interface TypographyProps {
   tag: Tag
   variant: Variant
   color?: Color
   children: string
}

const Typography: React.FC<TypographyProps> = ({tag, variant, color = 'dark', children}) => {
   const Component = tag

   return <Component className={`${s[variant]} ${s[color]}`}>{children}</Component>
};

export default Typography;