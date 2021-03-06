/* @flow */

export function containerTemplate({ props, CLASS } : { props : Object, CLASS : Object }) : string {

    let style = props.style || {};
    let label = style.label || 'checkout';

    return `

        <style>
            .paypal-button-parent {
                font-size: 0;
                display: inline-block;
                max-width: 500px;
            }

            .paypal-button-parent.paypal-button-parent-label-checkout {
                min-width: 80px;
            }

            .paypal-button-parent.paypal-button-parent-label-credit,
            .paypal-button-parent.paypal-button-parent-label-buynow,
            .paypal-button-parent.paypal-button-parent-label-pay {
                min-width: 148px;
            }
            
        </style>

        <div class="paypal-button-parent paypal-button-parent-label-${ label } ${ CLASS.ELEMENT }"></div>

    `;
}
