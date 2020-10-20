function Artikel (item, maat, voorraad, kleur, aantal ) {
    let product = item;
    let size = maat;
    let stock = voorraad;
    let color = kleur;
    let amount = aantal;

    this.getItem = function (){
        return product;
    }
    this.getMaat = function () {
        return size;
    }
    this.getVoorraad = function () {
        return stock;
    }
    this.getKleur = function () {
        return color
    }
    this.getAantal = function () {
        return amount
    }
    this.showDetail = function () {
        console.log("Maat: " + size + "Kleur: " + color);
    }
}




