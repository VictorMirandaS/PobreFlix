document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(event) {
          const targetTab = event.target.dataset.tabButton;
          const tabToActivate = document.querySelector(`[data-tab-id="${targetTab}"]`);
          
          // Ocultar todas as abas
          escondeTodasAbas();
          // Ativar a aba clicada
          tabToActivate.classList.add('shows__list--is-active');
          
          // Remover estado ativo de todos os botões
          removeBotaoAtivo();
          // Adicionar estado ativo ao botão clicado
          event.target.classList.add('shows__tabs__button--is-active');
      });
  }

  function removeBotaoAtivo() {
      const buttons = document.querySelectorAll('[data-tab-button]');
      for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('shows__tabs__button--is-active');
      }
  }

  function escondeTodasAbas () {
      const tabs = document.querySelectorAll('[data-tab-id]');
      for (let i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove('shows__list--is-active');
      }
  }
});
