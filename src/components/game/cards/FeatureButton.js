import React from "react";


function FeatureButton(props) {
    return (
        <div>
            <button
                onClick = {() => props.handleSelection(props.featureName)}
            >
                {props.featureName}: {props.value}
            </button>
        </div>
    );
}

export default FeatureButton;
