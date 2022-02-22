import { Directive, ElementRef, HostListener, Input, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, Injector, Inject, Optional, SimpleChanges } from '@angular/core'
import { TooltipComponent } from './tooltip.component'

export interface AdComponent {
    data: any
    show: boolean
    close: boolean
}

export const defaultOptions = {
	'placement': 'top',
	'contentType': 'string',
	'showDelay': 0,
	'animationDuration': 300,
	'tooltipClass': '',
	'display': true,
	'offset': 8,
}
export interface TooltipOptions {
    'placement'?: string;
    'contentType'?: 'string' | 'html' | 'template';
    'showDelay'?: number;
    'animationDuration'?: number;
    'tooltipClass'?: string;
    'display'?: boolean;
    'offset'?: number;
}

@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip',
})

export class TooltipDirective {
    showTimeoutId!: number
    componentRef: any
    elementPosition: any
    _options: any = {}
    componentSubscribe: any
    _tooltipClass!: string

    @Input('tooltip') tooltipValue: string = ''
    @Input('placement') placement: string = 'top'
    @Input('display') display: boolean = true
    @Input('offset') offset!: number
    @Input('position') position!: {top: number, left: number}
    @Input('showDelay') showDelay: number = 1000

    @Input('options') set options(value: TooltipOptions) {
        this._options = value
    }
    get options() {
        return this._options
    }

    @Input('tooltip-class') set tooltipClassBackwardCompatibility(value: string) {
        if (value) {
            this._tooltipClass = value;
        }
    }
    @Input('tooltipClass') set tooltipClass(value: string) {
        if (value) {
            this._tooltipClass = value
        }
    }
    get tooltipClass() {
        return this._tooltipClass
    }

    get isTooltipDestroyed() {
        return this.componentRef && this.componentRef.hostView.destroyed
    }

    constructor(
        private elementRef: ElementRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector) {}

    @HostListener('focusin')
    @HostListener('mouseenter')
    onMouseEnter() {
        if (this.display) this.show()
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    onMouseLeave() {
        this.destroyTooltip()
    }

    ngOnChanges(changes: SimpleChanges) {
        let changedOptions = this.getProperties(changes)

        this.applyOptionsDefault(defaultOptions, changedOptions)
    }

    ngOnDestroy(): void {
        this.destroyTooltip()

        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe()
        }
    }

    getProperties(changes: SimpleChanges){
        let directiveProperties:any = {}
        let customProperties:any = {}
        let allProperties:any = {}

        for (var prop in changes) {
            if (prop !== 'options' && prop !== 'tooltipValue'){
                directiveProperties[prop] = changes[prop].currentValue
            }
            if (prop === 'options'){
                customProperties = changes[prop].currentValue
            }
        }

        allProperties = Object.assign({}, customProperties, directiveProperties)
        return allProperties;
    }


    getElementPosition(): void {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect()
    }

    createTooltip(): void {
        this.clearTimeouts()
        this.getElementPosition()

        this.appendComponentToBody(TooltipComponent)

        this.showTimeoutId = window.setTimeout(() => {
            this.showTooltipElem()
        }, this.showDelay)
    }

    destroyTooltip(): void {
        this.clearTimeouts()

        if (this.isTooltipDestroyed == false) {
            this.hideTooltip()
            this.appRef.detachView(this.componentRef.hostView)
            this.componentRef.destroy()
        }
    }

    showTooltipElem(): void {
        this.clearTimeouts();
        ( < AdComponent > this.componentRef.instance).show = true
    }

    hideTooltip(): void {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return
        }
        ( < AdComponent > this.componentRef.instance).show = false
    }

    appendComponentToBody(component: any, data: any = {}): void {
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);

        ( < AdComponent > this.componentRef.instance).data = {
            value: this.tooltipValue,
            element: this.elementRef.nativeElement,
            elementPosition: this.elementPosition,
            options: this.options
        }
        this.appRef.attachView(this.componentRef.hostView);
        const domElem = (this.componentRef.hostView as EmbeddedViewRef < any > ).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem)
    }

    clearTimeouts(): void {
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId)
        }
    }

    applyOptionsDefault(defaultOptions:any, options:any): void {
        this.options = Object.assign({}, defaultOptions || {}, this.options, options)
    }

    public show() {
        if (!this.tooltipValue) {
            return
        }

        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip()
        } else if (!this.isTooltipDestroyed) {
            this.showTooltipElem()
        }
    }

    public hide() {
        this.destroyTooltip()
    }
}
