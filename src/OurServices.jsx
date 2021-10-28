import marketingImg from './images/ourservicesImg/Marketing-pana.svg';
import webImg from './images/ourservicesImg/Programming-amico.svg';
import appdevelopmentImg from "./images/ourservicesImg/App development-rafiki.svg";
import uxuiImg from "./images/ourservicesImg/Website Creator-rafiki.svg";

// C:\Users\SAMRAT BISWAS\Desktop\React-My-App\my-website\src\images\undraw_contact_us_15o2.svg

const OurServices = [
    
    {
        id:1,
        img: uxuiImg,
        title: 'UX/UI design',
        text:'Our creative designing team works brilliantly to develop a user-centric approach in the website design’s look and functions.',
        color: {
        color: '#7E57C2',
        },
        cardtxtColor:{
            color:"#4c3c68"
        },
         backgroundColor: {
            backgroundColor:"#7E57C220",           
        },
        buttonStyle:{
            color: "#7E57C2",
            border: "2px solid #7E57C2",
        }
    },{   
        id:2,
        img: webImg,
        title: 'web development',
        text:"We deliver scalable and robust web development services to our clients, creating the desired web application for them.",
        color: {
            color: '#5CE1E1',
        },
        cardtxtColor:{
            color:"#59a3a3"
        },
        backgroundColor: {
            backgroundColor: "#5CE1E120",
        },
        buttonStyle:{
            color: "#5CE1E1",
            border: "2px solid #5CE1E1",
        }
    },
    {
        id:3,
        img: appdevelopmentImg,
        title: 'app development',
        text:'IOS or Android mobile app development, we create excellent tailor-made solutions that run smoothly on all types of devices.',
        color: {
            color: '#40FFA2',
        },
        cardtxtColor:{
            color:"#3a8360"
        },
        backgroundColor: {
            backgroundColor:"#40FFA220",
        },
        buttonStyle:{
            color: "#40FFA2",
            border: "2px solid #40FFA2",
        }
    },
    {
        id:4,
        img: marketingImg,
        title: 'marketing',
        text: 'Our expert digital marketers put their best foot forward for creating a space for our clients in the digital world and bringing traffic to their business.',
        color: {
        color: '#FF725E',
        },
        cardtxtColor:{
            color:"#924b42"
        },
         backgroundColor: {
            backgroundColor:"#FF725E20",           
        },
        buttonStyle:{
            color: "#FF725E",
            border: "2px solid #FF725E",
        }
    }
];
export default OurServices;