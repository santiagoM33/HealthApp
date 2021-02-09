import React from 'react';
import H2 from './base/H2';
import './styles.css';

const HeadLog = ({infoForm, avatar}) => {

    return ( 
        <div>
            <H2>{infoForm.title}</H2>
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col-4 pl-1">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="col-8">
                        <p>{infoForm.desc}</p>
                    </div>
                </div>
                <div className="row">
                    {infoForm.isHome 
                    ? <p className="h6 privacy text-center py-2">{infoForm.privacy}</p>
                    : <button className="btn btn-color">{infoForm.btn}</button>
                }
                </div>
            </div>
            
        </div>
     );
}
 
export default HeadLog;