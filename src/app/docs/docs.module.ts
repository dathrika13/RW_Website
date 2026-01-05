import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SidenavLeftComponent } from './shared/components/sidenav-left/sidenav-left.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { CustomizationComponent } from './customization/customization.component';
import { RoutingComponent } from './routing/routing.component';
import { CodeSplitingComponent } from './code-spliting/code-spliting.component';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { CustomComponent } from './custom/custom.component';
import { PluginsComponent } from './plugins/plugins.component';
import { SidenavRightComponent } from './shared/components/sidenav-right/sidenav-right.component';
import { SharedModule } from '../shared/shared.module';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    DocsComponent,
    IntroductionComponent,
    SidenavLeftComponent,
    QuickStartComponent,
    CustomizationComponent,
    RoutingComponent,
    CodeSplitingComponent,
    ColorsComponent,
    TypographyComponent,
    CustomComponent,
    PluginsComponent,
    SidenavRightComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    SharedModule
  ]
})
export class DocsModule { }
