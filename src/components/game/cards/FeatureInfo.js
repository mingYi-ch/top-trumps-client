import React from "react";
import Button from '@material-ui/core/Button';

function FeatureInfo(props) {

    return (
        <div>
            <Button size="medizm" color="primary" disabled>
                {props.featureName}: {props.value}
            </Button>
        </div>
    );

}

export default FeatureInfo;
