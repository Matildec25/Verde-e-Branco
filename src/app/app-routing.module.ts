import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'colecoes',
    loadChildren: () => import('./pages/colecoes/colecoes.module').then( m => m.ColecoesPageModule)
  },
  {
    path: 'boxcr7',
    loadChildren: () => import('./pages/boxcr7/boxcr7.module').then( m => m.Boxcr7PageModule)
  },
  {
    path: 'equipamentos-adulto',
    loadChildren: () => import('./pages/equipamentos-adulto/equipamentos-adulto.module').then( m => m.EquipamentosAdultoPageModule)
  },
  {
    path: 'equipamentos-crianca',
    loadChildren: () => import('./pages/equipamentos-crianca/equipamentos-crianca.module').then( m => m.EquipamentosCriancaPageModule)
  },
  {
    path: 'equipamentos-mulher',
    loadChildren: () => import('./pages/equipamentos-mulher/equipamentos-mulher.module').then( m => m.EquipamentosMulherPageModule)
  },
  {
    path: 'equipamentos-acessorios',
    loadChildren: () => import('./pages/equipamentos-acessorios/equipamentos-acessorios.module').then( m => m.EquipamentosAcessoriosPageModule)
  },
 
  {
    path: 'futebol',
    loadChildren: () => import('./pages/futebol/futebol.module').then( m => m.FutebolPageModule)
  },

  {
    path: 'resultados',
    loadChildren: () => import('./pages/resultados/resultados.module').then( m => m.ResultadosPageModule)
  },

  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },

  {
    path: 'registar',
    loadChildren: () => import('./pages/registar/registar.module').then( m => m.RegistarPageModule)
  },


  {
    path: 'comprarbilhetes',
    loadChildren: () => import('./pages/comprarbilhetes/comprarbilhetes.module').then( m => m.ComprarbilhetesPageModule)
  },





 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
