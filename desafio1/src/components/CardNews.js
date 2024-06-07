class CardNews extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
e

    }

    build() {
        const componentRoot = document.createElement("div"); //Estou criando um componente "div"
        componentRoot.setAttribute("class", "card"); //dentro deste componente eu estou setando uma classe card

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
        
        const author = document.createElement("span");
        const linkTitle = document.createElement("a");
        const noticeContent = document.createElement("p");

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(noticeContent);

        const cardRight = document.createElement("div"); 
        cardRight.setAttribute("class", "card__right");
        const noticeImage = document.createElement("img");

        cardRight.appendChild(noticeImage);

        componentRoot.appendChild(cardLeft); //Estou dizendo que meu componente div chamado cardLeft é filho de componentRoot, está dentro de componentRoot
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {

    }
}

customElements.define("card-news", CardNews);