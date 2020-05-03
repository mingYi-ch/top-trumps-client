import React from "react";
import Button from '@material-ui/core/Button';

function FeatureInfo(props) {

    let feature = (props.hide) ? "???" : props.value;
    
    return (
        <div>
            <Button size="medium" color="primary" disabled>
                {props.featureName}: {feature}
            </Button>
        </div>
    );

}

export default FeatureInfo;
