import {
  IndustriesContent,
  OurTeam,
  Pricing,
  PlatformContent,
  BlogsContent,
  productsContent,
  } from "../model";
import { NewseventContent } from "../model/news";

const INDUSTRIES: IndustriesContent[] = [
  {
    id: 0,
    name: "Energy",
    icon: "assets/images/icons/power-plant.png",
    image: "assets/images/industries/Sustainability.webp",
    description:
      "as a significant contributor to global carbon emissions, is under increasing pressure to adopt Sustainability principles. To address this, the sector is focusing on transitioning to renewable energy sources, reducing greenhouse gas emissions, and enhancing waste management practices. Additionally, upholding labor rights, ensuring worker safety, and maintaining transparency and ethical conduct are key priorities. ",
    data: [
      "Environmental Performance Monitoring",
      "Regulatory Compliance",
      "Energy Efficiency",
      "Renewable Energy Integration",
      "Risk Management",
      "Reporting and Transparency",
      "Benchmarking and Peer Comparison",
      "Investor Relations",
    ],
    additionalContent: [
      "Major Integrated Oil & Gas", 
      "Oil & Gas Equipment & Services",
      "Oil & Gas Exploration & Production",
      "Oil & Gas Pipelines",
      "Oilfield Services",
      "Renewable Energy",
    ],
  },
  {
    id: 1,
    name: "Transportation",
    icon: "assets/images/icons/transportation.png",
    image: "assets/images/industries/Carbon Offset.webp",
    description:
      "is transforming under sustainability frameworks, prioritizing environmental stewardship, social responsibility, and governance excellence. Environmentally, innovations in fuel efficiency and electric vehicle adoption drive reduced emissions. Socially, enhancing passenger and employee safety, and ensuring equitable transportation access are key. Governance focuses on compliance with safety standards and ethical operations.  ",
    data: [
      "Environmental Impact Tracking ",
      "Regulatory Compliance ",
      "Fleet Management ",
      "Supply Chain Sustainability ",
      "Energy Efficiency ",
      "Safety Management ",
      "Governance and Compliance ",
      "Risk Management ",
    ],
    additionalContent: [
      "Airlines and Aviation", 
      "Public Transit Systems ",
      "Car Rentals and Leasing",
      "Courier and Package Delivery Services",
      "Automotive Manufacturing",
      "Trucking and Freight Services",
    ],
  },
  {
    id: 2,
    name: "Food and Agriculture",
    icon: "assets/images/icons/agriculture.png",
    image: "assets/images/industries/Environmental Health and Safety.webp",
    description:
      "faces significant sustainability challenges, encompassing environmental, social, and governance considerations. The sector must balance sustainable farming practices, social responsibility, and governance accountability to ensure a resilient and responsible food system. This includes adopting environmentally friendly practices, promoting social welfare, and maintaining transparent governance. ",
    data: [
      "Sustainable Farming Practices",
      "Supply Chain Sustainability",
      "Environmental Impact Tracking",
      "Regulatory Compliance",
      "Water Resource Management",
      "Biodiversity and Conservation",
      "Governance and Ethical Practice",
    ],
    additionalContent: [
      "Agricultural Machinery and Equipment", 
      "Farm Infrastructure and Services",
      "Dairy Processing",
      "Wholesale and Distribution",
      "Grain and Oilseed Milling",
      "Wholesale and Trading",
      ],
  },
  {
    id: 3,
    name: "Heavy Industries",
    icon: "assets/images/icons/mining.png",
    image: "assets/images/industries/Decarbonization.webp",
    description:
      "addresses significant sustainability challenges, prioritizing environmental stewardship, social responsibility, and governance excellence. To mitigate their substantial environmental footprint, heavy industries focus on reducing emissions, efficient resource use, and responsible waste management. Socially, worker safety and community engagement are paramount. Governance emphasizes adherence to environmental and safety regulations, alongside ethical business practices. ",
    data: [
      "Environmental Impact Monitoring",
      "Energy Efficiency",
      "Responsible Sourcing",
      "Safety and Health Management",
      "Environmental Compliance",
      "Social Impact Assessment",
      "Governance and Ethics",
    ],
    additionalContent: [
      "Steel Manufacturing", 
      "Cement Production",
      "Mining and Quarrying",
      "Construction Machinery and Equipment",
      "Heavy Electrical Equipment Manufacturing",
      "Nuclear Power Equipment Manufacturing",
      ],
  },
  {
    id: 4,
    name: "Chemicals & Pharmaceuticals",
    icon: "assets/images/icons/chemistry.png",
    image: "assets/images/industries/Suplier Assessment.webp",
    description:
      "faces significant sustainability challenges, encompassing environmental, social, and governance considerations. Managing chemical waste and reducing emissions are critical environmental concerns. Socially, ensuring patient safety, medication accessibility, and fair labor practices are top priorities. Governance challenges include adhering to health regulations, transparency in clinical trials, and ethical marketing practices. ",
    data: [
      "Environmental Impact Management",
      "Regulatory Compliance",
      "Product Sustainability",
      "Ethical Sourcing",
      "Safety and Quality Control",
      "Stakeholder Engagement",
      "Governance and Ethics",
      "Supply Chain Responsibility",
      "Patient and Customer Safety",
    ],
    additionalContent: [
      "Basic Chemicals", 
      "Specialty Chemicals",
      "Agricultural Chemicals",
      "Polymers and Plastics",
      "Biopharmaceuticals",
      "Pharmaceutical Logistics and Distribution",
     ],
  },
  {
    id: 5,
    name: "Finance and Banking",
    icon: "assets/images/icons/bank_2.png",
    image: "assets/images/industries/NetZero.webp",
    description:
      "prioritizes sustainability considerations, balancing environmental responsibility, social accountability, and governance excellence. The sector supports sustainable projects, assesses environmental risks in investments, and promotes financial inclusion and responsible lending. Governance emphasizes ethical investing, transparent reporting, and compliance with financial regulations. ",
    data: [
      "ESG Risk Assessment",
      "Sustainable Investment",
      "Portfolio Analysis",
      "Regulatory Compliance",
      "Corporate Governance",
      "Responsible Lending",
      "Data Management",
    ],
    additionalContent: [
      "Major Integrated Oil & Gas", 
      "Oil & Gas Equipment & Services",
      "Oil & Gas Exploration & Production",
      "Oil & Gas Pipelines",
      "Oilfield Services",
      "Renewable Energy",
    ],
  },
  {
    id: 6,
    name: "Real Estate",
    icon: "assets/images/icons/realestate.png",
    image: "assets/images/industries/ESG.webp",
    description:
      "is increasingly shaped by sustainability considerations, encompassing environmental, social, and governance aspects. Environmentally, the focus is on sustainable building practices, energy efficiency, and minimizing environmental impact. Socially, the sector must ensure affordable housing options and maintain high living standards. Governance priorities include adhering to building regulations, ethical land acquisition, and transparent real estate transactions.",
    data: [
      "Sustainable Building Practices",
      "Energy Efficiency",
      "Environmental Impact Monitoring",
      "Responsible Property Management",
      "Green Building Certifications",
      "Risk Management",
      "Governance and Compliance",
    ],
    additionalContent: [
      "REIT - Mortgage", 
      "REIT - Specialty",
      "Residential Real Estate",
      "Commercial Real Estate",
      "Healthcare Real Estate",
      "Affordable Housing",
      ],
  },
  {
    id: 7,
    name: "Utilities",
    icon: "assets/images/icons/utilities.png",
    image: "assets/images/industries/GRI.webp",
    description:
      "is under increasing sustainability scrutiny, driving a focus on environmental responsibility, social accountability, and governance excellence. Environmentally, the sector prioritizes renewable energy investment, emission reduction, and efficient water management. Socially, it aims to provide reliable, affordable utility services. Governance emphasizes regulatory compliance, transparent pricing, and responsible resource management. ",
    data: [
      "Environmental Impact Monitoring",
      "Renewable Energy Integration",
      "Energy Efficiency",
      "Regulatory Compliance",
      "Grid Resilience",
      "Social Responsibility",
      "Governance and Ethics",
    ],
    additionalContent: [
      "Diversified Utilities", 
      "Electric Utilities",
      "Gas Utilities",
      "Water Utilities",
      "Utility Infrastructure Maintenance",
      "Utility Metering and Billing Services",
      ],
  },
  {
    id: 8,
    name: "Technology & Electronics",
    icon: "assets/images/icons/digital.png",
    image: "assets/images/industries/CSRD.webp",
    description:
      "is at the forefront of sustainability considerations, with a strong focus on environmental responsibility, social accountability, and governance excellence. Environmentally, the sector prioritizes energy use optimization and responsible e-waste disposal. Socially, it addresses workforce diversity, data privacy, and bridging the digital divide. Governance emphasizes responsible data management, ethical AI use, and compliance with regulations.",
    data: [
      "Environmental Impact Monitoring",
      "Product Sustainability",
      "Supply Chain Responsibility",
      "Energy Efficiency",
      "Circular Economy",
      "Data Privacy and Security",
      "Governance and Ethics",
      "Innovation for Sustainability",
    ],
    additionalContent: [
      "Application Software", 
      "Information Technology Services",
      "Multimedia & Graphics Software",
      "Semiconductor - Integrated Circuits",
      "Technical & System Software",
      "Scientific & Technical Instruments",
     ],
  },
  {
    id: 9,
    name: "Consumer Goods & Retail",
    icon: "assets/images/icons/retail-store.png",
    image: "assets/images/industries/BRSR.webp",
    description:
      "sector prioritize sustainability, addressing environmental, social, and governance challenges. Environmentally, the focus is on reducing packaging waste, sustainable sourcing, and promoting circular economy practices. Socially, the sector emphasizes fair labor practices, product safety, and consumer rights. Governance concerns include ethical marketing, supply chain transparency, and regulatory compliance. ",
    data: [
      "Sustainable Product Development ",
      "Supply Chain Sustainability ",
      "Product Labeling and Certification ",
      "Circular Economy Initiatives ",
      "Ethical Sourcing and Labor Practices ",
      "Product Transparency ",
      "Social Responsibility ",
    ],
    additionalContent: [
      "Food and Beverage", 
      "Personal Care and Hygiene Products",
      "Apparel and Textiles",
      "Household Goods and Cleaning Products",
      "Health and Wellness Products",
      "Stationery and Office Supplies",
      ],
  },
  
  {
    id: 10,
    name: "Entertainment",
    description:
      "navigates distinct sustainability challenges, balancing environmental stewardship, social responsibility, and governance excellence. Environmentally, the focus is on minimizing production and event footprints. Socially, promoting diversity, fair talent treatment, and community engagement are key priorities. Governance emphasizes upholding intellectual property rights, ethical content production, and transparent financial reporting. ",
    icon: "assets/images/icons/entertainment.png",
    image: "assets/images/industries/Sustainability Disclosure.webp",
    data: [
      "Environmental Impact Monitoring",
      "Sustainable Content Production",
      "Energy Efficiency",
      "Social Responsibility",
      "Governance and Ethics",
      "Content Ethics",
      "Community Engagement",
    ],
    additionalContent: [
      "Film Production and Distribution", 
      "Streaming Platforms",
      "Video Game Development and Publishing",
      "Digital Media and Social Platforms",
      "Educational Entertainment",
      "Animation and Visual Effects",
      ],
  },
  {
    id: 11,
    name: "Healthcare",
    description:
      "faces complex sustainability challenges, requiring a multifaceted approach. Ensuring high product quality and safety, equitable healthcare access, and efficient management of medical waste are critical considerations. The sector must also minimize carbon emissions and navigate an intricate regulatory environment, emphasizing strong governance and transparency.",
    icon: "assets/images/icons/healthcare.png",
    image: "assets/images/industries/Supplier Assessments.webp",
    data: [
      "Environmental Impact Monitoring",
      "Sustainable Content Production",
      "Energy Efficiency",
      "Social Responsibility",
      "Governance and Ethics",
      "Content Ethics",
      "Community Engagement",
    ],
    additionalContent: [
      "Pharmaceuticals", 
      "Medical Devices and Equipment",
      "Health Insurance",
      "Diagnostics and Laboratory Services",
      "Long-term Care Facilities",
      "Rehabilitation Services",
     ],
  },

];

