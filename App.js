// creating nexted div and h1 tag

const parent = React.createElement("div", {id:"parent"}, 
               [React.createElement("div", {id:"child"}, 
               [React.createElement("h1", {}, "Iam from nexted react h1 tag in child-1"), 
               React.createElement("h2", {}, "Iam from nexted react h2 tag in child-1")]),  
               React.createElement("div", {id:"child2"}, 
                [React.createElement("h1", {}, "Iam from nexted react h1 tag in child-2"), 
                React.createElement("h2", {}, "Iam from nexted react h2 tag in child-2")])])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)