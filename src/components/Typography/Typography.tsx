import React from 'react';
import s from './typography.module.scss'

type Tag = 'div' | 'span' | 'h1' | 'h2' | 'p'
type Variant = 'title-1' | 'body-1' | 'body-2' | 'label-1'

interface TypographyProps {
   tag: Tag
   variant: Variant
   children: string
}

const Typography: React.FC<TypographyProps> = ({tag, variant, children}) => {
   const Component = tag

   return <Component className={s[variant]}>{children}</Component>
};

export default Typography;