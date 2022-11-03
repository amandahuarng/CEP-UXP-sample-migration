import React from "react";
import { HostInfo } from "../components/HostInfo";
import { Process} from "../components/Process";
import { File } from "../components/File";

const System = () => {
    return (
        <div>
            <sp-heading>Storage APIs</sp-heading>
            <sp-divider size="large"></sp-divider>
                <File />
            <sp-heading>CS APIs Behavior</sp-heading>
            <sp-divider size="large"></sp-divider>
                <HostInfo />
            <sp-heading>Process APIs</sp-heading>
            <sp-divider size="large"></sp-divider>
                <Process />
        </div>
    )
}
export {System};