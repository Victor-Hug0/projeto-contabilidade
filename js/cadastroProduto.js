function cadastoProduto(){
    let form = document.querySelector(".form-cadProduto")
    let btnCadastroProduto = document.getElementById("btnCadastroProduto");
    let idProduto = 0;

    btnCadastroProduto.addEventListener("click", function(e){
        e.preventDefault();
        let nomeProduto = document.getElementById("nomeP").value;
        let tipoProduto = document.getElementById("tipoP").value;
        let valorProduto = document.getElementById("valorP").value;
        let descriçãoP = document.getElementById("descricaoP").value;
        criaProduto(idProduto, nomeProduto, tipoProduto, valorProduto, descriçãoP);
        addProdutoLocalStorage(idProduto, JSON.stringify(produto));
        idProduto++;
        alert("Produto cadastrado com sucesso!")
        form.reset();
        
    })

    function criaProduto(idProduto, nomeProduto, tipoProduto, valorProduto, descricaoP){
        produto = {
            idProduto: idProduto,
            nomeProduto: nomeProduto,
            tipoProduto: tipoProduto,
            valorProduto: valorProduto,
            descriçãoP: descricaoP
        };
        return produto;
    }

    function addProdutoLocalStorage(idProduto, produto){
        localStorage.setItem(idProduto, produto);
    }

}

cadastoProduto();