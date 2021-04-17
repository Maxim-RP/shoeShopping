/** LIST */
import { LightningElement, api } from 'lwc';

export default class List extends LightningElement {
    /** Stock data from selector */
    @api stock
    /** Propagates product data for the cart from TILE to SELECTOR  */
    toCartHandle(evt) {
        console.log('list event')
        this.dispatchEvent(new CustomEvent('tothecart', {
            detail: evt.detail
        }));
    }
}
