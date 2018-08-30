import {createStore} from "redux";
import rootReducer from "../reducers/index";

const initialState = {
    ui: {
        showHome: true,
        showEventDetail: false,
        showBackButton: false,

        selectedEvent: null
    },

    events: [
        {
            id: 1,
            title: "24 Festival de Cine para Niños y Jóvenes – Divercine",
            eventImage: "http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
            description: "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
            dates: [
                "07/27/2015 13:00",
                "07/28/2015 13:00",
                "07/29/2015 13:00",
                "07/30/2015 13:00",
                "07/31/2015 13:00",
                "07/1/2015 13:00"
            ],
            location: "Auditorio del SODRE",
            featured: false
        },
        {
            id: 2,
            title: "IGDA Meetup",
            eventImage: "https://pbs.twimg.com/media/DkkkYErXsAAUmId.jpg",
            description: "¿Querés conocer a otros desarrolladores de videojuegos del país? ¿Querés compartir tus creaciones con otras personas que también les gusta crear videojuegos? ¿Intercambiar experiencias? ¿Conocer el trabajo de otros? ¿O simplemente tenes curiosidad?\n" +
                "\n" +
                "¡Prendete al quinto IGDA Meetup del año!\n" +
                "\n" +
                "Los IGDA Meetups son encuentros que se realizarán periódicamente, estarán abiertos a miembros y no miembros de IGDA Paraguay y la entrada será libre y gratuita.\n" +
                "\n" +
                "¿En qué consiste?\n" +
                "Siendo uno de los objetivos de la asociación promover la industria y crear espacios de intercambio de experiencias y generación de sinergias entre los desarrolladores nace los IGDA Meetups, un espacio para que los desarrolladores de videojuegos puedan compartir con sus pares los proyectos que están llevando a cabo, recibir feedback y hablar sobre desarrollo de videojuegos en un ambiente distendido y casual. Abierto tanto para artistas, desarrolladores, músicos, aficionados y curiosos.",
            dates: [
                "08/15/2018 19:00",
            ],
            location: "Puerto de Asunción",
            featured: true
        }
    ],

};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;