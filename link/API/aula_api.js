const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2" // Armazeno o endereço da APi


async function buscarCarta() {
    try{

        const resposta = await fetch(url);//faz a requisição e armazena 
        //verificação

        if(!resposta.ok){
            throw new erro(`Erro na requisição: ${resposta.ok}`);

            
        }

        const dados = await resposta.json();
        console.log(dados)

        let img = document.getElementById("carta");

        const deck_id = dados.deck_id;

        const respostaCarta = await fetch(url);

        if(!respostaCarta.ok){

            throw new erro(`Erro na requisição: ${respostaCarta.status}`);

        }
        const dadosCarta = await respostaCarta.json();
        const carta = dadosCarta.cards[0];
        console.log(carta);
        img.src = carta.image ;
    }
    catch(erro){
        console.log(erro)
        alert("Ocorreu um erro ao buscar a carta.")
    }
}
buscarCarta()

/*const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=2" // Armazeno o endereço da APi

async function chamarAPI() {
    try {
        const resposta = await fetch(url)

        if (!resposta.ok) {
            throw new Error/* classifica como erro(`Erro na resquisição: ${resposta.ok}`)
        }

        const dados = await resposta.json();

        let imagem = document.getElementById('carta')

        const deck_id = dados.deck_id //Extrair o id do baralho

        const respostacarta = await fetch(url)

        if (!respostacarta.ok) {
            throw new Error/* classifica como erro(`Erro na resquisição: ${respostacarta.ok}`)
        }

        const dadosCarta = await respostacarta.json()

        const carta = dadosCarta.cards[0]

        console.log(carta)
        imagem.src = carta.image
    }
    catch(erro){
        console.error(erro)
        alert("Ocorreu um erro ao buscar a carta")
    }
}
chamarAPI()
*/const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Dados do novo usuário
const novoUsuario = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com'
};

// Fazendo a requisição POST
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoUsuario)
})
    .then(response => response.json())
    .then(data => {
        console.log('Usuário criado:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
