import React, { PropsWithChildren, useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import classnames from 'classnames'
import styles from './index.module.css'

// 计算rect
const calc = (x: number, y: number, rect?: DOMRect) => {
    const { top = 0, left = 0, height = 0, width = 0 } = rect || {}
    return [-(y - top - height / 2) / 30, (x - left - width / 2) / 30, 1.02]
}

// transform 参数
const trans = (x: number, y: number, s: number) =>
    `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

interface Props {
    size: Style.Widget.size
}

const WidgetLayout = (props: PropsWithChildren<Props>) => {
    const { children, size } = props

    const ref = useRef<HTMLDivElement>(null)

    const [xys, set] = useState([0, 0, 1])

    const styleProps = useSpring({ xys })

    return (
        <div ref={ref}>
            <animated.div
                className={classnames(styles.widgetLayout, styles[size])}
                style={{ transform: styleProps.xys.to(trans) }}
                onMouseLeave={() => set([0, 0, 1])}
                onMouseMove={(e) => {
                    const rect = ref.current?.getBoundingClientRect()
                    set(calc(e.clientX, e.clientY, rect))
                }}
            >
                {children}
            </animated.div>
        </div>
    )
}

export default React.memo(WidgetLayout)
