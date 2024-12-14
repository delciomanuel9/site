// 1. Função do menu mobile do site()
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "icones/menu-mobile (1).png"
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "icones/menu-mobile (2).png"
    }
}
// 2. Função da area de contatos do site 
function verificar(){
    let nome = document.getElementById("nome").value;
    if(nome == "" || nome==null){
        let p = document.getElementById("teste");
        p.innerHTML = "o campo não pode ser vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "feito com sucesso";
        p.style.color = "green";
    }
}

// 3. função para a barra de pesquisa
function search(){
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('linguagem');

    for(i = 0; i < x.length; i++){
        if (!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "list-item";
        }
    }
}

function search(){
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animais');

    for(i = 0; i < x.length; i++){
        if (!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "list-item";
        }
    }
}