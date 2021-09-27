import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assests/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { signOutStart } from '../../redux/user/user.actions'


function Header({currentUser, hidden, signOutStart}) {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop' >SHOP</Link>
                <Link className="option" to='/contact' >CONTACT</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={signOutStart} >SIGN OUT</div>
                    : <Link className="option" to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,  
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
