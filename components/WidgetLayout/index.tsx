import React, { PropsWithChildren } from 'react'
import styles from './index.module.css'

interface Props {}

const WidgetLayout = (props: PropsWithChildren<Props>) => {
    const { children } = props
    return <div className={styles.widgetLayout}>{children}</div>
}

export default React.memo(WidgetLayout)
