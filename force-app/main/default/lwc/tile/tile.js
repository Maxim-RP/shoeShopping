/** TILE 
 * Product card
*/
import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    /** Product card data */
    @api product;
    /** Send product data to add to a cart */
    handleClick() {
        this.dispatchEvent(new CustomEvent('tocart', {
            detail: this.product
        }));
    }
}
