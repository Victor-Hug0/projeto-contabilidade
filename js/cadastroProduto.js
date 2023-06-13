class Produto {
    constructor(nomeProduto, tipoProduto, valorProdutoUnidade, valorTotalProduto, quantidadadeProduto, descricaoP) {
        this.nomeProduto = nomeProduto;
        this.tipoProduto = tipoProduto;
        this.valorProdutoUnidade = valorProdutoUnidade;
        this.valorTotalProduto = valorTotalProduto;
        this.quantidadadeProduto = quantidadadeProduto;
        this.descricaoP = descricaoP;
    }

    validarDados() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === "" || this[i] === null) {
                return false;
            }
        }
        return true;
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem("id");

        if (id === null) {
            localStorage.setItem("id", 0);
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem("id");
        return parseInt(proximoId) + 1;
    }

    addProdutoLocalStorage(p) {
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(p));
        localStorage.setItem("id", id);
    }

    recuperarTodosRegistros() {
        let produtosCadastrados = [];
        let id = localStorage.getItem("id");
        for (let i = 1; i <= id; i++) {
            let produto = JSON.parse(localStorage.getItem(i));
            if (produto !== null) {
                produtosCadastrados.push(produto);
            }
        }
        return produtosCadastrados;
    }

    recuperaQuantidadedeProdutos() {
        let quantidadadeProdutosTotal = 0;
        let id = localStorage.getItem("id");
        for (let i = 1; i <= id; i++) {
            let produto = JSON.parse(localStorage.getItem(i));
            quantidadadeProdutosTotal += Number(produto.quantidadadeProduto);
        }
        return quantidadadeProdutosTotal;
    }
}

let bd = new Bd();
let produtodCadastrados = [];
let produtosVendidos = [];

function cadastoProduto() {
    let form = document.querySelector(".form-cadProduto");
    let btnCadastroProduto = document.getElementById("btnCadastroProduto");
    var modalError = document.getElementById("modalError");
    var modalSucess = document.getElementById("modalSucess");
    var spanE = document.getElementsByClassName("closeE")[0];
    var spanS = document.getElementsByClassName("closeS")[0];

    btnCadastroProduto.addEventListener("click", function (e) {
        e.preventDefault();
        let nomeProduto = document.getElementById("nomeP").value;
        let tipoProduto = document.getElementById("tipoP").value;
        let quantidadadeProduto = document.getElementById("qntdP").value;
        let valorProdutoUnidade = document.getElementById("valorP").value;
        let descricaoP = document.getElementById("descricaoP").value;
        let valorTotalProduto = Number(valorProdutoUnidade) * Number(quantidadadeProduto);

        let produto = new Produto(nomeProduto, tipoProduto, valorProdutoUnidade, valorTotalProduto, quantidadadeProduto, descricaoP);
        if (produto.validarDados()) {
            bd.addProdutoLocalStorage(produto);
            modalSucess.style.display = "block";
            spanS.onclick = function () {
                modalSucess.style.display = "none";
            };

            window.onclick = function (event) {
                if (event.target == modalSucess) {
                    modalSucess.style.display = "none";
                }
            };

            form.reset();
            carregaListaProdutos();
        } else {
            modalError.style.display = "block";
            spanE.onclick = function () {
                modalError.style.display = "none";
            };

            window.onclick = function (event) {
                if (event.target == modalError) {
                    modalError.style.display = "none";
                }
            };
        }


    });
}

function carregaListaProdutos() {
    produtodCadastrados = bd.recuperarTodosRegistros();
    var listaProdutos = document.getElementById("listaProdutos");
    listaProdutos.innerHTML = "";
    produtodCadastrados.forEach(function (p) {
        let linha = listaProdutos.insertRow();
        let celulaEsquerda = linha.insertCell(0);
        let celulaCentro = linha.insertCell(1);
        let celulaCentro2 = linha.insertCell(2);
        let celulaDireita = linha.insertCell(3);
        celulaEsquerda.innerHTML = p.nomeProduto;
        celulaCentro.innerHTML = p.tipoProduto;
        celulaCentro2.innerHTML = p.quantidadadeProduto;
        celulaDireita.innerHTML = `R$ ${p.valorProdutoUnidade}`;
        celulaEsquerda.classList.add("alinhamento-esquerda");
        celulaCentro.classList.add("alinhamento-centro");
        celulaCentro2.classList.add("alinhamento-centro");
        celulaDireita.classList.add("alinhamento-direita");
    });
}

function mostrarInfosProdutos() {
    let pC = document.getElementById("produtosCadastrados");
    let qntdTotal = bd.recuperaQuantidadedeProdutos();
    pC.innerHTML = `${qntdTotal}`;
}

function getIdProduto(nomeProduto) {
    let id = null;
    for (let i = 1; i <= localStorage.length; i++) {
      let produto = JSON.parse(localStorage.getItem(i));
      if (produto && produto.nomeProduto === nomeProduto) {
        id = i;
        break;
      }
    }
    return id;
  }

function vendaProduto() {
    let nomePVenda = document.getElementById("nomePVenda");

    const idProduto = getIdProduto(nomePVenda.value);
    if (idProduto !== null){
        produtosVendidos.push(localStorage.getItem(idProduto));
        localStorage.removeItem(idProduto);
        alert("Venda realizada com sucesso!");
    }
    carregaListaProdutos();
}

function calcularValorTotalVendas() {
    let valorTotalVendas = 0;
    produtosVendidos.forEach(function(produto) {
      valorTotalVendas += Number(produto.valorTotalProduto);
    });
    return valorTotalVendas;
}

function mostraInfoLucros(){
    let lucroInfo = document.getElementById("lucroInfo");
    let valorLucro = calcularValorTotalVendas().toFixed(2);
    lucroInfo.innerHTML = `R$ ${valorLucro}`;
}

cadastoProduto();