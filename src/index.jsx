import React from "react";
import "./styles.css";
import  PanelController  from "./controllers/PanelController.jsx";
import { System } from "./panels/System";
import { ColorDemo } from "./panels/Demos";
import { entrypoints } from "uxp";

const SystemInfo = PanelController(<System />, {});
const ColorPickerDemo = PanelController(<ColorDemo />, {});

entrypoints.setup({
    panels: {
        general: SystemInfo,
        colorDemo: ColorPickerDemo
    }
    
})
