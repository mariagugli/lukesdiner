import Btn from '../buttons/Btn'
import ItemSocialMedia from '../itemSocialMedia/ItemSocialMedia'
import Logo from '../logo/Logo'
import './BurgerMenu.scss'

export default function BurgerMenu() {
    return <>
        <Btn type='burgerMenu' className="burgerMenu--closed">
            <span className="line__burgerMenu--closed"></span>
            <span className="line__burgerMenu--closed"></span>
            <span className="line__burgerMenu--closed"></span>
        </Btn>
        <div className="burgerMenu--open">
            <div className="topbar__burgerMenu--open">
                <Logo name='logo-name' className='logo__topbar__burgerMenu'/>
                <Btn type='close' size='xsmall' icon='cross'/>
            </div>
            {/* <Cart /> */}
            <Btn isLink={true} to='/' type='primary' size='small' text='Home' />
            <Btn isLink={true} to='/aboutus' type='primary' size='small' text='About us' />
            <Btn isLink={true} to='/menu' type='primary' size='small' text='Menu' />
            <Btn isLink={true} to='/sponsorship' type='primary' size='small' text='Sponsorship' />
            <Btn isLink={true} to='/contact' type='primary' size='small' text='Contact us' />
            <ul className="list__socialMenu">
                <ItemSocialMedia icon='instagram' name='Instagram' to='#' />
                <ItemSocialMedia icon='facebook' name='Facebook' to='#' />
                <ItemSocialMedia icon='twitter' name='Twitter' to='#' />
            </ul>
        </div>
    </>
}