import React from "react";
import Button from '@material-ui/core/Button';

function FeatureButton(props) {
    return (
        <div>
            <Button size="medium" color="primary"
                onClick = {() => props.handleSelection(props.featureName)}
            >
                {props.featureName}: {props.value}
            </Button>
        </div>
    );
}

export default FeatureButton;
