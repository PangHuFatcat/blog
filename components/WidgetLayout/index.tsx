import React, { PropsWithChildren } from 'react'
import classnames from 'classnames'
import styles from './index.module.css'

interface Props {
    size: Style.Widget.size
}

const WidgetLayout = (props: PropsWithChildren<Props>) => {
    const { children, size } = props

    return <div className={classnames(styles.widgetLayout, styles[size])}>{children}</div>
}

export default React.memo(WidgetLayout)
