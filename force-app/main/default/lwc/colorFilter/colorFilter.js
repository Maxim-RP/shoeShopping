/** COLOR FILTER */
import { LightningElement } from 'lwc';

export default class ColorFilter extends LightningElement {
    /** Picked parameters */
    value = [];
    /** All available colors */
    all = ['Brown', 'Navy', 'Green', 'Blue'];
    /** Checkbox labels */
    get options() {
        return [
            { label: 'Brown', value: 'Brown' },
            { label: 'Navy', value: 'Navy' },
            { label: 'Green', value: 'Green' },
            { label: 'Blue', value: 'Blue' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }
    /** Saves picked params from event, sends data to FILTER */
    /** No picked colors == all colors*/
    handleChange(e) {
        this.value = e.detail.value;
        this.dispatchEvent(new CustomEvent('color', {
            detail: Object.values(this.value).length === 0 ? this.all : Object.values(this.value)
        }));
    }
    /** Activates all colors on start */
    connectedCallback() {
        this.dispatchEvent(new CustomEvent('color', {
            detail: Object.values(this.all)
        }));
    }
}