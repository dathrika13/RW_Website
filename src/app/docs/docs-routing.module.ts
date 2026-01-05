import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { DocsComponent } from './docs.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { CustomizationComponent } from './customization/customization.component';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { CustomComponent } from './custom/custom.component';
import { PluginsComponent } from './plugins/plugins.component';
import { RoutingComponent } from './routing/routing.component';
import { CodeSplitingComponent } from './code-spliting/code-spliting.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [{
  path: '',
  component: DocsComponent,
  children: [
    {
      path: '',
      redirectTo: 'introduction',
      pathMatch: 'full'
    },
    {
      path: 'introduction',
      component: IntroductionComponent
    },
    {
      path: 'quick-start',
      component: QuickStartComponent
    },
    {
      path: 'customization',
      component: CustomizationComponent
    },
    {
      path: 'colors',
      component: ColorsComponent
    },
    {
      path: 'typography',
      component: TypographyComponent
    },
    {
      path: 'bootstrap',
      loadChildren: () => import('./bootstrap/bootstrap.module').then(m => m.BootstrapModule)
    },
    {
      path: 'custom',
      component: CustomComponent
    },
    {
      path: 'plugins',
      component: PluginsComponent
    },
    
    {
      path: 'routing',
      component: RoutingComponent
    },
    {
      path: 'code-spliting',
      component: CodeSplitingComponent
    },
    {
      path: 'icons',
      component: IconsComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
