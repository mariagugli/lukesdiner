import Square from '../square/Square'
import './SquaresSeparation.scss'

export default function SquaresSeparation(props) {
    return <div className={props.className ? `squareSeparation ${props.className}` : 'squareSeparation'}>
        <div className="lineup__squareSeparation">
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
            <Square color={props.colorlineup} />
        </div>
        <div className="linedown__squareSeparation">
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
            <Square color={props.colorlinedown} />
        </div>
    </div>
}