// Products list starts here

const PRODUCTS: productsContent[] = [
  {
    id: 0,
    name: "supplier assist",
    icon: "assets/images/icons/power-plant.png",
    image: "assets/images/industries/img1-big.png",
    description:
      "In the dynamic energy sector, we focus on sustainable solutions, energy efficiency, and innovative technologies to meet the growing global demand while addressing environmental concerns.",
    data: [
      "Environmental Performance Monitoring",
      "Regulatory Compliance",
      "Energy Efficiency",
      "Renewable Energy Integration",
      "Supply Chain Management",
      "Stakeholder Engagement",
      "Risk Management",
      "Reporting and Transparency",
      "Benchmarking and Peer Comparison",
      "Reporting and Transparency",
      "Investor Relations",
      "Scenario Analysis",
    ],
  },
];
// Products list ends here
// Insight page starts here
const BLOGSFIRSTCONTENT: BlogsContent[] = [
  {
    id: 4,
    updatedDate: "Updated: November 22, 2024",
    name: "Delivering unparalleled sustainability insights with Agentic AI",
    icon: "assets/images/all/ai/ai-article.png",
    description:
      "Delivering unparalleled sustainability insights by building leading AI agents to accelerate automation, optimization and better decision-making",
    content: `
      
        In today’s world of escalating environmental challenges, leveraging AI to accelerate solutions is vital. AI agents – as part of the Agentic AI system - are reshaping how organizations approach sustainability. These intelligent systems streamline intricate tasks, ranging from regulatory compliance to carbon footprint reduction, while improving overall data reliability. Designed to collaborate with humans, these AI tools amplify decision-making rather than replacing it. 

        The Role of AI in Driving Efficiency 

        AI agents are not confined to a single function. They work invisibly in the background while also interacting through user-friendly interfaces. These systems analyze vast datasets, integrate seamlessly across departments, and provide actionable outcomes. By handling repetitive processes, AI allows leaders to channel their focus toward strategic goals like innovation, critical planning, and stakeholder engagement. 
        The increasing demand for sustainability compliance, coupled with targets such as the 2030 climate goals, underscores the urgency for such advanced tools. AI agents accelerate progress through: 
        
        - Streamlined Reporting: Ensuring precise and timely submissions for regulatory mandates. 
        - Environmental Optimization: Pinpointing and addressing areas of high carbon emissions. 
        - Enhanced Data Accuracy: Delivering consistent insights for better operational decisions. 

        From Concept to Deployment: Building AI Solutions 

        Rather than functioning in isolation, AI agents often collaborate within larger systems called agentic systems. These agentic systems operate autonomously, allocating responsibilities among specialized agents. Critical processes like reflecting on outputs and strategizing subtasks ensure that tasks are executed with precision and efficiency. 
        An Agentic AI Framework offers a robust methodology for deploying AI agents. It follows three core stages: 

        - Identifying Needs: Engaging with stakeholders to outline critical use cases. 
        - Developing Prototypes: Testing and refining AI models to align with organizational demands. 
        - Scaling Systems: Expanding operations while ensuring cost-efficiency and compatibility. 

        This can assist in managing sustainability data, including ingestion, validation, and reconciliation, using both proprietary and publicly available resources. 

        Real-World Impact of AI in Sustainability 

        AI agents are revolutionizing multiple areas of environmental management, including: 

        - Eco-Innovations: Informing product design with sustainability insights. 
        - Dynamic Decision Tools: Leveraging live data for proactive responses. 
        - Supply Chain Monitoring: Minimizing environmental impacts through data-driven insights. 
        - Compliance Excellence: Guaranteeing accuracy and dependability in official reporting. 
        - Portfolio Management: Provides a powerful tool to aid Investors/Private Equity/VC with sustainability insights for decision making across portfolios or new deals. 

        By complementing human expertise, these systems significantly boost operational efficiency without diminishing the strategic value of human input. 

        Shaping the Future of Sustainability 

        The integration of AI agents into business operations is redefining how organizations tackle sustainability goals. With their ability to automate complex workflows and deliver actionable insights, these tools are essential for meeting environmental objectives and navigating regulatory landscapes. As adoption grows, AI agents promise to be a cornerstone in building a sustainable, competitive future. 

        To see the Agentic AI in action, Schedule a demo today! 
        `,
  },
  {
    id: 2,
    name: "Leveraging Digital Platforms for a Greener Future",
    updatedDate: "Updated: August 08, 2024",
    icon: "assets/images/all/sustainable_transformation_news.png",
    content: `
      As the world grapples with the challenges of climate change, environmental degradation, and social inequality, organizations are recognizing the urgent need to integrate sustainability into their core operations. The opportunity for a great sustainability platform has never been more compelling. In this article, we'll explore the exciting prospects, challenges, and changing global compliance mandates that are driving the demand for innovative sustainability solutions. 

      The Sustainability Imperative  

      The United Nations' Sustainable Development Goals (SDGs) and the Paris Agreement have set a clear direction for global sustainability efforts. Governments, corporations, and civil society are working together to reduce greenhouse gas emissions, promote sustainable development, and ensure a livable future for generations to come. 

      Organizations are responding to this call to action by restructuring their projects and processes to prioritize sustainability. They're recognizing that sustainability is not only a moral imperative but also a strategic business opportunity. By embracing sustainability, companies can reduce costs, enhance brand reputation, and drive innovation. 
      
      The Challenges of Sustainability Management 

      Despite the growing commitment to sustainability, organizations face significant challenges in managing their sustainability efforts. These challenges include: 

      - Data management: Collecting, processing, and analyzing large volumes of sustainability data from diverse sources. 
      - Reporting and compliance: Meeting the requirements of various sustainability reporting frameworks and regulations. 
      - Supply chain management: Engaging suppliers and vendors in sustainability efforts and monitoring their performance.  
      - Stakeholder engagement: Communicating sustainability progress and goals to employees, customers, investors, and communities. 

      The Changing Landscape of Global Compliance Mandates 

      The regulatory environment for sustainability is evolving rapidly. Governments and international organizations are introducing new laws, regulations, and reporting requirements to drive sustainability progress. Some notable examples include: 

      - European Union's Green Deal: A comprehensive plan to reduce greenhouse gas emissions and promote sustainable development. 
      - Task Force on Climate-related Financial Disclosures (TCFD): A global framework for climate-related risk disclosure. 
      - Global Reporting Initiative (GRI): A widely adopted sustainability reporting framework.  

      The Need for Enterprise-Grade Digital Platforms 

      To overcome the challenges of sustainability management and comply with evolving regulations, organizations require enterprise-grade digital platforms. These platforms must be capable of processing large volumes of structured and unstructured data from diverse sources, including: 

      - Enterprise data: Financial, operational, and performance data from ERP, CRM, and other systems. 
      - Non-enterprise data: Data from sensors, IoT devices, and external sources, such as weather patterns and market trends. 
      - Structured data: Formatted data from databases, spreadsheets, and other structured sources. 
      - Unstructured data: Unformatted data from emails, documents, social media, and other unstructured sources. 

      The Limitations of Manual Sustainability Data Management 

      Despite the importance of sustainability data management, many organizations – even those with revenues over $1 billion – still rely on manual processes. This approach is time-consuming, prone to errors, and fails to provide actionable insights. Manual data management also limits the ability to leverage technology, such as artificial intelligence and machine learning, to drive sustainability progress. 

      The Power of AI-Native Sustainability Platforms 

      Redwoods AI, an innovative sustainability platform, is revolutionizing the way organizations manage their sustainability efforts. With its AI-native mindset, Redwoods AI provides a robust and scalable platform for collecting, processing, and analyzing large volumes of sustainability data. 

      Redwoods AI's platform offers a range of benefits, including: 

      - Automated data collection: Integrates with diverse data sources to collect and process large volumes of sustainability data. 
      - Advanced analytics: Applies machine learning and artificial intelligence to provide actionable insights and predictive analytics. 
      - Reporting and compliance: Supports various sustainability reporting frameworks and regulations, ensuring compliance and reducing reporting burdens. 
      - Stakeholder engagement: Enables organizations to communicate sustainability progress and goals to employees, customers, investors, and communities. 

      Conclusion 

      The opportunity for a great sustainability platform has never been more compelling. As organizations strive to integrate sustainability into their core operations, they require innovative digital solutions to manage their sustainability efforts effectively. 

      Redwoods AI's enterprise sustainability platform offers a cutting-edge solution for organizations seeking to leverage new technologies and drive sustainability progress. With its AI-native mindset and robust features, Redwoods AI is poised to revolutionize the sustainability landscape. 

      Consider Redwoods AI's enterprise sustainability platform as your next-generation solution for achieving a sustainable future. Consider partnering with Redwoods AI to drive sustainability progress, reduce costs, and enhance your brand reputation.`,
    // description:
    //   "Redwoods AI introduces cutting-edge AI agents to streamline sustainability workflows, optimize resources, and drive better decisions for a sustainable future.",
  },
  {
    id: 3,
    updatedDate: "Updated: June 28, 2024 ",
    name: "B Corporations: Sustainability and Continuous Improvement in Business ",
    icon: "assets/images/imageblog4.jpg",
    description:
      "Beyond Profit: The Triple Bottom Line of ESG – Environment, Social, and Governance Excellence.",
    content: `What is a B Corp? 
    
    B Corporations, or B Corps, are businesses certified by the organization B Lab Global for meeting high standards of social performance, environmental performance, transparency, and accountability. In addition to demonstrating high performance in these areas, these businesses also make legal commitments to incorporate stakeholder consideration and governance into their corporate structure. 

    One of main reasons businesses decide to undergo the B Corp certification process is the prospect of driving positive impact. B Corps work to ensure they are not negatively impacting their workers, customers, communities or the environment, and many stakeholders—especially consumers—want to support impact-conscience businesses.  
    
    Another important aspect of a B Corp is their commitment to continuous improvement. As certified B Corps, businesses are encouraged to continually measure their social and environmental impact and to make improvements as they upkeep their certification and work towards recertification every 3 years. 
    
    B Corps and Sustainability 

    B Lab Global states, “B Corps are not claiming to be perfect companies, but instead, those willing to measure their impacts, identify opportunities to improve, and implement changes to drive change over time.”  
    
    This “willingness” of a company is actually examined within the B Corp certification processes.  
    
    Businesses pursuing B Corp certification must measure and report their impact through the B Impact Assessment (BIA), a digital tool that can help measure, manage, and improve positive impact performance for environment, communities, customers, suppliers, employees, and shareholders. The standards used within the BIA are very similar to those we see in other mandatory and voluntary sustainability reporting frameworks. Depending on your company's size, you may be required to report to and align with these other frameworks alongside your B Corp certification. It is in this sense that robust corporate sustainability and B Corp-aligned business practices fall hand-in-hand.   
    
    Opportunities for Greater Improvement 

    Because of the parallels between B Corp values and corporate sustainability values, B Corps are often leaders in sustainability. Naturally, their B Corp efforts align with corporate sustainability reporting efforts, making the transition from voluntary reporting to mandatory reporting much simpler. However, not all B Corps focus efforts into reporting outside of the certification process, and for those that do there is always room for improvement.  
    
    For example, coming back to the B Impact Assessment, to be eligible for certification companies need only score 80 points out of 200. That’s only a 40%. As businesses continue down their B Corp journey, and eventual recertification, the hope is that they will continue to improve their score. In regard to activity outside of the B Corp certification, only large multi-nationals are required by B Lab Global to conduct work on projects such as materiality assessments, public impact reports aligned with third-party frameworks (ex. GRI), and other external social and governance disclosures. With the growing regulatory landscape and legislation such as the SEC Climate Disclosure Rule and the EU CSRD, companies should now, more than ever, be preparing for corporate disclosures and sustainability practices. Small to medium sized businesses, which make up a significant proportion of certified B Corps, should be encouraged to continue their sustainability and transparency efforts outside of the B Corp process even if they are not required to do so. 
    
    A Call to Action; The Redwoods.ai Solution 

    Given the various opportunities for greater improvement, we believe B Corps and companies who are interested in pursuing certification should continue to explore how their companies can commit to sustainability outside of the certification process. 
    
    Redwoods.ai offers a robust sustainability solution that is perfect for B Corporations and those aspiring to assist with their commitment to continuous improvement. We offer unique tools such as: 
    
    - An ESG Module that helps measure, calculate, and track sustainability and other ESG data for reports, GHG inventories (Scope 1, 2, 3), and other analytics (Social Impact, Corporate Governance, etc.) 
    
    - A Supplier Sustainability Portal that helps companies engage their supply chains and gives suppliers the AI tools necessary for data collection, calculation, and reporting
    
    - AI Services and Data Integrations that can automate processes and data collection

    - Automated Reporting Frameworks that empower businesses to manage their sustainability data and prepare for mandatory and voluntary reporting to various frameworks (GRI, CDP, SASB, CSRD, TCFD)—as well as B Corp certification or recertification aligned with the B Lab Global B Impact Assessment (BIA). 
    
    Want to learn more about how Redwoods.ai can help your business? Schedule a demo! `,
  },
//   {
//     id: 0,
//     name: "Navigating the Complexities of ESG Data Collection",
//     updatedDate: "Updated: December 18, 2023",
//     icon: "assets/videos/environment.jpg",
//     content: `
//       In the current business landscape, the significance of sustainability mirrors the transformative impact digitalization had a decade ago. Every facet of business operation now intersects with environmental, social, and governance (ESG) considerations. As the world rapidly evolves, the urgency for organizations to demonstrate compliance with stringent ESG benchmarks intensifies. 

//       1.Insight

//       The ESG data sector is experiencing unprecedented growth, with its value potentially reaching $1 billion annually—a threefold increase in just half a decade. Initially driven by asset managers focused on eco-friendly investments, the demand for ESG data is diversifying. Regulatory bodies are increasingly emphasizing the sustainability of small and mid-sized enterprises (SMEs), while large corporations are keen on fostering green practices within their supply chains. A critical area of interest lies in the ESG ratings of SMEs and their suppliers, reflecting a broader shift towards comprehensive sustainability measures. 
      
//       2.Challenges in ESG Data Gathering: Data Accessibility and Reporting Practices

//       The absence of a unified regulatory framework for ESG reporting, coupled with a lack of consensus on key terms and definitions, complicates the data-gathering process. Diverse guidelines add to the complexity, making it challenging to establish uniform standards.
       
//       3. Regulatory Frameworks and Standardization Issues

//       The absence of a unified regulatory framework for ESG reporting, coupled with a lack of consensus on key terms and definitions, complicates the data-gathering process. Diverse guidelines add to the complexity, making it challenging to establish uniform standards. 
      
//       4. Reliability and Transparency Concerns

//       The reliability of ESG disclosures is undermined by the absence of thorough auditing. This lack of verification for reported data often leads to 'greenwashing', where organizations disproportionately emphasize their positive ESG contributions while downplaying negative aspects.

//       5.The Enigma of ESG Scores 
      
// ESG scores, vital for assessing sustainability performance, remain a puzzle. Without regulated criteria for assessing sustainability requirements, these scores are difficult to penetrate. Each ESG rating agency employs a unique, evolving methodology, rendering the reliance on ESG scores dubious when the underlying metrics are obscure. 
      
// Insights from MIT's Sloan School of Management: A study by MIT's Sloan School of Management revealed a startling lack of correlation (average of 0.61) among various ESG vendor ratings. This discrepancy highlights the challenge of comparing companies accurately and raises concerns over measuring essential factors like carbon footprint and labour conditions.

// In today's digitalized world, quality data is paramount for informed decision-making. However, the current form of ESG data reporting is falling short. The challenges in data collection and processing not only skew results but can lead to misleading stakeholders, resource wastage, and poor strategic decisions. Addressing these challenges is crucial for the integrity and effectiveness of ESG initiatives. 
// `,
//     description:
//       "Sustainability Spotlight: Unveiling the Power of Ethical Supply Chains in the Modern Business Landscape.",
//   },

  // {
  //   id: 1,
  //   name: "AI: A Game Changer in Advancing ESG Practices ",
  //   updatedDate: "Updated: November 16, 2023",
  //   icon: "assets/images/imageblog2.png",
  //   description:
  //     "Navigating the Green Horizon: A Deep Dive into ESG Strategies for Sustainable Business Growth.",
  //   content: `The integration of Artificial Intelligence (AI) in various fields is not just a technological advancement; it's a paradigm shift, especially in addressing global challenges. My experience as an AI developer and a thought leader has given me a front-row seat to AI's transformative impact, particularly in enhancing Environmental, Social, and Governance (ESG) practices. 

  //   ESG factors are increasingly critical in shaping a sustainable future, gaining attention from investors, corporations, and governments alike. AI stands at the forefront of this movement, offering groundbreaking solutions to ESG challenges. Let's delve into some real-world applications of AI in this domain. 

  //   1.AI in Environmental Management 

  //   AI's role in environmental stewardship is multi-faceted: 

  //   • Climate Change Modeling: AI-powered climate models offer more precise predictions, aiding policymakers in crafting effective climate strategies. DeepMind's AI, for instance, has significantly improved weather forecasting accuracy. 

  //   • Deforestation Monitoring: Through satellite imagery analysis, AI can identify illegal logging and deforestation in real-time, allowing for immediate intervention. Global Forest Watch exemplifies this, using AI to detect forest loss patterns. 

  //   • Energy Efficiency: AI can optimize energy usage in buildings and industries, thereby reducing greenhouse gas emissions. Google's collaboration with DeepMind, for example, has cut energy consumption in its data centers by 40%. 

  //   2.AI in Social Responsibility 

  //   AI also plays a pivotal role in fostering social equity: 

  //   • Combating Discrimination: AI analyzes hiring and promotion data to identify and rectify biases. Unilever's adoption of AI in recruitment exemplifies efforts to create a more diverse and inclusive workforce. 

  //   • Healthcare Access: AI-driven healthcare solutions enhance medical access for marginalized communities. Zipline, with its drone-delivered medical supplies in Rwanda and Ghana, is a testament to this. 

  //   • Financial Inclusion: AI in fintech expands financial service access to the unbanked. Tala's mobile lending platform, for instance, uses AI to offer microloans to those traditionally excluded from financial services. 

  //   3.AI in Governance and Transparency 

  //   In governance, AI ensures efficiency and compliance: 

  //   • Regulatory Compliance: AI systems like Ayasdi help banks detect and prevent regulatory violations, particularly in anti-money laundering efforts. 

  //   • Public Sector Efficiency: The U.K.’s NHS employs AI to automate administrative tasks, enhancing overall service delivery. 

  //   •  Corporate Governance: AI tools, such as Datamaran, analyze governance data, aiding companies in identifying and improving their ESG performance. 

  //   4.Addressing AI Challenges and Ethical Considerations 

  //   While AI is a potent tool for ESG, it's crucial to navigate its challenges and ethical implications, especially concerning data privacy and environmental impact. 

  //   • Data Privacy: Ensuring data privacy involves robust security measures, employee training, and adherence to privacy laws like GDPR and CCPA. Privacy-preserving AI methods, such as federated learning, are vital in our projects, allowing us to responsibly utilize consumer data. 

  //   • Environmental Impact: The energy demand of AI systems is a concern. Developing energy-efficient AI algorithms, employing techniques like model pruning, and using energy-efficient hardware are steps towards sustainable AI development. 
  //   Conclusion 

  //   AI's role in promoting ESG practices is undeniable, offering transformative solutions for environmental management, social responsibility, and governance. However, responsibly harnessing AI's power necessitates addressing its challenges and ethical concerns. By adopting a thoughtful approach to AI deployment, we can leverage AI's full potential in driving sustainable development and fostering a more equitable society. `,
  // },
  // {
  //   id: 2,
  //   updatedDate: "Updated: November 2, 2023 ",
  //   name: "California Sets a Precedent with Landmark Law Mandating Carbon Emission Disclosure for Major Firms ",
  //   icon: "assets/images/imageblog3.jpg",
  //   description:
  //     "Beyond Profit: The Triple Bottom Line of ESG – Environment, Social, and Governance Excellence.",
  //   content: `In a move that marks a significant step towards climate accountability, California has enacted a pioneering law compelling large companies operating within the state, including global giants, to publicly disclose their carbon emissions. This legislation, the first of its kind in the United States, was signed into law by Governor Gavin Newsom and is viewed as a potential template for national climate accountability measures. 

  //   As of October 9, 2023, this groundbreaking mandate, known as SB 253, obligates California regulators to establish rules by 2025 for both public and private entities generating over $1 billion in annual revenue. This requirement impacts around 5,300 corporations, including Chevron, Wells Fargo, Amazon, and Apple. Starting in 2026, these companies must reveal their operational and electricity-related carbon emissions. More significantly, by 2027, they are also mandated to report "scope 3" emissions, which include emissions from supply chains and customers, a requirement that has sparked controversy, particularly among businesses in the fossil fuel sector. 

  //   Complementing this, SB-261, another bill passed by the state legislature, requires companies with revenues exceeding $500 million to disclose climate-related financial risks from 2026, with non-compliance attracting annual penalties. 

  //   Both bills extend their impact beyond California, potentially influencing global corporate practices. Environmental advocates, like Hollin Kretzmann of the Center for Biological Diversity, believe these disclosure requirements will expose major climate polluters in industries like oil and reduce the prevalence of greenwashing. 

  //   Governor Newsom, however, signed these bills with reservations. In his signing statements, he expressed concerns about the implementation timelines and the financial burden on businesses. This has led to speculation about possible amendments to the legislation, sparking worries that the laws might be diluted. 

  //   David Weiskopf from NextGen, a senior policy advisor, acknowledges Newsom's leadership but emphasizes the importance of effectively implementing these laws to maintain California's climate leadership. 

  //   This state initiative comes as the Securities and Exchange Commission (SEC) in the U.S. is finalizing a federal mandate with similar requirements. Proposed last year, the SEC's regulations would also require publicly traded companies to disclose their emissions and climate-related risks, including scope 3 emissions. 

  //   The California bills faced opposition from the state's chamber of commerce and the oil lobby, arguing that the reporting requirements would lead to inaccurate data and additional costs for consumers. Despite this resistance, other business sectors, including major tech companies and firms known for their sustainability practices, have supported the measures. 

  //   Ivan Frishberg, Chief Sustainability Officer at Amalgamated Bank, noted that his bank's climate-focused practices have been profitable, suggesting that more companies should embrace climate disclosure. 

  //   In the international arena, the European Union has already implemented regulations requiring large companies to disclose climate data, and the California laws could affect many companies operating both in the EU and California. 

  //   While the SEC's chair, Gary Gensler, sees the California laws as setting a new standard that could influence federal regulations, these measures still face opposition from the fossil fuel industry at the federal level. 

  //   Environmental advocates, however, view the California legislation as a demonstration that fossil fuel interests are not negotiating in good faith and urge federal regulators not to yield to their demands. They are also vigilant about potential changes to the legislation, especially those that might weaken its impact. The California Chamber of Commerce, indicating its intent to lobby for amendments protective of business interests, has raised concerns among bill supporters about the potential dilution of these groundbreaking climate disclosure policies. `,
  // },
];

