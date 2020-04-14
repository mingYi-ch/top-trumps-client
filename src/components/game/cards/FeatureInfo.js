import React from "react";

function FeatureInfo(props) {

    return (
        <div>
            {props.featureName}: {props.value}
        </div>
    );

}

export default FeatureInfo;
