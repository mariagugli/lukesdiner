import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import './Topbar.scss'
import Btn from '../buttons/Btn'

export default function Topbar(props) {
    return <div className={props.className ? `topbar ${props.className}` : 'topbar'}>
        <Logo name='logo-symbol' className={props.logoClass ? props.logoClass : ''} />
        <Btn 
            type='burgerMenu'
            className={props.btnBurgerMenuClass ? `burgerMenu--closed ${props.btnBurgerMenuClass}` : 'burgerMenu--closed'}
            onClick={props.handleBtnBurgerMenu}
            >
            <span className="line__burgerMenu--closed"></span>
            <span className="line__burgerMenu--closed"></span>
            <span className="line__burgerMenu--closed"></span>
        </Btn>
        <nav className="nav__topbar">
            <Link className={props.linkMenu ? `link__nav h6 ${props.linkMenu}` : 'link__nav h6 '} to='/' >Home</Link>
            <Link className={props.linkMenu ? `link__nav h6 ${props.linkMenu}` : 'link__nav h6'} to='/aboutus' >About us</Link>
            <Link className={props.linkMenu ? `link__nav h6 ${props.linkMenu}` : 'link__nav h6'} to='/menu' >Menu</Link>
            <Link className={props.linkMenu ? `link__nav h6 ${props.linkMenu}` : 'link__nav h6'} to='/sponsorship' >Sponsorship</Link>
            <Link className={props.linkMenu ? `link__nav h6 ${props.linkMenu}` : 'link__nav h6'} to='/contact' >Contact us</Link>
        </nav>
    </div>
}