import { Link } from 'react-router-dom'
import Btn from '../buttons/Btn'
import Input from '../inputs/Input'
import Logo from '../logo/Logo'
import SquaresSeparation from '../squaresSeparation/SquaresSeparation'
import './Footer.scss'
import ItemSocialMedia from '../itemSocialMedia/ItemSocialMedia'

export default function Footer(props) {
    return <footer className={props.className ? `footer ${props.className}` : 'footer'}>
        <SquaresSeparation
            className='squareSeparation__footer'
            colorlineup='navy'
            colorlinedown='navy'
        />
        <section className="sectionFooter__pattern">
            <div>
                <h4 className='h2 text-yellow title__newsletter' >We love <br/> discounts</h4>
                <p className=' h4 text-yellow' >Join our newsletter and find out about our good deals</p>
            </div>
            <div className="input__newsletter">
                <Input 
                    type='primary'
                    placeholder='enter your email'
                />
                <Btn
                    type='secondary'
                    size='xsmall'
                    text='Submit'
                />
            </div>
        </section>
        <section className="sectionFooter__pattern section__menus">
            <Logo name='logo-name'className='logo__footer' />
            <article className='menu__footer main__menusFooter'>
                <ul className="mainMenu__footer">
                    <li>
                        <Link className='text-white' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='text-white' to='/aboutus'>About us</Link>
                    </li>
                    <li>
                        <Link className='text-white' to='/menu'>Menu</Link>
                    </li>
                    <li>
                        <Link className='text-white' to='/sponsorship'>Sponsorship</Link>
                    </li>
                    <li>
                        <Link className='text-white' to='/contact'>Contact us</Link>
                    </li>
                </ul>
                <ul className="legalMenu__footer">
                    <li>
                        <Link className='text-white'to='/#'>Cookies</Link>
                    </li>
                    <li>
                        <Link className='text-white' to='/#'>Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link className='text-white'to='/#'>Privacy Policy</Link>
                    </li>
                </ul>
            </article>
            <article className="menu__footer">
                <ItemSocialMedia 
                    to='#'
                    name='Instagram'
                    icon='instagram'
                    linkClass='itemSM__footer'
                    iconClass='icon__footer'
                />
                <ItemSocialMedia 
                    to='#'
                    name='Facebook'
                    icon='facebook'
                    linkClass='itemSM__footer'
                    iconClass='icon__footer'
                />
                <ItemSocialMedia 
                    to='#'
                    name='Twitter'
                    icon='twitter'
                    linkClass='itemSM__footer'
                    iconClass='icon__footer'
                />
            </article>
        </section>
    </footer>
}