import config from "./config.js";
export default class mySection extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await ( await fetch(config.uri(mySection.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(e){
        console.log("botón my secction", e);
        e.preventDefault();
    }

    connectedCallback(){
           Promise.resolve(mySection.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mySect = this.shadowRoot.querySelector("#btn");
            this.mySect.addEventListener("click",this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(mySection.url), mySection);