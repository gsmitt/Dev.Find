import  authServices from "../../services/authServices"

export const LogedSidebarData = [
    {
      title: 'Home',
      path: '/',
      cName: 'nav-text'
    },
    {
      title: 'Sobre',
      path: '/sobre',
      cName: 'nav-text'
    },
    {
      title: 'Explorar',
      path: '/explorar',
      cName: 'nav-text'
    },
    {
      title: 'Perfil',
      path: '/perfil-usuario/'+authServices.getIdFromAccessToken(localStorage.getItem("access-token")),
      cName: 'nav-text'
    },
    {
      title: 'Publicar Projeto',
      path: '/publicar-projeto',
      cName: 'nav-text'
    },
    {
      title: 'Sair',
      path: '/',
      cName: 'entrar',
      logout: true
    },
  ];