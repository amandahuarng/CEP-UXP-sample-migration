import { storage, shell } from "uxp";
import React, { useState } from "react";
import "./File.css";

export const File = () => {
    const fs = storage.localFileSystem;

    const [ pluginFolder, setPF ] = useState("");
    const [ dataFolder, setDF ] = useState("");

    const [ file, setFile ] = useState("");

    const getExtensionData = async () => {
        const dir = await fs.getDataFolder();
        setDF(dir.nativePath);
    }
    
    const getPluginData = async () => {
        const dir = await fs.getPluginFolder();
        setPF(dir.nativePath);
    }

    const openFilePicker = async () => {
        const selected = await fs.getFileForOpening({allowMultiple: true})
        let documents = "";
        if (selected.length > 0){
            selected.map((i)=> documents += "📁" + i.nativePath + "\n")
        }
        else {
            documents +=  "📁"  + selected[0].nativePath;
        }
        setFile(documents);
    }

    return (
        <>
        {/*  Data Folder and Plugin Folder */}
        <sp-heading>Persistent File Storage</sp-heading>
        <div className="box">
            <div className="item">
                <sp-button 
                    size="s" variant="primary"
                    onClick={getExtensionData}>
                    Data Folder
                </sp-button>
                <sp-textarea value={dataFolder}></sp-textarea>
            </div>
            <div className="item">
                <sp-button 
                    size="s" variant="primary"
                    onClick={getPluginData}>
                    Plugin Folder
                </sp-button>
                <sp-textarea value={pluginFolder}></sp-textarea>
            </div>

            {/*  File Open (file picker) */} 
            <div className="item">
                <sp-button 
                    size="s" variant="primary"
                    onClick={openFilePicker}>
                    Open File (Read Only, Multiple-allowed)
                </sp-button>
                <sp-textarea value={file}>File(s) </sp-textarea>
            </div>
        </div>

            
        </> 
    )
}