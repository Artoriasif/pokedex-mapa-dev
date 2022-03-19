/*

ao clicar no pokémon da poke-selector, temos que esconder o card do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na poke-selector.

para isso vamos precisar trabalhar com dois elementos:
1. poke-selector
2. poke-card

precisamos criar duas variáveis no JS para trabalhar com os elementos da tela.

vamos precisar de um evento de clique realizado pelo usuário na poke-selector.

1. remover a classe 'open' apenas do cartão que está aberto no momento.
2. ao clicar em um pokemon da poke-selector, pegaremos o ID desse card para saber qual cartão exibir na tela.
3. remover a classe 'on' que marca o pokemon selecionado.
4. adicionar a classe 'on' no item da poke-selector selecionado.

*/

const pokeNav = document.querySelectorAll('.pokemon')
const pokeCards = document.querySelectorAll('.poke-card')

pokeNav.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const pokeId = pokemon.attributes.id.value

        const closeCard = document.querySelector('.open')
        closeCard.classList.remove('open')
        const openCard = document.getElementById('card-' + pokeId)
        openCard.classList.add('open')

        const closeNav = document.querySelector('.on')
        closeNav.classList.remove('on')
        const openNav = document.getElementById(pokeId)
        openNav.classList.add('on')
    })
});
