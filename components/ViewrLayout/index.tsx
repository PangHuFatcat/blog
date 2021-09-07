import React, { PropsWithChildren, HTMLProps, useImperativeHandle, useRef, Ref } from 'react'

interface Props {}

interface Refs {}

const ViewrLayout = (props: PropsWithChildren<Props>) => {
    const { children } = props
    return <div>{children}</div>
}

export default ViewrLayout
