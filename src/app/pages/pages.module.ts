import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products/products.component";
import { SharedModule } from "../shared/shared.module";
import { PageRoutingModule } from "./pages.routes";
import { PricingComponent } from "./pricing/pricing.component";
import { CompanyComponent } from "./company/company.component";
import { IndustriesComponent } from "./industries/industries.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { PrivacyAndPolicyComponent } from "./PrivacyAndPolicy/privacy-policy.component";
import { TermsAndConditionsComponent } from "./TermsAndConditions/terms-and-conditions.component";
import { FAQComponent } from "./FAQ/faq.component";
import { ContactComponent } from "./contact/contact.component";
import { Newseventcomponent } from "./news/news.component";
import { CareersComponent } from "./careers/careers.component";
import { SolutionsComponent } from "./solutions/solutions.component";
import { SupportComponent } from "./support/support.component";
import { ThankYouComponent } from "./thankyou/thankyou.component";
import { PartnerComponent } from "./partners/partner.component";
import { ProductSolutionsComponent } from './product-solutions/product-solutions.component';
import { ConferenceComponent } from './conference/conference.component';
import { PartnerPortalComponent } from './partners/partner-portal/partner-portal.component';
import { PartnerLoginComponent } from './partners/partner-login/partner-login.component';
import { ProductsAiComponent } from './products-ai/products-ai.component';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    ProductsComponent,
    PricingComponent,
    CompanyComponent,
    IndustriesComponent,
    ContactusComponent,
    BlogsComponent,
    PageNotFoundComponent,
    PrivacyAndPolicyComponent,
    TermsAndConditionsComponent,
    FAQComponent,
    ContactComponent,
    Newseventcomponent,
    CareersComponent,
    SolutionsComponent,
    SupportComponent,
    ThankYouComponent,
    PartnerComponent,
    ProductSolutionsComponent,
    ConferenceComponent,
    PartnerPortalComponent,
    PartnerLoginComponent,
    ProductsAiComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, PageRoutingModule],
})
export class PagesModule {}
