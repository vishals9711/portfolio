import { IProjectCard } from "./ProjectCard";

export const PROJECT_DATA: Array<IProjectCard> = [{
    projectName: 'Vaccination Slot Alert',
    projectDesc: 'A web portal that can create Vaccination slot Alerts in India and notify via email or Text SMS when slots open up.',
    githubLink: 'https://github.com/vishals9711/cowin_notifier',
    languages: ['ReactJS', 'Typescript', 'Firebase SDK', 'Twilio', 'AWS'],
    hostedLink:'https://vaccineslotalert.in/'
},{
    projectName: 'Food Reservation',
    projectDesc: 'A PWA wherein people can reserve table at a restaurant, order food, pay bills thereby reducing contact and saving time for the restaurant and the customer.',
    githubLink: 'https://github.com/vishals9711/FoodReservation',
    languages: ['Ionic','ExpressJS', 'Typescript', 'MYSQL'],
},
{
    projectName: 'Car Black Box',
    projectDesc: 'A program that tracks the vitals of a vehicle which can be used for investagation incase of an accident, additionally can also be used as a speed enforcer.',
    githubLink: 'https://github.com/vishals9711/black_box',
    languages: ['Angular','Google Maps SDK', 'IBM Bluemix'],
},
{
    projectName: 'Power, Energy and Machine Analyzer',
    projectDesc: 'An all-in-one solution to monitor the electric grid & industrial machinery. This project done as part of Fellowship for Analog Devices (Anveshan)',
    githubLink: 'https://github.com/vishals9711/Anveshan',
    languages: ['Angular','Embedded C', 'IBM Bluemix'],
}]