/** CATEGORY FILTER */
import { LightningElement } from 'lwc';

export default class CategoryFilter extends LightningElement {
    /** Picked parameters */
    value = [];
    /** All available categories */
    all = ['Boots', 'Trainers', 'Casual'];
    /** Checkbox labels */
    get options() {
        return [
            { label: 'Boots', value: 'Boots' },
            { label: 'Trainers', value: 'Trainers' },
            { label: 'Casual', value: 'Casual' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }
     /** Saves picked params from event, sends data to FILTER */
    /** No picked categories == all categories*/
    handleChange(e) {
        this.value = e.detail.value;
        this.dispatchEvent(new CustomEvent('category', {
            detail: Object.values(this.value).length === 0 ? Object.values(this.all) : Object.values(this.value)
        }));
    }
    /** Activates all categories on start */
    connectedCallback() {
        this.dispatchEvent(new CustomEvent('category', {
            detail: Object.values(this.all)
        }));
    }
}