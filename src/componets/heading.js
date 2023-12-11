export default function Heading(props) {
    const STYLE = {
        fontSize: "1.5em",
        color: `${props.color}`
    }

    switch (props.level) {
        case "1":
            return <h1 style={STYLE}>{props.children}</h1>
        case "2":
            return <h2 style={STYLE}>{props.children}</h2>
        case "3":
            return <h3 style={STYLE}>{props.children}</h3>
        case "4":
            return <h4 style={STYLE}>{props.children}</h4>
        case "5":
            return <h5 style={STYLE}>{props.children}</h5>
        case "6":
            return <h6 style={STYLE}>{props.children}</h6>

        default:
            return <h2 style={STYLE}>{props.children}</h2>
    }
    // return <h1>{props.content}</h1>
}