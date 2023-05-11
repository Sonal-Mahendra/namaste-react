const heading = React.createElement("h1",{id:"heading"},"Hi Welcome to my first Program")
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


/**<div id="parent">
 * <div id="child">
 * <h1>Its H1 Tag</h1>
 * </div>
 * </div>
 *  */


const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[React.createElement("h1",{id:"h1"},"I am H! tag"),React.createElement("h1",{id:"h1"},"I am H! tag")]))

root.render(parent);