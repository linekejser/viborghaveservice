import React from 'react'

//Icons
import {FaFacebookF, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className="p-5 text-center" style={{background: "#333333"}}>
                <FaFacebookF className="soMeIcon" />
                <FaTwitter className="soMeIcon"/>
            </footer>
        </>
    )
}

export default Footer
