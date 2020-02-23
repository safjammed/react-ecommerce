import React from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurretUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown/>
        }
        
    </div>
);

/**
 * the state is the root reducer iself
 * user is from the key of rootReducer.js
 * currentUser is taken from userReducer.js
 * 
 * state.user.currentUser
 */
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) =>({
//     currentUser,
//     hidden
// })
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurretUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);