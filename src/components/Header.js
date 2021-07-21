import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Dicsik listája</Link>
            <Link to="/songs/new" className="item">Új dicsi</Link>
        </div>
    )
}
export default Header