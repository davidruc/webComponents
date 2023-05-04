import config from "./config.js";
import myHeader from "./my-header.js";

export default class mySelecction extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await (await fetch(config.uri(mySelecction.url))).text();
    }
    constructor(){
        super();
        console.log(import.meta);
        this.attachShadow({mode:"open"});
    }
    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(e){
        console.log("puesta pa darle placer", e);
        e.preventDefault();
    }
    handleEvent2(e){
        (e.type === "click") ? this.enviarSegundo(e) : undefined;
    }
    enviarSegundo(e){
        console.log("bebesita bebelin", e);
        e.preventDefault()
    }
    connectedCallback(){
        Promise.resolve(mySelecction.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.mySelect = this.shadowRoot.querySelector("#btn1");
            this.mySelect2 = this.shadowRoot.querySelector(".btn2");
            this.mySelect.addEventListener("click", this.handleEvent.bind(this))
            this.mySelect2.addEventListener("click", this.handleEvent2.bind(this))
        })
    }
}
customElements.define(config.name(mySelecction.url), mySelecction)