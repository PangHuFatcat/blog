import React, { PropsWithChildren } from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

interface Props {
    styleType?: Style.Widget.styleType
    size?: Style.Widget.size
    className?: string
}

const WidgetLayout = (props: PropsWithChildren<Props>) => {
    const { children, className, styleType = 'default', size = 'default' } = props

    return (
        <div
            className={classnames(styles.widgetLayout, className, styles[styleType], styles[size])}
        >
            {children}
        </div>
    )
}

export default React.memo(WidgetLayout)
