const host = 'http://localhost/api';
const endpoint = host + '/Lampada'

function list(){
    //criar instancia do objeto request
    let request = new XMLHttpRequest();
    //open
    request.open('GET', endpoint);
    //send
    request.send();
    //onload
    request.onload = function (){
        
        let lampada = JSON.parse(this.responseText);
        let tabela = document.getElementById("lampadatab");
        let corpo = tabela.getElementsByTagName("tbody")[0];
        corpo.innerHTML = "";
        lampada.forEach(e => {
            let linha = `<tr>
                            <td>${e.id}</td>
                            <td>${e.tipo}</td>
                            <td>${e.watts}</td>
                        </tr>`;
            corpo.innerHTML += linha;
        });
    }
}
function create(model){
    let request = new XMLHttpRequest();
request.open('POST',endpoint);
request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.send(JSON.stringify(model));
request.onload = function(){console.log(request.status);}
}
function cadastrar(){
    let tipo = document.getElementById("tipo").value;
    let watts = document.getElementById("watts").value;
    let model = {"tipo":tipo, "watts":watts};
    create(model);
}