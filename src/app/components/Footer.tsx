// Footer.tsx
import React from 'react';
import propTypes from 'prop-types';
interface FooterProps {
    year: number;
    company?: string;
}

// functional/presentation component
// Create and Return V.dom
// SFC - Stateless Functional Component
const  Footer: React.SFC<FooterProps> = (props) => {
    
    return (
        <div>
            <hr />
            <p>Copyrights @{props.year}, {props.company} </p>
            {props.children}
        </div>
    )
}

Footer.defaultProps = {
    // when the props are not passed from parent
    company: 'Product App'
}

Footer.propTypes={
   year: propTypes.number.isRequired,
   company: propTypes.string.isRequired
};

export default Footer;