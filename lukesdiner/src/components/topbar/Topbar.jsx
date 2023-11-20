import { Link } from 'react-router-dom'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import Logo from '../logo/Logo'
import './Topbar.scss'

export default function Topbar(props) {
    return <div className='topbar'>
        <Logo name='logo-symbol'/>
        <BurgerMenu />
        <div className="topbarMenu">
            <Link className={props.linkMenu ? `link__topbarMenu h6 ${props.linkMenu}` : 'link__topbarMenu h6 '} to='/' >Home</Link>
            <Link className={props.linkMenu ? `link__topbarMenu h6 ${props.linkMenu}` : 'link__topbarMenu h6'} to='/aboutus' >About us</Link>
            <Link className={props.linkMenu ? `link__topbarMenu h6 ${props.linkMenu}` : 'link__topbarMenu h6'} to='/menu' >Menu</Link>
            <Link className={props.linkMenu ? `link__topbarMenu h6 ${props.linkMenu}` : 'link__topbarMenu h6'} to='/sponsorship' >Sponsorship</Link>
            <Link className={props.linkMenu ? `link__topbarMenu h6 ${props.linkMenu}` : 'link__topbarMenu h6'} to='/contact' >Contact us</Link>
        </div>
    </div>
}