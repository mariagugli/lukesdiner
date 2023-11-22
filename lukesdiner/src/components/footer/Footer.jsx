import { Link } from 'react-router-dom'
import Btn from '../buttons/Btn'
import Input from '../inputs/Input'
import Logo from '../logo/Logo'
import SquaresSeparation from '../squaresSeparation/SquaresSeparation'
import './Footer.scss'

export default function Footer(props) {
    return <footer className={props.className ? `footer ${props.className}` : 'footer'}>
        <SquaresSeparation
            className='squareSeparation__home'
            colorlineup='navy'
            colorlinedown='navy'
        />
        <section className="sectionFooter__pattern">
            <div>
                <h4 className='h2 text-yellow title__newsletter' >We love discounts</h4>
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
        <section className="sectionFooter__pattern">
            <Logo name='logo-name'className='logo__footer' />
            <div className='menu__footer'>
                <ul className="mainMenu__footer">
                    <li>
                        <Link className='text-white'>Home</Link>
                    </li>
                    <li>
                        <Link className='text-white'>About us</Link>
                    </li>
                    <li>
                        <Link className='text-white'>Menu</Link>
                    </li>
                    <li>
                        <Link className='text-white'>Sponsorship</Link>
                    </li>
                    <li>
                        <Link className='text-white'>Contact us</Link>
                    </li>
                </ul>
                <ul className="legalMenu__footer">
                    <li>
                        <Link></Link>
                    </li>
                </ul>
            </div>
            
        </section>
    </footer>
}