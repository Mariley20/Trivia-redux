import './Result.css';

export const ResultAnswer = (trivia) => {
    return (
        <div class="row justify-content-xl-center ">
            <div id="imagen" class="col col-xl-12"><img src="assets/img/terminaste.gif" class="img-fluid"></div>
        </div>
        <div id="cuestionario">
            <div id="progresos">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 100%; height: 7px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div id="titulos">
                <h2>0 correcta(s) de 5 preguntas</h2>
            </div>
            <div id="selecciona">
                <div class="alert-incorrecto" role="alert">
                    <p>1. JQuery es: : </p>
                    <p class="parrafoRespuesta"> <strong><del>Es una API </del></strong>Es una libreria de javascript</p>
                </div>
                <div class="alert-incorrecto" role="alert">
                    <p>2. Quien es Marissa Meyers: </p>
                    <p class="parrafoRespuesta"> <strong><del>No fue la primera ingeniera mujer del equipo de GOOGLE </del></strong>CEO de Yahoo!, y quien logro triplicar su valor.</p>
                </div>
                <div class="alert-incorrecto" role="alert">
                    <p>3. ¿Cual fue el primer lenguaje de Programación?: </p>
                    <p class="parrafoRespuesta"> <strong><del>Cobol </del></strong>tarjetas Perforadas / ADA</p>
                </div>
                <div class="alert-incorrecto" role="alert">
                    <p>4. ¿Quienes son Larry Page y Sergey Brin?: </p>
                    <p class="parrafoRespuesta"> <strong><del>Ganadores del premio novel de la paz </del></strong>Los creadores del motor de Google</p>
                </div>
                <div class="alert-incorrecto" role="alert">
                    <p>5. ¿Qué año se creo facebook?: </p>
                    <p class="parrafoRespuesta"> <strong><del>entre 2008 - 2010 </del></strong>En febrero de 2004</p>
                </div>
            </div>
            <div id="botoncito">
                <div><button id="jugar">Jugar de Nuevo</button></div>
            </div>
        </div>
        </div>
    )
};

const correctionAnswers = () => {

}
const evaluation = () => {
    
}