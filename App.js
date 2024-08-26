import React from "react";
import ReactDOM from "react-dom/client";

//React element

// React.createElement => React Element (JS Object) => HTML Element (render)

//create reactElement using core react
const heading = React.createElement("h1", {id: "heading"}, "React Learning");

console.log(heading)

// JSX => transpiles it to React.createElement =>  React Element (JS Object) => HTML Element (render)

//create reactElement using JSX syntax. It is same as above sentence
// const jsxHeading = <h1 id="heading">React with JSX</h1>

const jsxHeading = (<h1 id="heading">
    React with JSX
    </h1>)


//React Component
const HeadingComponent = () => {
    return <h1>This is a react functional component</h1>;
}

const ShortHandComponent = () => <h1>This is a shorthand functional component.</h1>

const number = 1000;

const AnotherWayToWriteComponent = () => (
    <div id="container">
        <HeadingComponent />
        <NormalFunctionForReactExample />
        <h3>This also a react functionl component</h3>
        <h4>{number}</h4>
        <div>{jsxHeading}</div>
    </div>
)

const NormalFunctionForReactExample = function () {
	return <h2>Normal function example </h2>;
} 

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AnotherWayToWriteComponent />);