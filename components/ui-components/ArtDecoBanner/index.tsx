import cn from 'classnames'
import { FC } from 'react'

import styles from './artDecoBanner.module.css'

const ArtDecoBanner: FC = () => (
  <div className={cn(styles.titleDecoContainer, styles.container)}>
    <h1 className={cn(styles.content, styles.contentDefault)}>Adam &hearts; Annika</h1>
    <div className={styles.contentDot} />
    <div className={styles.mainDiamondOuter} />
    <div className={styles.mainDiamondInner} />
    <div className={styles.midDiamondLeft} />
    <div className={styles.midDiamondRight} />
    <div className={styles.smallDiamondLeftTop} />
    <div className={styles.smallDiamondLeftBottom} />
    <div className={styles.smallDiamondRightTop} />
    <div className={styles.smallDiamondRightBottom} />
  </div>
)

export default ArtDecoBanner
