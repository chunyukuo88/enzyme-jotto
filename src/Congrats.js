import React from "react";
import PropTypes from 'prop-types';
/**
 * Functional react component for congratulatory message.
 * @function
 * @params {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop isn't there).
 */

function Congrats (props) {
        return (props.success)
            ? <div data-test="component-congrats">
                <span data-test="congrats-message">Congrats!</span>
              </div>
            : <div data-test="component-congrats" />;
};

export default Congrats;
