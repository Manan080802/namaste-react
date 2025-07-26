// const heading = React.createElement("h1",{id:"heading"},"Hello world from React!");


/**
 * <div id='root'>
 *  <div id='parent'>
 *     <div id='child'>
 *          <h1>Nested React </h1>
 *      </div>
 * 
 *  </div>
 * </div>
 * 
 */

const heading1 = React.createElement("h1",{},"Nested React!");
const heading2  = React.createElement("h2",{},"Nested React!");
const child = React.createElement("div",{id:"child"},[heading1,heading2]);
const parent = React.createElement("div",{id:"parent"},child)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);