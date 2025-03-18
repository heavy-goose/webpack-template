import "./modules/menu.css";

const menu = {
    init: function() {
        this.cacheDom();
        this.createElements();
        this.addElements();
    },
    cacheDom: function() {
        this.content = document.querySelector("#content");
    },
    createElements: function() {
        this.menuContainer = document.createElement("div");
        this.menuContainer.classList.add("menu-content");


        this.menuContainer.innerHTML = `
            <h2>Entrées</h2>

                <div class="menu-item">
                    <p class="menu-dish">Golden Goose Consommé</p>
                    <p class="menu-description">A rich and velvety roasted goose broth, infused with black truffle and served with toasted brioche pearls.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">Celestial Salmon Tartare</p>
                    <p class="menu-description">Hand-cut Atlantic salmon with shallots, capers, and a whisper of citrus zest, delicately kissed with a dill crème fraîche.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">Baked Camembert Cascade</p>
                    <p class="menu-description">A wheel of warm, gooey Camembert drizzled with lavender honey and paired with a crisp baguette.</p>
                </div>

            <h2>Mains</h2>

                <div class="menu-item">
                    <p class="menu-dish">Goose Confit Royale</p>
                    <p class="menu-description">Slow-cooked to golden perfection, this tender goose leg rests on a cloud of buttery potato purée, crowned with a rich red wine reduction.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">The Nobleman's Filet</p>
                    <p class="menu-description">A perfectly seared filet mignon, adorned with delicate foie gras and draped in a decadent truffle-infused cognac sauce.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">Enchanted Woodland Risotto</p>
                    <p class="menu-description">A creamy symphony of wild mushrooms, aged Parmesan, and black truffle essence, served with a touch of midnight magic.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">The Gilded Duck</p>
                    <p class="menu-description">Succulent duck breast, kissed by fire and glazed with an aromatic orange reduction, accompanied by dauphinoise potatoes.</p>
                </div>

            <h2>Desserts</h2>

                <div class="menu-item">
                    <p class="menu-dish">Vanilla Crème Brûlée</p>
                    <p class="menu-description">A delicate vanilla bean custard, hidden beneath a glassy caramelized sugar shell, waiting to be shattered.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">Golden Apple Tarte Tatin</p>
                    <p class="menu-description">Caramelized orchard apples nestled in a buttery, flaky pastry, served with a whisper of vanilla bean ice cream.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">Midnight Chocolate Lava Cake</p>
                    <p class="menu-description">A molten dark chocolate embrace, paired with a kiss of raspberry coulis and cloud-like whipped crème Chantilly.</p>
                </div>

            <h2>Drinks</h2>

                <div class="menu-item">
                    <p class="menu-dish">Champagne de la Maison</p>
                    <p class="menu-description">A selection of the finest bubbly, poured to perfection.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">Sommelier's Choice Wines</p>
                    <p class="menu-description">A hand-picked selection of exquisite reds and whites from Bordeaux, Burgundy, and beyond.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">Artisan Teas & Espresso</p>
                    <p class="menu-description">A refined collection of aromatic teas and rich, handcrafted espresso.</p>
                </div>

                <div class="menu-item">
                    <p class="menu-dish">The Golden Goose Cocktail</p>
                    <p class="menu-description">A house specialty blending aged cognac, golden honey, and a whisper of citrus—served with a gilded rim.</p>
                </div>`;
      
    },
    addElements: function() {
        this.content.appendChild(this.menuContainer);
    },
};

export default menu;