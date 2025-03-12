function copiarTexto(elemento) {
    const texto = elemento.textContent || elemento.innerText;
    // Cria um elemento temporário de input para copiar o texto
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = texto;  // Define o valor do input para o texto a ser copiado
    tempInput.select(); 
    document.execCommand('copy');
    // Remove o input temporário
    document.body.removeChild(tempInput);
    elemento.classList.add('copiado');
    elemento.textContent = 'Texto copiado!';
    setTimeout(() => {
        elemento.textContent = texto;
        elemento.classList.remove('copiado');
    }, 1500);
}

// Adiciona o ouvinte de evento de clique a cada elemento 
const textosParaCopiar = document.querySelectorAll('.textoParaCopiar');
textosParaCopiar.forEach(function (texto) {
    texto.addEventListener('click', function () {
        copiarTexto(texto);
    });
});



document.getElementById("link_sobre").addEventListener("click", function(x){
    x.preventDefault();
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" })

})

document.getElementById("link_projetos").addEventListener("click", function(x){
    x.preventDefault();
    document.getElementById("projetos").scrollIntoView({ behavior: "smooth" })

})

document.getElementById("link_projetos").addEventListener("click", function(x){
    x.preventDefault();
    document.getElementById("projetos").scrollIntoView({ behavior: "smooth" })

})

