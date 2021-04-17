/** CART */
import { LightningElement, api } from 'lwc';

export default class Cart extends LightningElement {
    /** Product data for cart */
    @api tocartid;
    /** Calculated total price */
    @api totalprice;
    visible = false;
    /** Hides cart list if cart is empty */
    renderedCallback() {
        this.totalprice !== 0 ? this.visible = true : this.visible = false; 
    }
    /** CLEAR button */
    handleClickClear() {
        this.dispatchEvent(new CustomEvent('clearcart'));    
    }
    /** ORDER button */
    handleClickOrder() {
        this.dispatchEvent(new CustomEvent('order'));
    }
}