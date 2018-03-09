
function validarCadastro()
{
    var nome = document.cadastro.Nome.value;
    var senha = document.cadastro.Senha.value;
    var conf_senha = document.cadastro.Confirmar_senha.value;
    var email = document.cadastro.Email.value;
    var conf_email = document.cadastro.Conf_email.value;
    var status = 0;

    if (senha !== conf_senha) {
        alert("As senhas são diferentes");
        cadastro.Nome.focus();
        return false;
    }
    else{
        status =1;
    }

    if(senha.length < 8)
    {
        alert("Senha muito pequena, tente senha acima de 8 caracteres");
        cadastro.Senha.focus();
        return false;
    }
    else{
        status =1;
    }

    if (email !== conf_email) {
        alert("Os e-mails são diferentes");
        cadastro.Conf_email.focus();
        return false;
    }
    else{
        status =1;
    }

    if (nome === "") {
        alert("O campo 'nome' não pode ficar vazio!");
        cadastro.Nome.focus();
        return false;
    }
    else{
        status =1;
    }

    if (status === 1){
        alert("Cadastro realizado com sucesso!");
    }

}
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Avaliação', 'Quantidade'],
        ['Gostou',     4500],
        ['Não Gostou',      9000]
    ]);

    var options = {
        //chart: {
            title: 'Avaliação do Game',
            'is3D': true,
            backgroundColor: 'transparent'
            // vAxis: {minValue: 0}
        };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data,options); //google.charts.Bar.convertOptions(options));

    function resizeHandler () {
        chart.draw(data, options);
    }
    if (window.addEventListener) {
        window.addEventListener('resize', resizeHandler, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onresize', resizeHandler);
    }
}
 function validarComent() {
     var coment = document.getElementById('coment_user').value;

     if(coment === "" || coment === null){
         alert("O comentário não pode ser vazio!");
         document.getElementById('coment_user').focus();
     }
 }

$('.carousel').carousel({
    interval: 5000
});
$.carousel('pause')({
    pause: "hover"
});

$(document).ready(function () {
    $("#carrosel").on("slide.bs.carousel", function (event) {
        $(".barra", this)
            .removeClass("anima").css("width", "0%");
    }).on("slid.bs.carousel", function (event) {
        $(".barra", this)
            .addClass("anima").css("width", "100%");
    });
    $(".barra", "#carrosel").css("width", "100%");
});