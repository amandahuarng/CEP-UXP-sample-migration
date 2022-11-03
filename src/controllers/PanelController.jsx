import ReactDOM from "react-dom";

const PanelController = (component, { menuItems = [], invokeMenu = () => {} }) => {
  // console.log(component)
  var root = null,
      attachment = null;
  
  const controller = {
    
    create() { 
        root = document.createElement("div");
        root.style.height = "100vh";
        root.style.overflow = "auto";
        root.style.padding = "10px 20px";
        ReactDOM.render(component, root);
        console.log("Panel created") 
    },

    destroy() {
        console.log("Panel destroyed") 
    },

    show(body) {
        if (!attachment) {
            console.log("attachment")
            attachment = body; // the body
            attachment.appendChild(root);
            console.log("attachment set", attachment)
        }
        console.log("Panel shown")
    },
    
    hide() {
        console.log("hide")
        if (attachment && root) {
            attachment.removeChild(root);
            attachment = null;
            }
            console.log("Panel hidden")
        },
        menuItems, 
        invokeMenu
  };
  console.log("controller", controller.hide)
  return controller;
}
 
export default PanelController;