// Content for news & events starts here

export const NEWSEVENTS: any[] = [
  {
    id: 0,
    name: "Redwoods AI Launches Agentic AI: Transforming Sustainability ",
    updatedDate: "Updated: November 22, 2024",
    icon: "assets/images/all/ai-news.png",
    iconClass: "w-auto",
    content: `
      Redwoods AI proudly announces the launch of its groundbreaking Agentic AI product—a transformative solution designed to accelerate automation, streamline workflows, and empower decision-making across sustainability initiatives. As environmental challenges continue to intensify, organizations face increasing pressure to adapt, comply with regulations, and achieve ambitious sustainability goals. Agentic AI is here to provide the tools needed to tackle these challenges with precision and efficiency. 

      Redwoods AI: Driving Sustainability with Intelligence 

      The Agentic AI framework by Redwoods AI represents a leap forward in sustainability-focused technology. These AI agents are versatile, functioning both autonomously in the background and interactively through user-friendly interfaces. They process vast datasets, identify actionable insights, and integrate seamlessly across departments, enabling businesses to focus on innovation and strategic growth. 

      Integration with Existing Platforms 

      Agentic AI is more than a standalone tool; it operates within interconnected systems, autonomously dividing tasks among specialized agents to improve efficiency. The Redwoods AI Agentic AI framework ensures seamless deployment through three distinct phases: 

      - Identifying Needs: Collaborating with stakeholders to define critical objectives. 
      - Prototyping Solutions: Developing and refining models to meet organizational demands. 
      - Scaling Operations: Implementing adaptable, cost-effective systems for long-term impact. 
      - Real-World Impact: Revolutionizing Sustainability Management 

      Agentic AI is poised to transform multiple facets of sustainability management, including: 

      - Supply Chain Optimization: Monitoring and reducing environmental impacts with intelligent oversight. 
      - Dynamic Decision-Making Tools: Utilizing real-time data to enable proactive management. 
      - Investor Portfolio Insights: Equipping stakeholders with actionable sustainability metrics for smarter investment decisions. 

      Shaping the Future of Sustainability 

      The launch of Agentic AI signifies a new era of intelligent automation in sustainability. By leveraging cutting-edge technology and human expertise, Redwoods AI empowers organizations to exceed their sustainability objectives, navigate complex regulatory landscapes, and drive impactful change. This innovative product is set to become an essential tool for businesses striving for environmental and operational excellence. 

      Schedule a demo today to experience the power of Agentic AI. `,
    description:
      "Redwoods AI introduces cutting-edge AI agents to streamline sustainability workflows, optimize resources, and drive better decisions for a sustainable future.",
  },

  {
    id: 1,
    name: "Redwoods' Revolutionary Supply Chain Sustainability Platform",
    updatedDate: "Updated: August 10, 2024",
    icon: "assets/images/all/ai/supplier.webp", 
    iconClass: "w-auto",
    content: ` 
    Redwoods AI, a leading provider of AI Sustainability solutions, is proud to announce the launch of its groundbreaking supply chain sustainability platform. This innovative platform is designed to streamline supplier engagement, automate sustainability assessments, and provide actionable insights for businesses seeking to promote sustainability throughout their supply chain.  
    
    The platform is the result of Redwoods AI's expertise in AI/ML and AI agents, combined with its deep understanding of the challenges and opportunities facing businesses in the realm of supply chain sustainability, particularly the challenge of Scope3!  
    
    Key Features of the Redwoods AI Supply Chain Sustainability Platform  
    
    The Redwoods AI platform is designed to be user-friendly, efficient, and effective in managing supplier engagement for sustainability. Some of the key features of the platform include:  
  
    1. Supplier List Creation: Easily create and manage lists of suppliers, including contact information and other relevant details.  
    2. Supplier Onboarding: Seamlessly onboard suppliers onto the platform, ensuring that they have access to the necessary tools and resources.  
    3. Assessment Creation: Create new assessments with customized questionnaires to evaluate supplier sustainability performance.  
    4. Assessment Distribution: Send assessments to suppliers via email or mobile app, with notifications and reminders to ensure timely completion.  
    5. Supplier Engagement: Engage suppliers through a mobile app or message links, encouraging them to take action and complete assessments.  
    6. AI-Powered Autofill: Utilize Redwoods AI's machine learning capabilities to autofill assessments, reducing the burden on suppliers and increasing the accuracy of data.  
    7. Assessment Review and Management: Review and manage supplier assessments, tracking progress and identifying areas for improvement.  
    8. Dashboard Generation: Generate dashboards with response rates, providing a clear and concise overview of supplier sustainability performance.  
    
    Benefits of the Redwoods AI Supply Chain Sustainability Platform  
    
    The Redwoods AI platform offers a range of benefits for companies seeking to improve their supplier engagement for sustainability. Some of the key advantages include:  
  
    1. Increased Efficiency: Streamline supplier engagement processes, reducing the time and resources required to manage sustainability assessments.  
    2. Improved Accuracy: Utilize AI-powered autofill to increase the accuracy of supplier data, reducing errors and inconsistencies.  
    3. Enhanced Transparency: Provide clear and concise visibility into supplier sustainability performance, enabling informed decision-making.  
    4. Better Supplier Engagement: Engage suppliers more effectively, encouraging them to take action and improve their sustainability performance.  
    5. Reduced Risk: Identify and mitigate sustainability risks in the supply chain, reducing the likelihood of reputational damage or regulatory non-compliance.  
    
    Conclusion  
    
    Redwoods AI is proud to launch its supply chain sustainability platform, which is poised to revolutionize the way businesses engage with their suppliers on sustainability issues. By leveraging the power of artificial intelligence and machine learning, our platform provides a streamlined, efficient, and effective solution for managing supplier engagement and promoting sustainability throughout the supply chain.  
    
    Get Started Today! 

    If you're interested in learning more about the Redwoods AI supply chain sustainability platform and how it can help your business promote sustainability in the supply chain, we invite you to get in touch. 
    
    `, 
    
    description: "", 
    
    },
  {
    id: 2,
    name: "Key Takeaways from GreenBiz Circularity24 Conference in Chicago",
    updatedDate: "Updated: January 19, 2023",
    icon: "assets/images/greenbiz1.jpg",
    content: `
    The GreenBiz Circularity24 Conference, held in Chicago, brought together industry leaders, innovators, and sustainability enthusiasts to explore the latest trends and technologies in circular economy practices. The event, a testament to the growing emphasis on sustainability, featured insightful discussions, engaging workshops, and networking opportunities.

`,
    description:
      "Sustainability Spotlight: Unveiling the Power of Ethical Supply Chains in the Modern Business Landscape.",
  },

//   {
//     id: ,
//     name: "Catherine Atkin joins Redwoods.ai as Chief Sustainability Officer",
//     updatedDate: "Updated: January 19, 2023",
//     icon: "assets/videos/catherineatkin copy.jpg",
//     content: `
//     Pleasanton, California Redwoods AI Inc (www.redwoods.ai), a global climate tech innovator, announced the appointment of Catherine Atkin as Chief Sustainable Officer to add to their growing leadership team. Catherine will report to the CEO Arvind Reddy as part of the executive leadership team and will lead the product strategy and sustainability efforts for Redwoods.ai and its customers globally.

//     “The appointment of Catherine as Chief Sustainability Officer (CSO) is an exciting milestone for Redwoods.ai as we continue to broaden our climatic product services and solutions” said Arvind Reddy, Co-Founder and CEO of Redwoods.ai. “With her deep compliance and technology experience and passion for supply chain sustainability, Catherine will be a great addition to our leadership team as we innovate for our customers, create value for our shareholders and contribute to a sustainable future.”
      
//     As Chief Sustainable Officer (CSO), Catherine will advance the product strategy and growth for Redwoods.ai and deepen the company’s climate-tech capabilities, technology solutions and outreach. Her appointment supports Redwoods’ continued leadership in creating advanced compliance services and solutions that help customers reduce greenhouse gas (GHG) emissions, improve ESG and supply chain performance, and unlock operational cost savings.
    
//     Catherine Atkin is an attorney and expert on global carbon data architecture and GHG emissions policies that can drive decarbonization and catalyze the climate economy. As the Director of Carbon Accountable she developed the legislative proposal and acted as the main technical advisor on California’s recently enacted corporate GHG emissions reporting law (SB 253), a first in the nation requirement for full scope emissions reporting by the largest US public and private companies.
    
//     Catherine is a Stanford Law School CodeX Fellow and Chair of the Climate Data Policy Initiative (CDPI), a project that brings together climate experts, policy makers and technologists to inform the development of climate data policies with a special focus on how next-gen technologies like AI, IoT and blockchain can accelerate innovation and climate impact.  
    
//     At the international levels she co-chairs the UNFCCC Global Innovation Hub Finance Working Group and is an expert collaborator and contributor to the United Nations Centre for Trade Facilitation and Electronic Business Critical Raw Material Traceability and Sustainability Project and the Green Digital Finance Alliance.  Catherine received her undergraduate degree from Stanford University, her JD from UC Berkeley School of Law and has a Master’s degree in Urban Planning from the University of California Los Angeles.  
    
//     About Redwoods AI Inc.

//     Redwoods.ai, a Silicon Valley startup, is building a disruptive AI-copilot enterprise software platform empowering businesses to shape a sustainable future, achieve NetZero and comply with increasingly complex ESG regulations.  Our next gen AI-native end-to-end solutions offer a unique approach to plan & implement sustainability programs across the enterprise, drive faster adoption of new climate technologies, efficiently enable organizations and investors to optimize their supply chain sustainability and mitigate their carbon footprint. Learn more at www.redwoods.ai. 
    

// `,
//     description:
//       "Sustainability Spotlight: Unveiling the Power of Ethical Supply Chains in the Modern Business Landscape.",
//   },
  //   {
  //     id: 2,
  //     name: "Unveiling Redwoods.ai Experience at Verge Conference: A Journey of Innovation and Inspiration",
  //     updatedDate: "Updated: October 26, 2023",
  //     icon: "assets/images/Verge banner.png",
  //     iconClass: "w-100",
  //     content: `
  //     The Verge Conference 2023, a nexus of innovation and cutting-edge technology, provided a platform for trailblazers in the industry to showcase their groundbreaking work. Among the attendees was Redwoods.ai, an emerging player in the artificial intelligence sustainability landscape.

  //     At Redwoods.ai, we strive to be at the forefront of innovation and collaboration in the field of sustainability and climate technology. Redwoods.ai team were excited to be part of Verge 23 and forging strong partnerships with industry leaders to offer AI-powered ESG solutions, thus helping their corporates and governments accelerate their Net-Zero transformation. The conference showcased groundbreaking technologies, discussed emerging trends, and fostered valuable connections among attendees. In this blog, we will provide a glimpse into our unforgettable experience at the Verge Conference and how it reinforces our commitment to environmental, social, and governance (ESG) initiatives.

  //     Our mission is to empower every organization to do better for the planet. At Redwoods.ai we build world-class enterprise ESG software that makes it easy to bring sustainability to the forefront of your business.The Verge Conference provided the perfect platform to further our commitment to this mission. Redwoods.ai team met with industry leaders, partners & customers and presented the true power of AI & ecological solutions to achieve a sustainable future while complying to various regulations. We are excited to leverage the connections and knowledge gained from this unforgettable experience to continue driving innovation in our ESG technology. 

  //     Join us in this incredible adventure as we explore and champion initiatives that shape a better tomorrow. Together, we can create a world where innovation and collaboration pave the way to a sustainable future.

  //     For more details
  //     Contact: info@redwoods.ai

  // `,
  //     description:
  //       "Sustainability Spotlight: Unveiling the Power of Ethical Supply Chains in the Modern Business Landscape.",
  //   },
      
];

