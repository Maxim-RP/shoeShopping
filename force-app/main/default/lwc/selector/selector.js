/** SELECTOR
 * Parent component
 */
import { LightningElement, wire} from 'lwc';
/** Filtered data from APEX */
import getStockList from '@salesforce/apex/StockController.getStockList'

export default class Selector extends LightningElement {
    /** Product data for product tiles */
    toCartId = [];
    /** Total price of a cart */
    totalPrice = 0;
    /** Filter params for data fetching */
    filterParameters = null;
    /** Saves cart data, calculates total price */
    ontocartHandler(evt) {
        this.toCartId = this.toCartId.concat(evt.detail);
        this.totalPrice = this.totalPrice + evt.detail.Price__c;
    }
    /** Clear cart */
    clearCartHandle() {
        this.toCartId = []
        this.totalPrice = 0;
    }

    orderHandle() {
        console.log('orderHandle')
        //Add order functionality
    }
    /** Saves filter params */
    filterHandle(event) {
        this.filterParameters = event.detail
    }
    /** Gets data with filter params */
    @wire(getStockList, {par: '$filterParameters.color',
                        parr: '$filterParameters.category'}) stock;
}