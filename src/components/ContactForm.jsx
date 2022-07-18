import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div className="lead p-3 ">Name:</div>
            <div className="input-group block">
                <input type="text" className="form-control mx-3" placeholder="Input" />
            </div>
            <div className="lead p-3 ">Email:</div>
            <div className="input-group">
                <input type="text" className="form-control mx-3" placeholder="Input" />
            </div>
            <div className="lead p-3 ">Phone:</div>
            <div className="input-group">
                <input type="text" className="form-control mx-3" placeholder="Input" />
            </div>
            <div className="lead p-3 ">Address:</div>
            <div className="input-group">
                <input type="text" className="form-control mx-3" placeholder="Input" />
            </div>
        </div>
    );
};

export default ContactForm;