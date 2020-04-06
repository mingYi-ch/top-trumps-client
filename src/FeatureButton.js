import React from "react";

function FeatureButton(props) {

    return (
        <div>
            <button>
                {props.featureName}: {props.value}
            </button>
        </div>
    );

}

export default FeatureButton;
