import {gsap} from 'gsap'

const sizeState = {
    'BIG': 'big',
    'SMALL': 'small'
}

class Navbar {
    sizeState = undefined

    constructor() {
        this.sizeState = sizeState.BIG
    }

    adjust = () => {
        let currentstate = window.innerWidth > 800 ? sizeState.BIG : sizeState.SMALL
        if (this.sizeState !== currentstate) {
            this.sizeState = currentstate
            this._navAdjust()
        }
    }
    _navAdjust = () => {
        switch (this.sizeState) {
            case sizeState.SMALL:
                this.navBecomeSmall()
                break
            case sizeState.BIG:
                this.navBecomeBig()
                break
            default:
                break
        }
    }
    navBecomeSmall = () => {
        const tween = gsap.timeline()
        tween.to('nav', {duration: 0.6, ease: 'power2', opacity: 0, x: 300, display: 'none'})
        tween.to('header i', {duration: 0.3, opacity: 1, display: 'flex'})
    }
    navBecomeBig = () => {
        const tween = gsap.timeline()
        tween.to('header i', {duration: 0.3, opacity: 0, display: 'none'})
        tween.to('nav', {duration: 0.6, ease: 'power2', opacity: 1, x: 0, display: 'flex'})
        /* 让menu消失，与header的动画同时进行，互不干扰*/
        gsap.to('.menu', {duration: 1, ease: 'power2', opacity: 0, display: 'none'})
    }
}

const navbar = new Navbar()
export {navbar}
