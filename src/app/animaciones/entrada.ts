import { Animation } from 'ionic-angular';

export function entrada(AnimationC: Animation, baseEl: HTMLElement): Promise<Animation> {

    //const baseAnimation = new Animation();
    const ele = this.enteringView.pageRef().nativeElement;
    const wrapperAnimation = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
    const baseAnimation = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

    //const ele = this.enteringView.pageRef().nativeElement;
    // const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

    //wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));

    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateX', '100%', '0%');

    return Promise.resolve(baseAnimation
        //.addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(1000)
        .beforeAddClass('show-modal')
        .add(wrapperAnimation));

}