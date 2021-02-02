import { createStore } from 'redux';

function reducer(){
    return {
        activeLesson: null,
        activeModule: null,
        modules: [
            {
                id: 1,
                title: "Iniciando com Redux",
                lessons: [
                    { id: 1, title: "Aula 1"},
                    { id: 2, title: "Aula 2"},
                    { id: 3, title: "Aula 3"},
                    { id: 4, title: "Aula 4"}
                ], 
            },
            {
                id: 2,
                title: "Avançando com Redux",
                lessons: [
                    { id: 5, title: "Aula 5" },
                    { id: 6, title: "Aula 6" }
                ]
            }
        ]
    }
}

const store = createStore(reducer);

export default store;

