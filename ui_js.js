function color(fc, bc, id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.color = fc;
        element.style.backgroundColor = bc;
    } else {
        console.error(`Element with id ${id} not found`);
    }
}

class TopImg extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const img = document.createElement('img');
        const src = this.getAttribute('src');
        if (src) {
            img.src = src;
        } else {
            console.error('TopImg: src attribute is missing');
            return; // 提前返回，避免不必要的操作
        }
        img.style.width = "auto";
        img.style.height = "50px";
        shadow.appendChild(img);
    }
}
customElements.define('top-img', TopImg);

class TopA extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const a = document.createElement('button');
        const href = this.getAttribute('href');
        if (href) {
            a.onclick = () => window.location.assign(href);
        } else {
            console.error('TopA: href attribute is missing');
            a.onclick = () => console.warn('No href provided, doing nothing');
        }
        a.innerHTML = this.innerHTML;
        a.style.height = "50px";
        a.style.width = "auto";
        shadow.appendChild(a);
    }
}
customElements.define('top-a', TopA);

