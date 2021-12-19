
import React from 'react';
import './button.scss';

export function CompButton(props) {
    <button
        className={`btn ${props.className}`}
        onClick={props.onClick ? () => props.onClick() : null}>
        {props.children}
    </button>
}

export function CompOutlineButton(props) {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func
}
