const heading1 = React.createElement(
    "h1",
    {
        id:"head1"
    },
    "First Heading"
)

const heading2 = React.createElement(
    "h2",
    {
        id:"head2"
    },
    "Second Heading"
)

const container = React.createElement(
    "div",
    {
        id:"cotainer"
    },
    [heading1,heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);