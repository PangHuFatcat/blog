import React, { PropsWithChildren } from 'react'
import Masonry from 'react-masonry-component'
import styles from './index.module.css'

interface Props {
    className?: string
}

const MasonryLayout = (props: PropsWithChildren<Props>) => {
    const { children, className } = props
    return <Masonry className={className}>{children}</Masonry>
}

export default React.memo(MasonryLayout)
