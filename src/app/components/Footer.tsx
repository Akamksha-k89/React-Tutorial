import React from 'react';

interface FooterProps
{
   year:number;
   company:string;

}
function Footer(props:FooterProps) {
   return( <div>
            <hr />
            <p>Copyrights of { props.company} { props.year}</p>
        </div>
   );
}

export default Footer;
