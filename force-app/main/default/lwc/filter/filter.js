/** FILTER */
import { LightningElement } from 'lwc';

export default class Filter extends LightningElement {
    /** Forms filters' params into a single data structure */
    filterParam = {
        category: [],
        color: []
    };
    /** Picked categories */
    categoryHandle(event){
        this.filterParam.category = event.detail
        this.dispatchEvent(new CustomEvent('filter', {
            detail: this.filterParam
        }));
    }
    /** Picked colors */
    colorHandle(event){
        this.filterParam.color = event.detail
        this.dispatchEvent(new CustomEvent('filter', {
            detail: this.filterParam
        }));
    }
}