// Content for news & events ends here

const PRICING: Pricing[] = [
  {
    type: "Header",
    title: "ESG Goals & Strategy-Vision & Mission",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "ESG Goals & Strategy-Vision & Mission",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Policy & Procedures",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Industry Specific Content Package",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "AI powered ESG Simulations and Recommendations",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "ESG Insights-User Friendly Data Framework",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Near Real-Time ESG Scoring, Tracking and Notifications",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "ESG Credits & Impact Management",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "AI/ML Services for ESG Data Management and Recommendations",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "Header",
    title: "Reporting Framework",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Data Collections-Multiple Source",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Custom Form Data Collections",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "TCFD & Scenario Analysis",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Global Reporting Frameworks(GRI,CDP,SASB,TCFD)",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Stock Exchange Guidance",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title:
      "European ESG Frameworks (EU Taxonomy, CSRD, SFRD, Supplier Due Diligence)",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "GHG & Natural Frameworks",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Configurable ESG Dashboards",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Report Builder to Generate word, excel and PDF",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title:
      "AL/ML Intelligence Services for Multi-regulatory content and assisted response.",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "Header",
    title: "ESG Calculations & Scoring",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "SBTi's Best Practices and science-based target setting",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Scope 1, 2 Capturing and Calculations",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Scope 3 ( 15 Categories ) Capturing and Calculations",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Custom Emission Factors",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Water and Waste Management",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Human Capital, Safety, Economics Management",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "AI Powered Calculations and Predictions",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "AI Predictions and Recommendations",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "Header",
    title: "ESG Assessments",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Internal ESG Performance Evaluation",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Scope 1, 2 and 3 assessments",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "ESG Performance Monitoring",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Survey & Employee Engagement",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Generative AI for Content Preparation and Intelligence",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "AI Copilot Assisted Response",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "Header",
    title: "Governance & Risk Management",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "ESG Multi-Regulatory Framework",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Policy Framework",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "ESG Risk Management",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "GHG Mitigation & NetZero",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Supplier ESG Risk Assessments",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "ESG Reputation Risks Monitoring",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Compliance Reporting & Notifications",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Credits & Incentives",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "AI Copilot Assisted Reporting",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "Header",
    title: "Seamless Integrations-Systems & Data",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Microsoft Active Directory & SSO",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "REST API",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "CSV/Excel-Import & Export",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "SAP",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Oracle",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Salesforce CRM",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Workday",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Service Now",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Microsoft Dynamics",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "Header",
    title: "Lead the NetZero Transformation & Community Impact",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Green Initiatives and Community Impact",
    aware: false,
    accelerate: false,
    lead: true,
  },

  {
    type: "record",
    title: "Rewards and Recognition for employees",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Supplier Engagement and Incentives",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Employee Engagement and Leading the change",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "AI Copilot Assisted programs to lead the change",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "Header",
    title: "ROI Calculator",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "ROI Calculator",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "Header",
    title: "Market place and Partner Ecosystem",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Partner Ecosystem and solutions for decarbonization",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Domain Experts and Implementation Partners",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Technical Resources & System Integrators",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Accelerators for NetZero",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "Header",
    title: "Partner Ecosystem",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Email &Live Chat",
    aware: true,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Support Portal",
    aware: false,
    accelerate: true,
    lead: true,
  },
  {
    type: "record",
    title: "Customer Success Manager",
    aware: false,
    accelerate: false,
    lead: true,
  },
  {
    type: "record",
    title: "Phone Support",
    aware: false,
    accelerate: false,
    lead: true,
  },
];

