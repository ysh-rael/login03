import alterClass from "./alterClass";
export default function (visible) { alterClass({test: visible, selector: '.Modal_default', classCSS: 'closed'}) }