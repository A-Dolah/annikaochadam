import cn from 'classnames'
import { FC } from 'react'

import styles from './artDeco.module.css'

const ArtDecoDivider: FC = ({ children }) => (
  <div className={cn(styles.squareDecoContainer, styles.squareDecoContainer)}>
    <div className={`flex flex-col ${styles.squareDecoContent}`}>{children}</div>
    <div className={cn(styles.squareDecoInner)} />
  </div>
)

export default ArtDecoDivider
