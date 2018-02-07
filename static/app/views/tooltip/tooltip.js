const View = require('../view');
const template = require('./tooltip.mustache');

/**
 * Class representing a Tooltip View
 */
class TooltipView extends View {
    /**
     * Create an instance.
     *
     * @param {Object} container - Container to render in
     * @param {Object} model - Model to represent
     */
    constructor(container, model) {
        super(template, container, model);
        this.update(model);
    }

    /**
     * Hide toolip on click
     */
    hideTooltip() {
        const tooltipVisible = document.querySelector('.tooltip_visible');
        console.log('tooltip view: hideTooltip');
        if (tooltipVisible) {
            tooltipVisible.classList.remove('tooltip_visible');
        }
    }

    toggleVisible(e) {
        const tooltip = document.querySelector('.js-tooltip');
        tooltip.classList.add('tooltip_visible');
        tooltip.style.left = `${e.CurrentX}px`;
        tooltip.style.left = `${e.CurrentY}px`;

        this._addEventListener('body', 'click', (e) => {
            if (!e.target.matches('.js-tooltip-tr')) {
                return;
            }
            this.hideTooltip();
        });
    }

    /**
     * Toggle Tooltip on click
     * @param {Object} event - event
     */
    // showTooltip(event) {
    //     event.stopPropagation();
    //
    //     if (!event.target.matches('.js-tooltip-trigger')) {
    //         return;
    //     }
    //
    //     //event.target.querySelector('.tooltip').classList.add('tooltip_visible');
    // }

    _initListeners() {
        this._addEventListener('.js-event-edit', 'click', (e) => {
            this._dispatcher.trigger(
                'tooltip-view:edit-event',
                e.target.attributes['data-event-id'].value,
            );
        });
    }
}

module.exports = TooltipView;
