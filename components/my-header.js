import config from "./config.js";
export default class myHeader extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await ( await fetch(config.uri(myHeader.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(e){
        console.log("pickaste en el header",e);
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.MyHead = this.shadowRoot.querySelector("button");
            this.MyHead.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(myHeader.url), myHeader);