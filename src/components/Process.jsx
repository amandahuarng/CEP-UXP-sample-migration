import React, { useState } from "react";
import { shell, entrypoints } from "uxp";

export const Process = () => {
    const [ url, setUrl ] = useState("");
    const [ pluginID, setPluginID ] = useState("");
    const openUrl = (url) => {
        // console.log(url)
        // console.log(uxp)
        return shell.openExternal(url);
    }   
    
    return (
        <>
        {/* Open External URL - Not working right now  */}
        {/* uxp.shell object is empty */}
            <sp-textfield 
                placeholder="Enter url here (not working)" 
                onInput={e => setUrl(e.target.value)}></sp-textfield>
            <sp-button size="s" variant="primary"
                onClick={() => openUrl(url)}>
                Open URL
            </sp-button>

            {/* get Plugin ID  */}

            <sp-textfield 
                value={pluginID}></sp-textfield>
            <sp-button size="s" variant="primary"
                onClick={() => setPluginID(entrypoints._pluginInfo.id)}>
                Get Plugin ID
            </sp-button>

            
        </>
        
        
    );
}