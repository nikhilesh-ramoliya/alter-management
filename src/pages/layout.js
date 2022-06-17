import React from 'react'

function Layout(props) {
    return (
        <div className='row border'>
            <div className='col-2 border'>
                {this.props.children}
                hell
            </div>
            <div className='col-10 border'>
                {this.props.children}
                how
            </div>
        </div>
    )
}

export default Layout