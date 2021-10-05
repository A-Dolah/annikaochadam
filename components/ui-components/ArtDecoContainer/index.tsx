import cn from 'classnames'
import { FC } from 'react'

import styles from './artDeco.module.css'

const ArtDecoContainer: FC = ({ children }) => (
  <div className={cn(styles.squareDecoContainer, styles.squareDecoContainer)}>
    <div className={`flex flex-col ${styles.squareDecoContent}`}>{children}</div>
    <div className={cn(styles.squareDecoInner)} />
    <div className={cn(styles.squareDecoSquareLeftTop)} />
    <div className={cn(styles.squareDecoSquareLeftBottom)} />
    <div className={cn(styles.squareDecoSquareRightTop)} />
    <div className={cn(styles.squareDecoSquareRightBottom)} />
    <div className={cn(styles.squareDecoTall)} />
    <div className={cn(styles.squareDecoWide)} />
  </div>
)

export default ArtDecoContainer
