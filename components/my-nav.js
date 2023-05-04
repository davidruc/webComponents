import config from "./config.js";
export default class myNav extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await ( await fetch(config.uri(myNav.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(e){
        console.log("botón de mi navarrrrr", e);
        e.preventDefault();
    }

    connectedCallback(){
           Promise.resolve(myNav.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.myNa = this.shadowRoot.querySelector("button");
            this.myNa.addEventListener("click",this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(myNav.url), myNav);