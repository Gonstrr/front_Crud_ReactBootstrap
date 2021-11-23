
import React from "react";

import AppBar from '@mui/material/AppBar'




class Nav extends React.Component {
    render() {
        return (
            <AppBar
                title="My App"
                style={{
                    background: "#a31545",
                    with: 90,
                    padding: 10,
                    textAlign: "left",
                    alignItems: "left",
                }}
                >
                <div>
                    <h1>Programa de profesionales jovenes </h1>
                </div>
            </AppBar>
    );
}
}
export default Nav;
