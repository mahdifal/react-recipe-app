import React from 'react'

export default function index({ switchTheme, currentTheme }) {
    return (
        <div className="form-group" style={{ marginBottom: '0' }}>
            <i className={`far fa-moon ${currentTheme === 'dark' ? 'text-light' : ''}`} aria-hidden="true"></i>
            <label className="ios7-switch">
                <input type="checkbox" name="changeTheme" defaultChecked={switchTheme} onChange={switchTheme} />
                <span></span>
            </label>
            <i className={`far fa-sun ${currentTheme === 'dark' ? 'text-light' : ''}`} aria-hidden="true"></i>
        </div>
    )
} 
