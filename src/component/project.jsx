import React, { useState } from "react";
import "./project.css";
import Chevron from "../assets/chevron.png"
import Image from "../assets/images.png"
import NPD from "../assets/NPD.png"
import hygotec from "../assets/hygotec.png"
import Ura from "../assets/UR uni.png"
import university from "../assets/university.png"
import Rtda from "../assets/rtda.png"
import Genera from "../assets/genera.png"
import Girinzu from "../assets/GiRiNZ.png"
import Enable from "../assets/enable.png"
import Strabag from "../assets/Strabag.png"
import Turner from "../assets/Turner.png"
import Advanced from "../assets/Advanced.png"
import Rincent from "../assets/Rincent.png"
import Main from "../assets/mainlogo.png"
import Power from "../assets/power.jpg"
import Africa from "../assets/african.jpg"
import Odex from "../assets/odex.jpg"
import Rwanda from "../assets/Rwanda.png"
import Kingdom from "../assets/Kingdom.png"
import Togo from "../assets/Togo.png"
import Liberia from "../assets/Liberia.png"
import Kenya from "../assets/Kenya.png"
import Angola from "../assets/Angola.png"
import Uganda from "../assets/Uganda.png"
import Drilling  from "../assets/Drilling.png"

export default function Project() {

  const testimonials = [
    {
      id: 1,
      description2: "Year: 2022 - 2024",
      description1: "Name of the project or assignment: Ngoma-Ramiro road upgrading project",
      quote1: "Project Location: Eastern province, Rwanda ",
      quote2: "Client: RTDA",
      quote3: "Project description: The project consists of execution works to construct lot 2 of the Ngoma-Ramiro road project which is 23 km long.",
      quote4: "Position Held: Geotechnical Engineer",
      quote5: "Activities Performed:",
      quote6: " To ensure quality of construction materials",
      quote7: " To review/do technical documents",
      quote8: " To interpret ground investigation data and provide recommendations thereof",
      quote9: " To do calculations for foundation",
      quote10: " Follow-up of site activities",
      quote11: " To advise the resident engineer in quality assurance and geotechnical matters regarding road construction work, ground stabilization associated with construction of road crossing a peat material in a marshland, etc.",
      quote12: " To provide technical assistance in geotechnical matters",
    },
    {
      id: 1,
      description2: "Year: 2022 - 2025",
      description1: "Name of the project or assignment: Kigali Infrastructure Project (KIP)",
      quote1: "Project Location: Kigali, Rwanda ",
      quote2: "Client: Kigali City",
      quote3: "Project description: The project consists of design and execution works to construct several roads with a total length 220 km in city of Kigali.",
      quote4: "Position Held: Geotechnical Engineer (Expert)",
      quote5: "Some of the roads worked on within KIP : Design of a geotechnical solution of Mageragere marshland; design of a geotechnical solution of Busanza marshland; design of a geotechnical solution of Karembure marshland; design of a geotechnical solution of Karuruma marshland as well as design of Karuruma bridge; geotechnical work on Kimihurura-Rugando-Gishushu road; geotechnical work on Gahanga-Nunga-Karembure road; geotechnical work on Akabuga ka Nyarutarama intersection, and geotechnical design of Akabuga ka Nyarutarama flyover bridge; geotechnical work on the access road to Groupe Scolaire Cyeru and new brick factory in Mbandanzi; geotechnical work on Nyabugogo-Akanogo road; geotechnical work on Yamaha-Kinamba-Utexirwa road; geotechnical work on Kiyovu road networks; geotechnical work on Kinamba-Gisozi-RDB road; geotechnical work on Rugenge-Muhima hospital-Nyabugogo access roads; geotechnical work on Apaper-SOS, and SOS-TV 1 road; etc.",
      quote6: "Scope of work:",
      quote7: " To provide expert’s service on geotechnical investigations, site assessment and design of road side slopes, retaining structures, bridges and other areas identified by KIP Engineering Office and/or as directed by KIP management;",
      quote8: " Develop blueprints or specifications for use during construction and ensures that all project comply with applicable standards/guidelines;",
      quote9: " To assess the potential adverse impacts of the development project on the stability of slopes, soil, Marshland, water and natural environment.",
      quote10: " To provide appropriate recommendations and remedial as well as mitigation measures to be adopted",
      quote11: " Provide technical advice on safe designs and construction;",
      quote12: " Undertake field trips to the identified area and carry out field surveys to confirm desk study interpretation and gather supplementary data;",
      quote13: " Review the existing marshland treatment technics/ publications, norms etc. and recommend expertise suggestions for required improvements",
      quote14: " Carry out research work of various problematic slope areas, marshland, road subsidence, upheaval, bridge subsidence sites etc. under the jurisdiction of DoRQ2 and recommend the long-term remedial measures",
      quote15: " Provide technical advice for “value engineering” during execution and redesign of hydraulic structures;",
      quote16: " Present the findings of site assessments and geotechnical investigations reports to KIP management and/or Client /Engineer office.",
      quote17: " Identify and assess the strength of geological materials by conducting necessary field and laboratory test and analysis",
      quote18: " Determine the geotechnical causes of existing structural failures, damages, and defects through site investigations and considering them during new structures design;",
      quote19: " Undertake geotechnical designs for roads and bridges under KIP",
      quote20: " Assess quality risks likely to be encountered in projects and propose early mitigationmeasures;",
      quote21: " Any other support on the project related to the durability of structures.",
      
    },
    {
      id: 1,
      description2: "Year: 2024",
      description1: "Name of the project or assignment: Kagasa housing development project",
      quote1: "Project Location: Kigali, Rwanda ",
      quote3: "Project description: The project is located in Bugesera, and it is about designing and building 40 whole houses that are affordable for rural Rwandans.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities Performed:",
      quote6: " Providing ground investigation specifications; designing, supervising, and executing ground investigation works on Kagasa site equivalent to a 1 hectare of land; preparation of ground investigation interpretative report providing general understanding of the ground conditions throughout the site, and soil parameters for foundations and soak-away pits design",
    
    },
    {
      id: 1,
      description2: "Year: 2023",
      description1: "Name of the project or assignment: Kigali Financial Square project",
      quote1: "Project Location: Kigali, Rwanda ",
      quote3: "Project description: The project is located in Kigali, and it is a business complex set to serve as a regional hub for financial services.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities Performed:",
      quote6: " Reviewing geotechnical reports, and conducting supplementary ground investigation work in order to provide expert second opinion on geotechnical data and their interpretation as well as to confirm the findings of the initial ground investigation for the purpose of informing the design of tower foundation.",
    },
    {
      id: 1,
      description2: "Year: 2022 - 2025",
      description1: "Name of the project or assignment: Upgradation of Nyamata 30/30 KV Switching Substation and Rehabilitation of Distributed Substations in Rubavu, Muhanga and secondary cities, as well as Upgrade of Gikondo, Nzove, and Gahanga Substations",
      quote1: "Project Location: Across Rwanda ",
      quote3: "Project description: The project consists of two parts. Part 1: Construction of new 30 kV switching substations and associated MV lines (overhead & underground) and rehabilitation of old cabins and MV line links (U.G &O.H) located in the different secondary cities of Rwanda where there is a need to connect new or rehabilitated cabins to existing MV and LV network, and Part 2: Upgrade of Gikondo, Nzove, Gahanga Substations.",
      quote4: "Position Held: Geotechnical specialist",
      quote5: "Scope of work:",
      quote6: " Providing specifications of ground investigation works (method statement); supervision of ground investigation works, and providing technical guidance on how geotechnical investigation works should be conducted; reviewing geotechnical reports; assessing stability of electrical infrastructure, etc.",
    },
    {
      id: 1,
      description2: "Year: 2022 - 2024",
      description1: "Name of the project or assignment: Gatuna One Stop Boarder Post Project",
      quote1: "Project Location: Gicumbi District, Rwanda ",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities Performed:",
      quote6: " Review of Historical Geotechnical Data: Conducting a review of previous geotechnical studies and reports related to the Gatuna OSBP project, dating back to 2019. This involved an evaluation of past findings to ensure a clear understanding of site conditions",
      quote7: " Guidance on Laboratory Testing: Providing technical guidance on laboratory testing for soil samples collected from the site, as part of the recent ground investigation exercise conducted in 2023.",
      quote8: " Design and Oversight of Supplementary Ground Investigations: Designing and supervising additional ground investigation activities.",
      quote9: " Preparation of Geotechnical Report: Compiling a geotechnical report summarizing the findings from the previous geotechnical studies and the recent supplementary ground investigations. This report provided necessary geotechnical information to inform the structural audit and other design decisions for the project.",
      quote10: " Proposing and designing long-term solution for the project: Proposing and designing long-term solutions for the project. Working as part of the team including structure design expert to design the long-term solution for the project",
    },
    {
      id: 1,
      description2: "Year: 2023 - 2024",
      description1: "Name of the project or assignment: Kepler project",
      quote1: "Project Location: Kigali, Rwanda ",
      quote3: "Project description: The project is located in Kigali, and it is about the works of developing Detailed Designs (Schematic Design, Design Development, Construction Documents) for the Kepler Campus, especially academic building and water treatment area",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Geotechnical scope:",
      quote6: " Investigation design and specification; production of tender documents, Advice on contractor selection and contract, designing and supervising ground investigation works, reviewing geotechnical reports, and providing appropriate feedbacks to the contractor, production of an Interpretative technical note summarizing the results of the investigation and providing recommendations for design, provide recommendations for the most appropriate foundation type, provide ad-hoc advice / inputs to allow structural engineering team to size foundations (e.g. allowable bearing capacities, guidance on settlements, etc., provide input to schematic design report (ground conditions, suitable foundation types, and recommended parameters for design), reviewing detailed design deliverables (drawings and specifications) relating to substructure and groundworks to ensure design assumptions are captured, provide ad-hoc advice/inputs to allow structural engineering team to develop the foundation design, reviewing construction documentation deliverables (drawings and specifications) relating to substructure and groundworks to ensure design assumptions are captured, and provide advice / guidance to the civil engineering team on ground-related aspects of site design, for example slope stability, earthworks, retaining walls, infiltration rates, etc.",
     
    },
    {
      id: 1,
      description2: "Year: 2023 - 2024",
      description1: "Name of the project or assignment: GP Tech project - Liberia",
      quote1: "Project Location: Nimba county, Bomi county, and Marshall area located in Liberia ",
      quote3: "Project description: The project is to design new ranger facilities and conservation centres in Liberia",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed / expected activities to be conducted:",
      quote6: " Desk study to identify likely ground conditions and provide guidance on potential risks, recommended design approaches, recommended investigation techniques, etc.; guiding the production of the terms of reference for geotechnical investigations; reviewing geotechnical report and providing technical comments; providing recommendations for most appropriate foundation type for each of the three sites; providing advice / inputs to allow Structural Engineering team to size foundations (e.g. allowable bearing capacities, guidance on settlements, etc); providing input to Schematic Design report (ground conditions, suitable foundation types, recommended parameters for design; reviewing Detailed Design as well as Construction Documentation deliverables (drawings and specifications) relating to substructure and groundworks to ensure design assumptions are captured; providing advice / guidance to Civil Engineering team on ground-related aspects of site design, for example slope stability, earthworks, retaining walls, infiltration rates.",
     
    },
    {
      id: 1,
      description2: "Year: 2023",
      description1: "Name of the project or assignment: Grafanil Project",
      quote1: "Project Location: Luanda, Angola ",
      quote3: "Project description: The project is located in Luanda, and it is about the works of design of Grafanil hospital, phase I.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities Performed:",
      quote6: " Previously completed geotechnical investigations have indicated the potential risk of collapsible soils. In order to fully understand the soil structure and behaviour, further geotechnical investigations were proposed. Therefore, the geotechnical consultant has designed the technical terms of references (ToR) to guide the additional ground investigation with the aim of verifying whether the Grafanil site is underlain by collapsible soils.",
     
    },
    {
      id: 1,
      description2: "Year: 2023-2024",
      description1: "Name of the project or assignment: Jacaranda project – Kenya",
      quote1: "Project Location: Kakamega - Kenya ",
      quote3: "Project description: The project is about the design of the three maternity units on three separate sites in Kakamega County, Kenya",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Guiding the production of the terms of reference for geotechnical investigations; reviewing geotechnical report and providing technical comments; providing recommendations for most appropriate foundation type for each of the three sites; providing advice / inputs to allow Structural Engineering team to size foundations (e.g. allowable bearing capacities, guidance on settlements, etc); reviewing Detailed Design deliverables (drawings and specifications) relating to substructure and groundworks to ensure design assumptions are captured; providing advice / guidance to Civil Engineering team on ground-related aspects of site design, for example slope stability, earthworks, retaining walls, infiltration rates.",
     
    },
    {
      id: 1,
      description2: "Year: 2022",
      description1: "Name of the project or assignment: Wasimi project",
      quote1: "Project Location: Muhazi",
      quote2: "Client: RICA",
      quote3: "Project description: The project consisted of the design and supervision of execution works to construct the Rwanda Institute of Conservation Agriculture campus. Project size is 3400 acres..",
      quote4: "Position Held: Geotechnical Engineer",
      quote5: "Activities performed:",
      quote6: " To ensure quality of construction materials.",
    },
    {
      id: 1,
      description2: "Year: 2023-2024",
      description1: "Name of the project or assignment: Mengo hospital - Uganda",
      quote1: "Project Location: Kampala, Uganda",
      quote3: "Project description: To design a renovation of an existing outpatient department building with the intention of a redefined building use.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed / expected activities to be conducted:",
      quote6: " Reviewing geotechnical report and providing technical comments as well as interpretation; providing technical inputs on new and existing foundations; providing advice / inputs to allow Structural Engineering team to size foundations (e.g. allowable bearing capacities, guidance on settlements, etc); providing advice / guidance to Civil Engineering team on ground-related aspects of site design, for example slope stability, earthworks, retaining walls, infiltration rates.",
    },
    {
      id: 1,
      description2: "Year: 2021-2022",
      description1: "Name of the project or assignment: Ground investigation at Centre of excellence for ophthalmology in Kigali",
      quote1: "Project Location: Kigali",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed / expected activities to be conducted:",
      quote6: " Supervision of ground investigation work, providing technical guidance on geotechnical testing, and reviewing geotechnical reports.",
    },
    {
      id: 1,
      description2: "Year: 2022",
      description1: "Name of the project or assignment: Construction of the headquarters of Integrate Health in Kara,Togo",
      quote1: "Project Location: Kara, Togo",
      quote3: "Project description: The project was about the design of Integrate Health headquarters based in Kara, Togo.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Supervision of ground investigation work, translation of specifications for ground investigations works from English to French, reviewing contractors’ tender returns and providing the recommendations to the client; reviewing ground investigation report, and producing a technical note on the ground investigation and geotechnical design.",
    },
    {
      id: 1,
      description2: "Year: 2022",
      description1: "Name of the project or assignment: National Museum of Heroism",
      quote1: "Project Location: Kigali, Rwanda",
      quote3: "Project description: To design a new National Museum of Heroism.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Supervision of ground investigation work; reviewing ground investigation report, and providing echnical comments thereof; producing an interpretation report on soil permeability characteristics.",
    },
    {
      id: 1,
      description2: "Year: 2022",
      description1: "Name of the project or assignment: Ground investigation work at a development site located in Gikondo",
      quote1: "Project Location: Gikondo, Kigali,Rwanda",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Conducting ground investigation work, determining soil parameters essential for planning and designing foundations, providing recommendations on foundations.",
    },
    {
      id: 1,
      description2: "Year: 2020 – 2021",
      description1: "Name of the project or assignment: Design and construction works for Rwanda Institute of Conservation Agriculture (RICA) campus ( funded by Howard G. Buffet Foundation)",
      quote1: "Project Location: Gashora, Eastern province, Rwanda",
      quote2: "Client: RICA",
      quote3: "Project description: To design a new National Museum of Heroism.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Supervision of ground investigation work; reviewing ground investigation report, and providing echnical comments thereof; producing an interpretation report on soil permeability characteristics.",
      quote7: " To review/provide technical drawings for foundations",
      quote8: " To provide technical specifications",
      quote9: " To interpret ground investigation data and provide recommendations on foundations.",
      quote10: " To conduct geotechnical site inspection at construction sites before foundation work is initiated to verify whether design assumptions are valid and provide appropriate recommendations on founding depth, foundation width, structural improvement, drainage, etc",
      quote11: " To do calculations for foundation.",
      quote12: " To provide technical assistance in geotechnical matters",
    },
    {
      id: 1,
      description2: "Year: 2020 – 2021",
      description1: "Name of the project or assignment: Construction of the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund",
      quote1: "Project Location: Kinigi, Western Province, Rwanda",
      quote2: "Client: Dian Fossey Gorilla Fund",
      quote3: "Project description: The project consisted of the design and supervision of execution works to construct the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund campus. The campus will include a Conservation Gallery that builds upon Dian Fossey’s legacy and serves as a key attraction for tourists from around the globe; an Education Outreach Center to increase opportunities for capacity building for students, staff, and the community; a Research Center that will enhance their cutting-edge research on gorillas and their habitats; and Housing to enable students, staff, and researchers to live on site and build professional and personal relationships. Throughout the campus, there will be interpretive paths for visitors to explore and expand their education of gorilla habitats and reforestation efforts. Project size is 4500 m2.",
      quote4: "Position Held: Geotechnical engineer",
      quote5: "Activities performed:",
      quote6: " To provide technical specifications.",
      quote7: " To review technical drawings.",
      quote8: " Assessment of stability of slopes.",
      quote9: " To conduct geotechnical site inspection at construction sites before foundation work is initiated to verify whether design assumptions are valid and provide appropriate recommendations on founding depth, foundation width, structural improvement, drainage, etc.",
      quote10: " To review/do calculations of foundations",
      quote11: " To do/review geotechnical reports.",
      quote12: " To provide technical assistance on geotechnical matters",
    },
    {
      id: 1,
      description2: "Year: 2020 – 2021",
      description1: "Name of the project or assignment: Design of Norrsken Kigali House",
      quote1: "Project Location: Kigali,, Rwanda",
      quote2: "Client: Norrsken foundation",
      quote3: "Project description: The project consisted of designing the new Kigali entrepreneurship hub which will be housed on the historic École Belge site in central Kigali. The design of the Norrsken Kigali House incorporated spaces for different scales and types of work, from large collaborative spaces to quiet individual workspaces, in addition to landscaped and semi-public outdoor spaces. The aim of Norrsken Kigali House is to fuel growth in East Africa, accelerating their rapid development of entrepreneurship by increasing access to international capital, ultimately shifting the paradigm from aid to investment (project size is 4400 m2).",
      quote4: "Position Held: Geotechnical engineer",
      quote5: "Activities performed:",
      quote6: " Review of the geotechnical documents of project.",
      quote7: " Supervision of ground investigation work.",
      quote8: " Reviewing ground investigation report and provide geotechnical data to be used as inputs in structural design.",
      quote9: " To conduct geotechnical site inspection during foundation work to verify whether the design assumptions are valid.",
      quote10: " To provide technical assistance on geotechnical matters",
    },
    {
      id: 1,
      description2: "Year: 2020 – 2021",
      description1: "Name of the project or assignment: UNOPS Manicaland project",
      quote1: "Project Location: Zimbabwe",
      quote3: "Project description: The project involved design of various education and healthcare facilities in Zimbabwe.",
      quote4: "Position Held: Geotechnical engineer",
      quote5: "Activities performed:",
      quote6: " Review and interpretation of ground investigation report.",
      quote7: " Provide geotechnical inputs for design of foundations.",
      quote8: " Characterization of sites based on their ground conditions.",
      quote9: " Working on retaining wall design.",
      quote10: " Provide technical assistance on geotechnical matters.",
    },
    {
      id: 1,
      description2: "Year: 2020 – 2021",
      description1: "Name of the project or assignment: Project on standardization of adobe blocks for use in local construction",
      quote1: "Project Location: Kigali, Rwanda",
      quote3: "Project description: The project was about developing standards that govern the production and use of adobe blocks in Rwanda. These would enable legalisation of adobe blocks in local construction.",
      quote4: "Position Held: Geotechnical engineer",
      quote5: "Activities performed:",
      quote6: " Review/write project documents.",
      quote7: " Characterization and confirmation of soil materials from borrow pits before being used for making adobe blocks.",
      quote8: " Reviewing, interpreting, comparing, and contrasting geotechnical data of the soils from different labs and providing conclusions thereof.",
      quote9: " Conducting bottle shaking tests in geotechnical laboratory to investigate whether these can effectively help in particle size distribution analysis of soils.",
      quote10: " Developing a low tech methodology that would help masons and other people to recognize the soils suitable for producing adobe blocks without having to perform time-consuming lab tests.",
    },
    {
      id: 1,
      description2: "Year: 2021",
      description1: "Name of the project or assignment: Kweza Craft Brewery project",
      quote1: "Project Location: Kinyinya, Kigali, Rwanda",
      quote2: "Client: Kweza craft brewery",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Conducting site inspection survey to evaluate the suitability of the soil for foundation as well as carrying out infiltration rate tests to evaluate the suitability of the site to accommodate infiltration basins and soakaway pits. In order to evaluate the suitability of the soil for foundations, visual inspection, trial pits, and dynamic penetration tests using steel rebars were conducted.",
    },
    {
      id: 1,
      description2: "Year: 2021",
      description1: "Name of the project or assignment: Cooling Fund Project",
      quote1: "Project Location: Kinyinya, Kigali, Rwanda",
      quote3: "Project description: Demonstrating the best practices of using adobe blocks in construction; best practices to be followed in producing adobe blocks, methodology used in conducting geotechnical site inspection for foundation work, and renovating/building a model house to demonstrate the above.",
      quote4: "Position Held: Geotechnical engineer",
      quote5: "Activities performed:",
      quote6: " Inspection of existing building in a geotechnical and structural perspective which was intended to be renovated, conducting site inspection survey to evaluate the suitability of the soil for foundation as well as the stability of the slope which was behind the house, designing a masonry wall to support the slope, providing technical drawings, providing a technical report, etc.",
    },
    {
      id: 1,
      description2: "Year:2021",
      description1: "Name of the project or assignment: Slope stability research",
      quote1: "Project Location: Kigali, Rwanda",
      quote2: "Client: MASS DESIGN GROUP",
      quote3: "Project description: The project was intended to provide technical insights on slope failures that are witnessed in Rwanda.",
      quote4: "Position Held: Geotechnical engineer",
      quote5: "Activities performed:",
      quote6: " Conducting literature review on the extent of the work done on slope stability in Rwanda; identifying the gaps in knowledge as far as slope stability and slope failures in Rwanda are concerned; conducting the literature review on slope stability in other areas which have similar soil as Rwanda (residual tropical soils); identifying the mechanism of slope failures in areas with tropical residual soils, drafting a concept note on the need of the study to investigate slope stability issues in Rwanda, etc.",
    },
    {
      id: 1,
      description2: "Year: 2020",
      description1: "Name of the project or assignment: GIRINZU housing development project in Gahanga",
      quote1: "Project Location: Kicukiro, Kigali, Rwanda",
      quote2: "Client: GIRINZU",
      quote3: "Project description: Girinzu project has as a mid-term objective to create in Kigali 200 housing units per year. Adapted to tropical climate, in altitude and steep hills, the houses are conceived to be very long lasting and tailor-made for the Rwandan way of life.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Given that a portion of foundation was to be placed on a fill, a calculation was done to verify the possibility of foundation differential settlement.",
      quote7: " Reviewing ground investigation report and provide recommendations on further ground investigation and design of foundations.",
      quote8: " Conducting a walkover survey to evaluate the stability of a slope located at the downstream side of the area intended for housing development.",
      quote9: " Providing insights on parameters that would be used in conducting seismic analysis in design of buildings in Rwanda.",
    },
    {
      id: 1,
      description2: "Year:2020",
      description1: "Name of the project or assignment: Aquaponics project in Kayonza",
      quote1: "Project Location: Kayonza, Eastern province, Rwanda",
      quote2: "Client: NjordFrey Ltd",
      quote3: "Project description: Building aquaponics system in Kayonza district located in Eastern province of Rwanda.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Conducting site inspection survey to evaluate the suitability of the soil for foundation. The site inspection involved trial pits, dynamic penetration using steel rebars, and visual inspection.",
    },
    {
      id: 1,
      description2: "Year:2020",
      description1: "Name of the project or assignment: Writing a technical proposal on identification of new rock quarries for Nyarubaka stonecraft plant",
      quote1: "Project Location: Kayonza, Eastern province, Rwanda",
      quote2: "Client: CVL",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " preparing a technical proposal detailing the methodology that would be used to identify good quality quarries for Nyarubaka stonecraft plant.",
    },
    {
      id: 1,
      description2: "Year:2020",
      description1: "Name of the project or assignment: Preparing a concept note on the study to address the landslides problem (especially along transport corridors) in Rwanda. The concept note was submitted to RTDA",
      quote1: "Project Location: Kigali, Rwanda",
      quote3: "Project description: Investigation of landslides problems, their causes, triggering mechanisms, mitigation measures and cost effective solutions for handling slope instability cases in Rwanda.",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " preparing a technical concept note to address the landslides problems in Rwanda.",
    },
    {
      id: 1,
      description2: "Year:2020",
      description1: "Name of the project or assignment: A walkover survey at Rwaza and Rubagabaga sites following landslide eventst",
      quote1: "Project Location: Rwaza and Rubagabaga, Rwanda",
      quote2: "Client: East African Power Ltd",
      quote4: "Position Held: Geotechnical consultant",
      quote5: "Activities performed:",
      quote6: " Geotechnical site inspection.",
      quote7: " Identifying the causes of the landslides.",
      quote8: " Proposing mitigation measures.",
    },
    {
      id: 1,
      description2: "Year:2018",
      description1: "Name of the project or assignment: Rural Mobility and Socio-Economic Baseline Pilot Study in Liberia (Report - on impact evaluation methodologies of rural roads - funded by the UK Aid through the Research for Community Access Partnership (RECAP)).",
      quote1: "Project Location: Liberia",
      quote2: "Client: East African Power Ltd",
      quote4: "Position Held: Research assistant",
      quote5: "Activities performed:",
      quote6: " Systematic literature review on impact evaluation methodologies of rural roads projects to inform the Rural Mobility and Socio-economic Baseline Pilot study in Liberia."
    },
    {
      id: 1,
      description2: "Year: Since November 2016",
      description1: "Name of the project or assignment: Construction of low volume roads over weak expansive soils using geosynthetics (further postgraduate studies).",
      quote1: "Project Location: Birmingham, UK",
      quote2: "Client: East African Power Ltd",
      quote4: "Position Held: Research assistant",
      quote5: "Activities performed:",
      quote6: " Extensive literature review and synthesis; identifying the gaps in knowledge through literature review; investigating the best geogrid position in road pavement structure to maximize reinforcement benefit; investigating the best practice to combine non-woven geotextiles and geogrids within road pavement structure; investigating whether there is any structural role associated with the use of non-woven geotextiles in road construction; investigating the best use of combining two geogrids within road pavement structure; investigating whether geogrids can alleviate differential shrink/swell movements of road pavements built over expansive soil subgrades; building road pavement models in laboratory on weak expansive soil subgrades; applying cyclic plate load tests on pavement models and measure rutting behaviour over time; evaluation of geosynthetic reinforcement benefit based on the level of surface rutting recorded by LVDT mounted on cyclic plate load equipment; studying the effect of base CBR on observed performance; simulating wet and dry season in laboratory and investigating their effects on road pavement models where subgrade water content was monitored by moisture sensors and pavement deformation was monitored by LVDTs placed on surface of pavements; calibration of LVDTs and moisture sensors; monitoring the swelling behaviour of compacted expansive soils in CBR moulds allowed to stand in water for a period of up to 11 months; designing bespoke dynamic compaction methodology to allow compaction of subgrade, base, and cold lay macadam into the test tank; conducting a wide range of geotechnical tests including atterberg limit tests, compaction tests, hand vane shear tests, dynamic penetration tests, sieve analysis tests, oedometer tests, free swell index tests, and density tests; etc.."
    },
    {
      id: 1,
      description2: "Year: 2015-2016",
      description1: "Name of the project or assignment: Nyarubaka cobble stones project for 70 km roads projects of the city of Kigal.",
      quote1: "Project Location: Rwanda",
      quote4: "Position Held: cobble stones plant supervisor",
      quote5: "Activities performed:",
      quote6: " Production of cobble stones for 70 km roads project of the city of Kigali; production of crushed aggregates for different construction projects; search of the new quarrying sites; creation of an access road to the then newly identified quarrying site; maintenance of a 5 km road from Musambira to Nyarubaka; management of quarry and crusher activities; there has also been supply of water from borehole dug in marshland area to the uphill site area in order to supply stones cutting machines (this activity of supplying water was conducted by subcontractors); etc."
    },
    {
      id: 1,
      description2: "Year: 2015",
      description1: "Name of the project or assignment: Nyamirambo Zone Belge asphalt road.",
      quote1: "Project Location: Kigali, Rwanda",
      quote3: "Main project features: It is asphalt road that extends from Mumena stone paved road to Banque Populaire. The exercise was given by NPD Ltd to appraise the road status in order to evaluate the engineer technical capability before hiring him.",
      quote4: "Position Held: Engineer",
      quote5: "Activities performed:",
      quote6: " Conducting a walkover survey to appraise the state of the road two years after its completion; providing information on various types of road defects that were found on the road (the road defects identified include raveling, pothole-like defect, oil spots, progressive removal of connection between pavement and side drain, fatigue failure concrete along longitudinal drain; and clogged drain requiring maintenance); preparing the report and submitting it to NPD Ltd."
    },
    {
      id: 1,
      description2: "Year: May 2014",
      description1: "Name of the project or assignment: Research project on stabilization of expansive soils using fly ash and lime (Msc. project)",
      quote1: "Project Location: Birmingham",
      quote3: "Project description: The study was conducted to investigate the use of fly ash and lime to reduce shrink/swell characteristics of expansive soils. The effects of fly ash on initial lime consumption, atterberg limits, and free swell ratio of expansive soils were examined.",
      quote4: "Position Held: Msc. student",
      quote5: "Activities performed:",
      quote6: " Literature review on expansive soils and stabilization methods thereof, conducting various tests including pH tests to predict free lime content of fly ash and to determine the optimum amount of lime to be used in soil treatment for better improvement, preparing various soil, fly ash and lime mix and subject them to different curing periods, atterberg limit tests, oedometer test, free swell index tests, specific gravity tests, hydrometer tests, evaluation of the experimental findings, etc.",
    },
    {
      id: 1,
      description2: "Year:2012 - 2013",
      description1: "Name of the project or assignment: Kigali-Gatuna road rehabilitation project",
      quote1: "Project Location: Rwanda",
      quote3: "Project description: Road rehabilitation and widening between Rwandan capital Kigali and border town Gatuna (towards Uganda)",
      quote4: "Position Held: Trainee first and technical engineer later",
      quote5: "Activities performed:",
      quote6: " Supervision, preparation of works method statements, reviewing technical drawings, following up the progress of daily activities including earthworks, road foundation, road base, etc., and other tasks delegated by the site manager.",
    },
    {
      id: 1,
      description2: "Year:2012",
      description1: "Name of the project or assignment: Feasibility study of the construction of earth dam at Gatimbazi marshland",
      quote1: "Project Location: Rwanda",
      quote3: "Project description: This was a dissertation project as a part of bachelor’s degree studies in civil engineering. The earth dam was intended for the creation of a large water reservoir for irrigation purpose at Gatimbazi marshland.",
      quote4: "Position Held: Undergraduate student",
      quote5: "Activities performed:",
      quote6: " Site visits to Gatimbazi marshland, identifying the ideal location of an earth dam at Gatimbazi marshland, collection of soil samples from the marshland area, and testing them in geotechnical laboratory, preparation of a report, etc.",
    },
    {
      id: 1,
      description2: "Year:2011",
      description1: "Name of the project or assignment: Execution Works for Development of Primary Irrigation network of Perimeter 8 (1500ha) for Muvumba Valley",
      quote1: "Project Location: Rwanda",
      quote4: "Position Held: Trainee",
      quote5: "Activities performed:",
      quote6: " Site supervision when delegated by site engineer.",
      quote7: " I also got exposure on the following: construction of earthdams, concrete dams, canals, etc.; implication of soil mechanics in construction of rural roads and earthdams; construction of rural bridges; etc.",
    },
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const partners = [
    { id: 1, name: "Partner 1", image: Image, label: "Mass Design Group" },
    { id: 2, name: "Partner 2", image: NPD, label: "NPD LTD" },
    { id: 3, name: "Partner 3", image: hygotec, label: "Hycogec Consultant" },
    { id: 4, name: "Partner 4", image: Ura, label: "University of Rwanda" },
    { id: 7, name: "Partner 7", image: Girinzu, label: "GiRiNZU" },
    { id: 8, name: "Partner 8", image: Enable, label: "EarthEnable" },
    { id: 10, name: "Partner 10", image: Turner, label: "Turner & Townsend" },
    { id: 12, name: "Partner 12", image: Rincent, label: "Rincent BTP" },
    { id: 13, name: "Partner 12", image: Main, label: "Lumen Ltd" },
    { id: 14, name: "Partner 12", image: Power, label: "MBH Power Ltd" },
    { id: 15, name: "Partner 12", image: Africa, label: "East African Power (EAP)" },
    { id: 15, name: "Partner 12", image: Odex, label: "Odelx Ltd " },
    { id: 9, name: "Partner 9", image: Strabag, label: "Strabag International Gmbh" },
    { id: 6, name: "Partner 6", image: Genera, label: "General Architecture collaborative" },
    { id: 5, name: "Partner 5", image: university, label: "University of Birmingham" },
    { id: 6, name: "Partner 6", image: Rtda, label: "Rwanda Transport Development Agency (RTDA)" }, 
    { id: 6, name: "Partner 6", image: Drilling , label: "Africa Drilling & Exploration Ltd" },
    { id: 11, name: "Partner 11", image: Advanced, label: "Advanced Construction Technology Services ( ACTSь)" },
  ];
  
  const totalSlides = Math.ceil(partners.length / 6); 

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
  return (
    <section id="Project" className="bg-gray-90 text-white py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex flex-col justify-between items-start m-auto mb-8 sm:mb-10 lg:mb-16">
          <div className="mb-4 sm:mb-6 max-w-full ">
            <h2 className="text-2xl text-black m-auto sm:text-3xl text-center lg:text-5xl font-bold mb-2 sm:mb-4">
              Locations of projects worked on/countries of work experience
            </h2> 
          </div>
          <div className="max-w-full w-md-75 w-lg-50 m-auto ">
          <ul className="flex  space-x-8">
              <li>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl py-2 sm:py-4 md:py-6 lg:py-8">
                Liberia<span ><img className="m-auto w6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-6 " src={Liberia} alt="" /></span>
                </p>
              </li>
              <li>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl py-2 sm:py-4 md:py-6 lg:py-8">
                Togo<span ><img className="m-auto w6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-6 " src={Togo} alt="" /></span>
                </p>
              </li>
              <li>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl py-2 sm:py-4 md:py-6 lg:py-8">
                Uganda<span ><img className="m-auto w6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-6 " src={Uganda} alt="" /></span>
                </p>
              </li>
              <li>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl py-2 sm:py-4 md:py-6 lg:py-8">
                Kenya<span ><img className="m-auto w6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-6 " src={Kenya} alt="" /></span>
                </p>
              </li>
              <li>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl py-2 sm:py-4 md:py-6 lg:py-8">
                Angola<span ><img className="m-auto w6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-6 " src={Angola} alt="" /></span>
                </p>
              </li> 
            </ul>
          </div>
          <div className="max-w-full w-md-75 w-lg-50 m-auto ">
            <ul className="flex space-x-8">
            <li>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl py-2 sm:py-4 md:py-6 lg:py-8">
                Rwanda<span ><img className="m-auto w6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-6 " src={Rwanda} alt="" /></span>
                </p>
              </li>
              <li>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl py-2 sm:py-4 md:py-6 lg:py-8">
                United Kingdom<span ><img className="m-auto w6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-6 " src={Kingdom} alt="" /></span>
                </p>
              </li>
            </ul>
            </div>

          <div className="container  px-3 sm:px-4 py-6 sm:py-8 ">
        <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-10 flex flex-col  justify-between items-center">
          <div className="mb-4  text-center w-full">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2">
              Membership in Professional Associations:
            </h2>  
            <p className="text-xs sm:text-xl text-gray-400 max-w-xl mx-auto">
            <span>
              <svg 
                   className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 text-whlite-500" 
                   xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor"
                   fill="none"
               >
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
               </svg>
            </span>Member of Institute of Engineers Rwanda (IER).   
            <span>
              <svg 
                 className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 text-whlite-500" 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor"
                  fill="none"
               >
               <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
             </svg>
             </span>Member of technical advisory board of EarthEnable in their mission to promote the use of earth materials in construction.
            </p>
          </div>
          <div className="mt-4 ">
            <button 
              className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors w-full sm:w-auto"
              onClick={() => {
                // You can either open the CV in a new tab
                window.open('/Richard-CV.pdf', '_blank');
                
                // Or trigger a download
                 const link = document.createElement('a');
                 link.href = '/Richard-CV.pdf';
                 link.download = 'Richard-CV.pdf';
                 document.body.appendChild(link);
                 link.click();
                 document.body.removeChild(link);
              }}
            >
              View My CV
            </button>
          </div>
        </div>
      </div>
        </div>
        <div>
           <h3 className="text-xl sm:text-2xl  lg:text-4xl font-bold text-center text-black mb-2">
            Professional Relationships</h3>
        </div>
        <div className="w-full bg-gray-100 py-6">  
      <div className="max-w-6xl mx-auto px-4">
        {/* Partners Logo Section */}
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col items-center"
            >
              {/* Logo Container */}
              <div className="bg-white rounded p-4 flex items-center justify-center w-24 h-24 shadow-sm mb-2">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="max-h-12 max-w-full"
                />
              </div>  
              {/* Label Text */}
              <p className="text-xs sm:text-lg font-bold  text-gray-600">{partner.label}</p>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Bottom Border */}
        <div className="mt-4 border-t border-blue-600"></div>
      </div>
    </div>

        <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div> 
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg hover:bg-gray-750 transition-colors">
      <div className="py-2 sm:py-3 md:py-5 flex justify-center items-center">
        <span className="bigii text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cyan-400">" </span>
      </div>
      <h1 className="bigii text-base sm:text-lg text-cyan-400">{testimonial.description1}</h1>
      <h1 className="text-base md:text-md  text-gray-300">{testimonial.description2}</h1>
      <p className="text-xs sm:text-sm   text-gray-300">{testimonial.quote1}</p>
      {testimonial.quote2 && (
        <p className=" text-gray-300">{testimonial.quote2}</p>
      )}
      <div className="">
        <p className="text-sm md:text-md  text-gray-300">{testimonial.quote4}</p>
        <p className="text-sm md:text-md mb-2 sm:mb-3 text-gray-300">{testimonial.quote3}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote5}</p>
        <p className="text-sm md:text-md  text-gray-300">{testimonial.quote6}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote7}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote8}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote9}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote10}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote11}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote12}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote13}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote14}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote15}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote16}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote17}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote18}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote19}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote20}</p>
        <p className="text-sm md:text-md text-gray-300">{testimonial.quote21}</p>
      </div>
    </div>
  );
}