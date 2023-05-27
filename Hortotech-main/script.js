$(document).ready(function(){
    //menu-celular-view
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //navbar/menu
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //scrollbutun-up
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });
   
    //slide-img-home
    imgHome();
   
    //home-typing
    var typed = new Typed(".typing", {
        strings:["Inclusão", "Exelência", "Prosperidade","Sustentabilidade","Inovação"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    //home section-typing
    var typed = new Typed(".typing-2", {
        strings:[" o Meio ambiente", "a Vida", "o Futuro","a Sustentabilidade","a Inovação"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    //problemas section typing
    var typed = new Typed(".typing-3", {
        strings: [" o Meio ambiente", "a Vida", "o Futuro", "a Sustentabilidade", "a Inovação"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
//validar-login
document.querySelectorAll('#login').addEventListener('click', ()=>{
    let usuario = document.getElementById("usuario").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if (usuario=="" && email =="" && senha ==""){
        alert("preencha os campos, varifique se não deixou nada em branco");
    }
    if (usuario=="Admin" && senha =="123456" ){
        alert(`Seja bem vindo meu caro ${usuario}`);
        window.open('selo.html');
    }
})
function validarLogin(){
    let usuario = document.getElementById("usuario").value
    let celular = document.getElementById("cel").value
    let senha = document.getElementById("senha").value
    
    if (usuario=="" && celular =="" && senha ==""){
        alert("preencha os campos, varifique se não deixou nada em branco");
    }else if (usuario=="Admin" && senha =="123456" && celular=="0" ){
        alert(`Seja bem vindo meu caro ${usuario}`);
        window.open('selo.html');
    }
}
//cadastro
function validarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    var mensagemCompleta = "Nome: " + nome + "\n" + "Email: " + email + "\n" + "Mensagem: " + mensagem +"\n" +"\n" + "Mensagem enviada com sucesso!";
    if (nome=="" && email =="" && mensagem==""){
        alert("preencha os campos, verifique se não deixou nada em branco")
    }else{
        alert(mensagemCompleta);
    }
}
//btn-cadastro
var btnCadastro = document.getElementById("btn-cadastro").addEventListener("click", ()=>{
    window.open('cadastro.html');
});
//slide-img-function-selo

function imgHome(){
    if (window.location.pathname === "/index.html"){
        alert('Seja Bem vindo ao Hortotec');
        var imagens = [    './img/ods-car.webp',    './img/foem-car.jpg',    './img/planta-car.jpg',    './img/img4-car.png'];
        var Index = 0;
        var time = 2500;
        function slideShow() {
            document.getElementById('image-car').src = imagens[Index];
            Index++;
            if (Index == imagens.length) {
                Index = 0;
            }
            setTimeout(slideShow, time);
        } 
        slideShow(); 
    }
};