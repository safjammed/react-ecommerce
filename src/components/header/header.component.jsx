import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurretUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { HeaderCOntainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
const Header = ({ currentUser, hidden }) => (

    <HeaderCOntainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
                    :
                    <OptionLink to='/signin'>Sign In</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
                <CartDropdown />
        }
    </HeaderCOntainer>

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
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);