import React from 'react';

import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected}) {

    function addActive () {

    }
    return (
        <div className={ `sidebarOption ${selected && "sidebarOption--active "}`} onclick={ addActive }>
                <Icon />
                <h3>{ title }</h3>
                <p>{ number }</p>
        </div>
            

    )
}

export default SidebarOption;
