const setup = () => {
    document.getElementById('knop').addEventListener('click', () => {
        let tekst = document.getElementById("invulVeld").value;
        let spaties = tekst.split(' ').map(woord => woord.split('').join(' ')).join(' ');
        console.log(spaties);
    });
}

window.addEventListener("load", setup);