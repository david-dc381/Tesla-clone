(()=>{

  const menu = document.getElementById('menu-hamburguer'),
        sidebar = document.getElementById('sidebar'),
        closeMenu = document.querySelector('.fa-xmark'),
        menuLinks = document.querySelectorAll('.sidebar-list li a');

  // Mostrar el menu
  menu.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
  });

  // Cerrar el menu con la X
  closeMenu.addEventListener('click', () => {
    if (sidebar.classList.contains('show-sidebar')) {
      sidebar.classList.remove('show-sidebar');
    }
  })

  // Damos a cada link del sidebar el evento de cerrar el menu mobile
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
      sidebar.classList.remove('show-sidebar');
    })
  }

})();