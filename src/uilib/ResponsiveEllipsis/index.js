import { useState } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveReactLineEllipsis = responsiveHOC()(LinesEllipsis)

const ResponsiveEllipsis = (props) => {
    const [showFullText, setShowFullText] = useState(false)
    const handelMoreClick = () => {
        setShowFullText(true)
    }
    return (
        showFullText ?
        <div>{props.text}</div> :
        <ResponsiveReactLineEllipsis
              ellipsis={
                <i
                  style={{
                    color: "blue",
                    cursor:'pointer'
                  }}
                  onClick={handelMoreClick}
                >
                  ... more
                </i>
              }
              {...props}
            />
    )
}

export default ResponsiveEllipsis