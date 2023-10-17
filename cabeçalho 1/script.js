// Adiciona uma classe ao cabeçalho quando o usuário rolar para baixo
window.onscroll = function() {
    myFunction();
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myHeader").classList.add("header-scrolled");
    } else {
        document.getElementById("myHeader").classList.remove("header-scrolled");
    }
}
