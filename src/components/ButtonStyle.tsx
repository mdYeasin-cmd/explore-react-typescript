import React, { CSSProperties } from 'react';

type ButtonStyleProps = {
    btnStyle: CSSProperties
}

const ButtonStyle = ({ btnStyle }: ButtonStyleProps) => {
    return (
        <div style={btnStyle}>
            buttonStyle
        </div>
    );
};

export default ButtonStyle;