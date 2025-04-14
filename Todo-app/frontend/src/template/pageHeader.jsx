import React from "react";

export default props => (
<header className="page-header" style={{ marginTop: '30px', paddingBottom: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
    <h2>
        {props.name}
        <span style={{ margin: '0 10px', color: '#ccc' }}>–</span>
        <small style={{ fontSize: '0.6em', color: 'gray' }}>{props.small}</small>
    </h2>
</header>


)
