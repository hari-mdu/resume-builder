// importing the  images of templates

import template_1 from "../Images/template-1.JPG";
import template_2 from "../Images/template-2.JPG";
import template_3 from "../Images/template-3.JPG";
import template_4 from "../Images/template-4.JPG";


// importing all the templates 

import {Template1} from "../../Components/Templates/Template1";
import {Template2} from "../../Components/Templates/Template2";
import {Template3} from "../../Components/Templates/Template3";
import {Template4} from "../../Components/Templates/Template4";



//templates are  exported to process further
export const templates = [
  {
    id: 1,
    template_name: "Template-1",
    template_img: template_1,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template-2",
    template_img: template_2,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template-3",
    template_img: template_3,
    template: <Template3 />,
  },
  {
    id: 4,
    template_name: "Template-4",
    template_img: template_4,
    template: <Template4 />,
  },
  

];
