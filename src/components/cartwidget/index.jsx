import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <>
            <li>
                <a href="" className="nav-item nav-link" data-toggle="modal" data-target="#cartModal">
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} />
                <span id="cartUnits" class="p-3 text-warning">xx</span>
                </a>
            </li>
        </>
    )
}

export default CartWidget