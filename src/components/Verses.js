import React, { useEffect, useRef } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import '../styles.css'

const Verses = props => {
    const ref = useRef()

    useEffect(() => {
        ref.current.addEventListener('fullscreenchange', (e) => {
            if (!document.fullscreenElement) {
                props.exitFullScreen()
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handle = useFullScreenHandle()
    useEffect(() => {
        if (props.fullScreen) {
            handle.enter()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    return (
        <div>
            <FullScreen handle={handle}>
                <div ref={ref} className="full-screen">
                    {props.title}
                    {props.verses}
                </div>

            </FullScreen>
        </div>
    )
}

export default Verses