const OURTEAM: OurTeam[] = [
  // {
  //   title: "Co-Founder & CEO",
  //   desc: "The Co-founder/CEO is a serial entrepreneur with proven diverse expertise in Software, Hardware, EV, Energy, Manufacturing, and Healthcare. He is an IIT Madras and Princeton University alumni and has founded/led startups, including his latest role as Founder/CEO of Innolia Energy.",
  // },
  // {
  //   title: "Co-Founder & CTO",
  //   desc: "The Co-founder/CTO is a seasoned technology executive with 10+ patens and serial entrepreneur with prior B2B startups in security, compliance, GRC and most recently leading AI/ML, Generative AI services platform at Adobe.",
  // },
  {
    title: "Core Team",
    desc: "Our core team is a diverse and passionate group of experts, united by a shared commitment to environmental stewardship. With backgrounds in sustainability, technology, and enterprise sales, they drive innovative solutions that foster both economic growth and environmental responsibility. Diversity and inclusion are core values, sparking creativity, driving innovation, and creating a dynamic startup culture that is welcoming, equitable, and primed for success.",
  },
  {
    title: "Advisory Group",
    desc: "Our advisory group consists of esteemed domain experts, each with a wealth of knowledge and experience. Their collective wisdom guides us through the intricacies of entrepreneurship, serving as our North Star. With their guidance, we navigate complexities, make informed decisions, and avoid pitfalls. Their unwavering support ensures we're well-prepared to overcome challenges and seize opportunities in pursuit of innovation and success.",
  },
];

// const DEMOURL = "https://calendly.com/redwoods-ai/30min?back=1&month=2024-02";
//const DEMOURL = "https://calendly.com/redwoods_ai/meet-with-redwoods-ai?month=2024-02";
const DEMOURL = "https://calendly.com/redwoods_terra/30min";

const PLATFORM: PlatformContent[] = [
  {
    id: 0,
    name: "Streamline",
    data: ["SAP", "Workday", "Microsoft", "API", "Salesforce", "Data Source"],
  },
  {
    id: 3,
    name: "Report",
    data: ["GRI", "SDG", "TCFD", "CSRD", "CDP", "ISSB", "SASB"],
  },
  {
    id: 1,
    name: "Measure",
    data: [
      "Climate",
      "Resources",
      "Circularity",
      "Work force",
      "Governance",
      "Supply Chain Diversity",
    ],
  },
  {
    id: 4,
    name: "Transform",
    data: ["NetZero", "Impact", "Engagement", "Risk Management", "Incentivize"],
  },
  {
    id: 2,
    name: "Accelerate",
    data: ["Decarbonization", "Insights", "Compliance"],
  },
];

export { INDUSTRIES, PRICING, DEMOURL, OURTEAM, PLATFORM, BLOGSFIRSTCONTENT };
