import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { PricingComponent } from "./pricing/pricing.component";
import { CompanyComponent } from "./company/company.component";
import { PrivacyAndPolicyComponent } from "./PrivacyAndPolicy/privacy-policy.component";
import { IndustriesComponent } from "./industries/industries.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { TermsAndConditionsComponent } from "./TermsAndConditions/terms-and-conditions.component";
import { FAQComponent } from "./FAQ/faq.component";
import { ContactComponent } from "./contact/contact.component";
import { Newseventcomponent } from "./news/news.component";
import { SolutionsComponent } from "./solutions/solutions.component";
import { CareersComponent } from "./careers/careers.component";
import { SupportComponent } from "./support/support.component";
import { SupplierAssitsComponent } from "./supplier-assits/supplier-assits.component";
import { ThankYouComponent } from "./thankyou/thankyou.component";
import { PartnerComponent } from "./partners/partner.component";
import { EsgTechnicleComponent } from "./esg-technicle/esg-technicle.component";
import { JobsTechnicalComponent } from "./jobs-technical/jobs-technical.component";
import { ProductSolutionsComponent } from "./product-solutions/product-solutions.component";
import { ConferenceComponent } from './conference/conference.component';
import { PartnerLoginComponent } from "./partners/partner-login/partner-login.component";
import { PartnerPortalComponent } from "./partners/partner-portal/partner-portal.component";
import { ProductsAiComponent } from "./products-ai/products-ai.component";
const PageRoutes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "partners",
    component: PartnerComponent,
  },
  {
    path: "supplier-portal",
    component: SupplierAssitsComponent,
  },
  {
    path: "pricing",
    component: PricingComponent,
  },
  {
    path: "thankyou",
    component: ThankYouComponent,
  },
  {
    path: "company",
    component: CompanyComponent,
  },
  {
    path: "industries/:id",
    component: IndustriesComponent,
  },
  {
    path: "support",
    component: SupportComponent,
  },
  {
    path: "careers",
    component: CareersComponent,
  },
  {
    path: "blogs/:id",
    component: BlogsComponent,
  },
  {
    path: "solutions",
    component: SolutionsComponent,
  },
  {
    path: "news/:id",
    component: Newseventcomponent,
  },
  { path: 'conference/:id', component: ConferenceComponent },
  {
    path: "privacy-policy",
    component: PrivacyAndPolicyComponent,
  },
  {
    path: "terms-of-services",
    component: TermsAndConditionsComponent,
  },
  {
    path: "faq",
    component: FAQComponent,
  },
  {
    path: "download-whitepaper",
    component: ContactusComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "esgJobDes",
    component:EsgTechnicleComponent ,
  },
  {
    path: "jobsJobDes",
    component:JobsTechnicalComponent ,
  },
  {
    path: "product-solutions",
    component:ProductSolutionsComponent,
  },
  {
    path: "partner-portal",
    component:PartnerPortalComponent,
  },
  {
    path: "partner-portal-login",
    component:PartnerLoginComponent,
  },
  {
    path: "products-ai",
    component: ProductsAiComponent,
  }
];

export const PageRoutingModule = RouterModule.forChild(PageRoutes);
