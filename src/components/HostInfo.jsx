import React, { useState } from "react";
import { host, versions } from "uxp";
import { app } from "photoshop";
import './HostInfo.css';

export const HostInfo = () => {
    const [ localeInfo, setLocaleInfo ] = useState("");
    const [ nameInfo, setNameInfo ] = useState("");
    const [ hostVersInfo, setHostVersInfo ] = useState("");
    
    const [ version, setVersion ] = useState("");

    const [ fgColor, setFG ] = useState("");
    const [ bgColor, setBG ] = useState("");

    const getThemeInfo  = (type) => {
        if (type=='fg'){
            const fg = app.foregroundColor.rgb;
            const fgColor = ("R: " + fg.red + "; ") + 
                            ("G: " + fg.green + "; ")+ 
                            ("B: " + fg.blue);
            setFG(fgColor);
        }
        else {
            const bg = app.backgroundColor.rgb;
            const bgColor = ("R: " + bg.red + "; ") + 
                            ("G: " + bg.green + "; ")+ 
                            ("B: " + bg.blue);
            setBG(bgColor);
        }
    }
    
    return (
        <>
        {/* Host Information   */}
        <sp-heading>Host Information</sp-heading>
        <div className="container">
            <div className = "row">
                <sp-button size="s" variant="primary"
                    onClick={() => setLocaleInfo(host.uiLocale)}>
                    uiLocale
                </sp-button>
                <sp-textfield value={localeInfo}></sp-textfield>
            </div>
            <div className = "row">
                <sp-button size="s" variant="primary"
                    onClick={() => setNameInfo(host.name)}>
                    Name
                </sp-button>
                <sp-textfield value={nameInfo}></sp-textfield>
            </div>
            
            <div className="row">
                <sp-button size="s" variant="primary"
                        onClick={() => setHostVersInfo(host.version)}>
                        Version
                </sp-button>
                <sp-textfield value={hostVersInfo}></sp-textfield>
            </div>       
        </div>

        {/*  UXP Version */}
        <sp-heading>UXP Version</sp-heading>
        <div className="container">
            <div className="row">
                <sp-button 
                        size="s" variant="primary"
                        onClick={() => setVersion(versions.uxp.substr())}>
                        Version
                </sp-button>
                <sp-textfield value={version}></sp-textfield>
            </div>
        </div>


        {/*  Theme Info */}
        <sp-heading>Theme Info</sp-heading>
        <div className="container">
            <div className = "row">
                <sp-button size="s" variant="primary"
                    onClick={() => getThemeInfo('bg')}>
                    Background
                </sp-button>
                <sp-textfield value={bgColor}></sp-textfield>
            </div>
            <div className = "row">
                <sp-button size="s" variant="primary"
                    onClick={() => getThemeInfo('fg')}>
                    Foreground Color
                </sp-button>
                <sp-textfield value={fgColor}></sp-textfield>
            </div>     
        </div>   
        </>
    );

}