/*pasos formulario */
let existeNacionalidad = true;
let enCurso = true;
const formSteps = document.querySelectorAll('.steps');
const continuarBtn1 = document.querySelector('.continuar1');
const continuarBtn2 = document.querySelector('.continuar2');
const continuarBtn3 = document.querySelector('.continuar3');
const atrasBtn1 = document.querySelector('.atras1');
const atrasBtn2 = document.querySelector('.atras2');
const atrasBtn3 = document.querySelector('.atras3');
const indicador = document.querySelectorAll('.indicador');
const fill = document.querySelector('.fill');
const cerrar = document.querySelector('.cerrar');
const formulario = document.querySelector('#formulario-informacion');
const btnCerrarModal = document.querySelector('.continuar-modal');
const modalUno = document.querySelector('.modal-uno');
const modalDos = document.querySelector('.modal-dos');
const verCV = document.querySelector('.ver-cv');
const agregarAntecedentes = document.querySelector('#agregar-antecedentes');
const agregarExperiencia = document.querySelector('#agregar-experiencia');
const midBtn = document.querySelectorAll('.mid-boton');
const nacionalidad = document.querySelector('#nacionalidad');
const phoneInputField = document.querySelector("#phone");
const anioActual = new Date().getFullYear();
const situacionAcademica = document.querySelector('#situacion-academica');

let formStepNum = 0;
let indicadorNum = 0;
let antecedentesCount = 1;
let experienciasCount = 1;
let contadorModal = 0;
let selectAnios = 1;
let selectAniosExperiencia = 4;


    situacionAcademica.addEventListener('change',()=>{
      if(situacionAcademica.value === "en curso"){
        const fechaTermino = document.querySelector('#anio-fin');
        const mesTermino = document.querySelector('#mes-fin');
        fechaTermino.disabled = true;
        mesTermino.disabled = true;
        enCurso = false;
      }else{
        const fechaTermino = document.querySelector('#anio-fin');
        const mesTermino = document.querySelector('#mes-fin');
        fechaTermino.disabled = false;
        mesTermino.disabled = false;
        enCurso = true;
      }
      console.log(enCurso);
    })

    nacionalidad.addEventListener('change',()=>{
      const comunaRegion = document.querySelector('.comuna-region');
      const campoSueldo = document.querySelector('#contenedor-sueldo');
      const sueldo = document.querySelector('#sueldo');
      if(nacionalidad.value !== "Chi"){
        comunaRegion.style.display = "none";
        existeNacionalidad = false;
        sueldo.remove();
        const inputSueldo = document.createElement('input');
        inputSueldo.type = 'text';
        inputSueldo.id = 'sueldo';
        inputSueldo.placeholder = "Ingresa tu sueldo en moneda local";
        campoSueldo.appendChild(inputSueldo);
        
        
      }else{
        comunaRegion.style.display = "block";
        existeNacionalidad = true;
        sueldo.remove();
        const selectSueldo = document.createElement('select');
        selectSueldo.id = 'sueldo';
        selectSueldo.innerHTML = 
            `        
            <option value="" selected disabled>Selecciona sueldo</option>
            <option value="$500.000 a $1.000.000">$500.000 a $1.000.000</option>
            <option value="$1.000.000 a $2.000.000">$1.000.000 a $2.000.000</option>
            <option value="$2.000.000 a $3.000.000">$2.000.000 a $3.000.000</option>
            <option value="$3.000.000 a $4.000.000">$3.000.000 a $4.000.000</option>
            <option value="$4.000.000 a $5.000.000">$4.000.000 a $5.000.000</option>
            <option value="más de $5.000.0000">más de $5.000.0000</option>`;
            campoSueldo.appendChild(selectSueldo);
      }


    })


  continuarBtn1.addEventListener('click', (e)=>{
    /* variables primer step */
    const nombres = document.querySelector('#nombres').value;
    const apellidoPaterno = document.querySelector('#apellido-paterno').value;
    const apellidoMaterno = document.querySelector('#apellido-materno').value;
    const genero = document.querySelector("input[name='genero']:checked").value;
    const fechaNacimiento = document.querySelector('#fecha-de-nacimiento').value;
    const residencia = document.querySelector('#residencia').value;
    const region = document.querySelector('#region');
    const comuna = document.querySelector('#comuna');
    const telefono = phoneInput.getNumber();
    const multipleValores = $('.multipleSelect').val();
    const direccion = document.querySelector('#direccion');
    console.log(multipleValores);

    console.log(region.value, comuna.value);
    
    if(existeNacionalidad){
      if( comuna === ""  || region.value ==="" ){
        console.log(existeNacionalidad)
        mostrarAlerta('Todos los campos son obligatorios',0,0);
        return;
      }
    }

    console.log(existeNacionalidad)

    if(nombres ==="" || apellidoPaterno ==="" || apellidoMaterno ==="" || genero ==="" || fechaNacimiento ==="" || nacionalidad.value ==="" || residencia ==="" || telefono.value === "" || multipleValores === null || direccion.value === ""){
      mostrarAlerta('Todos los campos son obligatorios',0,0);
      return;
  
    }

    e.preventDefault();
    formSteps[0].classList.remove('show');
    formSteps[1].classList.add('show');
    indicador[0].classList.remove('activo');
    indicador[1].classList.add('activo');
    fill.style.width= "35%";
    window.scrollTo(0,0);
    

  })

  continuarBtn2.addEventListener('click', (e)=>{
    const nivelEstudios = document.querySelector('#nivel-maximo-estudios').value;
    const ensenansaSecundaria = document.querySelector('#ensenanza-secundaria').value;
    const institucion = document.querySelector('#institucion').value;
    const carrera = document.querySelector('#carrera').value;
    const situacionAcademica = document.querySelector('#situacion-academica').value;
    const anioInicio = document.querySelector('#anio-inicio').value;
    const mesInicio = document.querySelector('#mes-inicio').value;
    const anioFin = document.querySelector('#anio-fin').value;
    const mesFin = document.querySelector('#mes-fin').value;

    if(enCurso){
      if( anioFin === ""  || mesFin ==="" ){
        console.log(existeNacionalidad)
        mostrarAlerta('Todos los campos son obligatorios',1,1);
        return;
      }
    }

    if(anioFin < anioInicio || mesFin < mesInicio){
      console.log(existeNacionalidad)
      mostrarAlerta('El mes o el año de inicio no pueden ser mayores al mes de término',1,1);
      return;

    }

    if(nivelEstudios === "" || ensenansaSecundaria ==="" || institucion ==="" || carrera ==="" || situacionAcademica ==="" || anioInicio ==="" || mesInicio === "" ){
      mostrarAlerta('Todos los campos son obligatorios',1,1);
      return;
    }

    e.preventDefault();
    formSteps[1].classList.remove('show');
    formSteps[2].classList.add('show');
    indicador[1].classList.remove('activo');
    indicador[2].classList.add('activo');
    fill.style.width= "65%";
    window.scrollTo(0,0);
  })

  continuarBtn3.addEventListener('click', (e)=>{

    const situacionLaboral = document.querySelector('#situacion-laboral').value;
    const aniosExperiencia = document.querySelector('#anios-experiencia').value;
    const cargo = document.querySelector('#cargo').value;
    const empresa = document.querySelector('#empresa').value;
    const actividadEmpresa = document.querySelector('#actividad-empresa').value;
    const personalACargo = document.querySelector('#personal-a-cargo').value;
    const descripcionResponsabilidad = document.querySelector('#responsabilidad-logros').value;
    const sueldo = document.querySelector('#sueldo');

    


   if(situacionLaboral === "" || aniosExperiencia ==="" || cargo ==="" || empresa ==="" || actividadEmpresa === "" || personalACargo === "" || sueldo.value ==="" || descripcionResponsabilidad ===""){

    mostrarAlerta('Todos los campos son obligatorios',2,2);
    return;
   }

    e.preventDefault();
    formSteps[2].classList.remove('show');
    formSteps[3].classList.add('show');
    indicador[2].classList.remove('activo');
    indicador[3].classList.add('activo');
    fill.style.width= "100%";
    window.scrollTo(0,0);

   
    if(contadorModal < 1){
    modalUno.style.display = "flex";
    }
    contadorModal++;
  })


  

  /*verificacion del submit y modal final */

  formulario.addEventListener("submit", (e) =>{
    
    const licencia = document.querySelector("input[name='licencia']:checked").value;
    const tipoLicencia = document.querySelector('#tipo-licencia').value;
    const discapacidad = document.querySelector('#discapacidad').value;
    const curriculum = document.querySelector('#curriculum');

 
    if(licencia === "" || tipoLicencia === "" || discapacidad === "" || curriculum.value.length < 0){
       e.preventDefault(); 
       mostrarAlerta('Todos los campos son obligatorios',3,3); 
      console.log('hola');
      return;
    
    } 
    e.preventDefault(); 
    modalDos.style.display = "flex";
    
  });
  verCV.addEventListener("click", ()=>{
    formulario.submit();

  })
 

/*funcionalidad botones atras */

  atrasBtn1.addEventListener('click', (e)=>{
    e.preventDefault();
    formSteps[1].classList.remove('show');
    formSteps[0].classList.add('show');
    indicador[1].classList.remove('activo');
    indicador[0].classList.add('activo');
    fill.style.width= "15%";
    window.scrollTo(0,0);
  })

  atrasBtn2.addEventListener('click', (e)=>{
    e.preventDefault();
    formSteps[2].classList.remove('show');
    formSteps[1].classList.add('show');
    indicador[2].classList.remove('activo');
    indicador[1].classList.add('activo');
    fill.style.width= "35%";
    window.scrollTo(0,0);
  })

  atrasBtn3.addEventListener('click', (e)=>{
    e.preventDefault();
    formSteps[3].classList.remove('show');
    formSteps[2].classList.add('show');
    indicador[3].classList.remove('activo');
    indicador[2].classList.add('activo');
    fill.style.width= "65%";
    window.scrollTo(0,0);
  })  


  /* funcion para mostrar que todos los campos son obligatorios */
  function mostrarAlerta(mensaje,numerostep,numerobtn){
    
    const alerta = document.querySelector('.alerta')

    
    if(!alerta){
      const parrafo = document.createElement('p');
      parrafo.classList.add('alerta');
      parrafo.textContent = mensaje;
      formSteps[numerostep].insertBefore(parrafo, midBtn[numerobtn] );
      setTimeout(() => {
        parrafo.remove();
      }, 3000);
    }


  }

/* funcionalidad cerrar modal */

btnCerrarModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modalUno.style.display ="none";

})




/*validacion de archivo seleccionado */
 const file = document.getElementById('curriculum');

file.onchange = function(e) {
  var ext = this.value.match(/\.([^\.]+)$/)[1];
  switch (ext) {
    case 'pdf':
    case 'docx':
      break;
    default:
      alert('Debe seleccionar un formato permitido');
      this.value = '';
  }
};


/* boton que agrega antecedentes */
agregarAntecedentes.addEventListener('click', (e) =>{
  
  e.preventDefault();

  if(antecedentesCount < 3){
  antecedentesCount++;
  const div = document.createElement('div');
  div.classList.add(`antecedentes-${antecedentesCount}`);
  div.innerHTML = `
  <h3 style="text-align: center;margin-top:30px;">Estudios superiores</h3>
  <a href="" class="eliminar-antecedente" onclick = "this.parentElement.remove(), eliminarAntecedente(event);" >Eliminar</a>
  <div>
      <label for="institucion-${antecedentesCount}">Institución</label>
      <input type="text" id="institucion-${antecedentesCount}" placeholder="Ej: Pontificia Universidad Católica de Chile">
  </div>

  <div>
  <label for="carrera-${antecedentesCount}">Carrera</label>
  <input type="text" id="carrera-${antecedentesCount}" placeholder="Ej: Administración Gastronómica">
</div>

  <div>
      <label for="situacion-academica-${antecedentesCount}">Situación académica actual</label>
      <select name="situacion-academica" id="situacion-academica-${antecedentesCount}">
      <option value=""selected disabled>Selecciona tu situación académica</option>
          <option value="en curso">En curso</option>
          <option value="egresado">Egresado</option>
          <option value="titulado">Títulado</option>
          <option value="congelado">Congelado</option>
      </select>
  </div>

  
  <div style="justify-content: space-between;">
      <label for="fecha-inicio-${antecedentesCount}">Fecha de inicio</label><br>

      <select name="anio-inicio" id="anio-inicio-${antecedentesCount}" style="width: 49%;">
        <option value="" selected disabled>Año inicio</option>
      </select>

      <select name="mes-inicio" id="mes-inicio-${antecedentesCount}" style="width: 49%;">
          <option value="" selected disabled>Mes inicio</option>
          <option value="enero">Enero</option>
          <option value="febrero">Febrero</option>
          <option value="marzo">Marzo</option>
          <option value="abril">Abril</option>
          <option value="mayo">Mayo</option>
          <option value="junio">Junio</option>
          <option value="julio">Julio</option>
          <option value="agosto">Agosto</option>
          <option value="septiembre">Septiembre</option>
          <option value="octubre">Octubre</option>
          <option value="noviembre">Noviembre</option>
          <option value="diciembre">Diciembre</option>
      </select>

  </div>

  <div style="justify-content: space-between;">
      <label for="fecha-fin-${antecedentesCount}">Fecha término</label><br>

      <select name="anio-fin" id="anio-fin-${antecedentesCount}" style="width: 49%;">
      <option value="" selected disabled>Año fin</option>
      </select>

      <select name="mes-fin" id="mes-fin-${antecedentesCount}" style="width: 49%;">
      <option value="" selected disabled>Mes fin</option>
          <option value="enero">Enero</option>
          <option value="febrero">Febrero</option>
          <option value="marzo">Marzo</option>
          <option value="abril">Abril</option>
          <option value="mayo">Mayo</option>
          <option value="junio">Junio</option>
          <option value="julio">Julio</option>
          <option value="agosto">Agosto</option>
          <option value="septiembre">Septiembre</option>
          <option value="octubre">Octubre</option>
          <option value="noviembre">Noviembre</option>
          <option value="diciembre">Diciembre</option>
      </select>
  `;
  
  
  formSteps[1].insertBefore(div, midBtn[1] );
  selectAnios++;
  campoAnio(selectAnios);
  $("#carrera-2").autocomplete({
    source: carrerasDisponibles,
    
    change: function (event,ui) {
      if (ui.item == null || ui.item == undefined) {
          $("#carrera-2").val("");
          
      } 
      
  }
  });

  $("#carrera-3").autocomplete({
    source: carrerasDisponibles,
   /*  minLength: 3, */
    change: function (event,ui) {
      if (ui.item == null || ui.item == undefined) {
          $("#carrera-3").val("");
          
      } 
      
  }
  });

  $( "#institucion-2" ).autocomplete({
    source: institucionesChile,
   /*  minLength: 3, */
    
  })


$( "#institucion-3" ).autocomplete({
  source: institucionesChile,
 /*  minLength: 3, */
  
})


  return;
  }
 
  
})

/* boton que agrega experiencia */

agregarExperiencia.addEventListener('click', (e)=>{
  e.preventDefault();

  if(experienciasCount < 3){
    experienciasCount++;

    let monto;
    if(nacionalidad.value !== "Chi"){
     
      monto = `<div>
      <label for="sueldo-${experienciasCount}">Sueldo</label>
      <input type="text" id="sueldo-${experienciasCount}">
      </div>`;

    }else{

      monto =  `<div>
      <label for="sueldo-${experienciasCount}">Sueldo</label>
      <select id="sueldo-${experienciasCount}">
          <option value="" selected disabled>Selecciona sueldo</option>
          <option value="$500.000 a $1.000.000">$500.000 a $1.000.000</option>
          <option value="$1.000.000 a $2.000.000">$1.000.000 a $2.000.000</option>
          <option value="$2.000.000 a $3.000.000">$2.000.000 a $3.000.000</option>
          <option value="$3.000.000 a $4.000.000">$3.000.000 a $4.000.000</option>
          <option value="$4.000.000 a $5.000.000">$4.000.000 a $5.000.000</option>
          <option value="más de $5.000.0000">más de $5.000.0000</option>
      </select>
  </div>`;
    }

    const div = document.createElement('div');
    div.classList.add(`experiencias-${experienciasCount}`);
    div.innerHTML = `
    <h3 style="text-align: center;margin-top:30px;">Experiencia</h3>
    <a href="" class="eliminar-antecedente" onclick = "this.parentElement.remove(), eliminarExperiencia(event);" >Eliminar</a>
                    <label for="cargo-${experienciasCount}">Cargo</label>
                    <input type="text" id="cargo-${experienciasCount}" placeholder="Nombre del cargo">
                </div>

                <div>
                    <label for="empresa-${experienciasCount}">Empresa</label>
                    <input type="text" id="empresa-${experienciasCount}" placeholder="Nombre de la empresa">
                </div>

                <div>
                    <label for="actividad-empresa-${experienciasCount}">Actividad de la empresa</label>
                    <select id="actividad-empresa-${experienciasCount}">
                        <option value="" selected disabled>Selecciona actividad</option>
                        <option value="Agricultura, Ganadería, Silvicultura y Pesca">Agricultura, Ganadería, Silvicultura y Pesca</option>
                        <option value="Explotación de Minas y Canteras">Explotación de Minas y Canteras </option>
                        <option value="Industrias Manufacturera">Industrias Manufacturera</option>
                        <option value="Suministro de Electricidad, Gas, Vapor y Aire Acondicionado ">Suministro de Electricidad, Gas, Vapor y Aire Acondicionado </option>
                        <option value="Suministro de Agua, Evacuación de Agua residuales, gestión de desechos y descontaminación">Suministro de Agua, Evacuación de Agua residuales, gestión de desechos y descontaminación </option>
                        <option value="Construcción">Construcción</option>
                        <option value="Comercio al Por Mayor y al por Menor, Reparación de Vehículos Automotores y Motocicletas">Comercio al Por Mayor y al por Menor, Reparación de Vehículos Automotores y Motocicletas</option>
                        <option value="Transporte y Almacenamiento">Transporte y Almacenamiento</option>
                        <option value="Actividades de Alojamiento y de Servicio de Comidas">Actividades de Alojamiento y de Servicio de Comidas </option>
                        <option value="Información y Comunicaciones">Información y Comunicaciones</option>
                        <option value="Actividades Financieras y de Seguros ">Actividades Financieras y de Seguros </option>
                        <option value="Actividades inmobiliarias">Actividades inmobiliarias</option>
                        <option value="Actividades Profesionales, Cientificas y Técnicas">Actividades Profesionales, Cientificas y Técnicas </option>
                        <option value="Actividades de Servicios Administrativos y de Apoyo">Actividades de Servicios Administrativos y de Apoyo </option>
                        <option value="Adm. Pública y Defensa; Planes de Seguridad Social de Afiliación Obligatoria">Adm. Pública y Defensa; Planes de Seguridad Social de Afiliación Obligatoria</option>
                        <option value="Enseñanza">Enseñanza</option>
                        <option value="Actividades de Atención de la Salud Humana y de Asistencia Social">Actividades de Atención de la Salud Humana y de Asistencia Social</option>
                        <option value="Actividades Artísticas, de Entretenimiento y Recreativas">Actividades Artísticas, de Entretenimiento y Recreativas</option>
                        <option value="Otras Actividades de Servicios">Otras Actividades de Servicios</option>
                        <option value="Actividades de los Hogares como Empleadores; Actividades No Diferenciadas de los Hogares">Actividades de los Hogares como Empleadores; Actividades No Diferenciadas de los Hogares</option>
                        <option value="Actividades de Organizaciones y Órganos Extraterritoriales">Actividades de Organizaciones y Órganos Extraterritoriales </option>
                    </select>
                </div>

                <div>
                    <label for="personal-a-cargo-${experienciasCount}">Personal a cargo</label>
                    <select id="personal-a-cargo-${experienciasCount}">
                        <option value="" selected disabled>Selecciona personas a cargo</option>
                        <option value="1 a 5 personas">1 a 5 personas</option>
                        <option value="6 a 10 personas">6 a 10 personas</option>
                        <option value="mas de 10 personas">Más de 10 personas</option>
                        <option value="ninguno">Ninguno</option>
                    </select>
                </div>
              
                `+ monto +`

                <div style="justify-content: space-between;">
                    <label for="fecha-inicio-experiencia-${experienciasCount}">Fecha de inicio</label><br>
    
                    <select name="anio-inicio" id="anio-inicio-experiencia-${experienciasCount}" style="width: 49%;">
                        
                    </select>
    
                    <select name="mes-inicio" id="mes-inicio-experiencia-${experienciasCount}" style="width: 49%;">
                        <option value="01">Enero</option>
                        <option value="02">Febrero</option>
                        <option value="03">Marzo</option>
                        <option value="04">Abril</option>
                        <option value="05">Mayo</option>
                        <option value="06">Junio</option>
                        <option value="07">Julio</option>
                        <option value="08">Agosto</option>
                        <option value="09">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
    
                </div>
    
                <div style="justify-content: space-between;">
                    <label for="fecha-fin-experiencia-${experienciasCount}">Fecha término</label><br>
    
                    <select name="anio-fin" id="anio-fin-experiencia-${experienciasCount}" style="width: 49%;">
                        
                    </select>
    
                    <select name="mes-fin" id="mes-fin-experiencia-${experienciasCount}" style="width: 49%;">
                        <option value="01">Enero</option>
                        <option value="02">Febrero</option>
                        <option value="03">Marzo</option>
                        <option value="04">Abril</option>
                        <option value="05">Mayo</option>
                        <option value="06">Junio</option>
                        <option value="07">Julio</option>
                        <option value="08">Agosto</option>
                        <option value="09">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                </div>

                <div>
                    <label for="resposabilidad-logros-${experienciasCount}" style="margin-bottom: 5px; display: block;">Responsabilidad y logros</label>
                    <textarea name="textarea" rows="5" placeholder="Escribir responsabilidades y logros" style="width: 100%; padding: 10px;" id="responsabilidad-logros-${experienciasCount}"></textarea>
                    <span class="informativo">Cantidad máxima de caracteres permitidos 2000</span>
                </div>
 
    `;

    formSteps[2].insertBefore(div, midBtn[2] );

  selectAniosExperiencia++;
  campoAnio(selectAniosExperiencia);
return;

  }
})

/* agregar prefijo y placeholder de numero de telefono segun pais */
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "cl",
    onlyCountries: ["co","mx","cl","pe"],
    placeholderNumberType: "MOBILE",
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@14.0.3/build/js/utils.js",
 
});

/* funcion autocompletar restricto */


  const carrerasDisponibles = [
    "Administración de Empresas e Ing. Asociadas",
    "Administración Gastronómica",
    "Administración Turística y Hotelera",
    "Contador Auditor",
    "Ingeniería Comercial",
    "Ingeniería en Comercio Exterior",
    "Ingeniería en Control de Gestión",
    "Ingeniería en Finanzas",
    "Ingeniería en Logística",
    "Ingeniería en Marketing",
    "Ingeniería en Recursos Humanos",
    "Agronomía",
    "Ingeniería Agrícola",
    "Ingeniería en Acuicultura y Pesca",
    "Ingeniería Forestal",
    "Medicina Veterinaria",
    "Actuación y Teatro",
    "Arquitectura",
    "Artes y Licenciatura en Artes",
    "Comunicación Audiovisual y/o Multimedia",
    "Diseño de Ambientes e Interiores",
    "Diseño de Vestuario",
    "Diseño",
    "Diseño Gráfico",
    "Fotografía",
    "Música, Canto o Danza",
    "Realizador de Cine y Televisión",
    "Analista Químico",
    "Biología Marina y Ecología Marina",
    "Bioquímica",
    "Geografía",
    "Geología",
    "Matemáticas y/o Estadísticas",
    "Química Ambiental",
    "Química, Licenciado en Química",
    "Administración Pública Antropología",
    "Administración Pública",
    "Ciencias Políticas",
    "Ingeniería en Gestión Pública",
    "Orientación Familiar y Relaciones Humanas",
    "Periodismo",
    "Psicología",
    "Publicidad",
    "Relaciones Públicas",
    "Sociología",
    "Trabajo Social",
    "Derecho",
    "Pedagogía en Artes y Música",
    "Pedagogía en Ciencias",
    "Pedagogía en Educación Básica",
    "Pedagogía en Educación de Párvulos",
    "Pedagogía en Educación Diferencial",
    "Pedagogía en Educación Física",
    "Pedagogía en Filosofía y Religión",
    "Pedagogía en Historia, Geografía y Ciencias Sociales",
    "Pedagogía en Inglés",
    "Pedagogía en Lenguaje, Comunicación y/o Castellano",
    "Pedagogía en Matemáticas y Computación",
    "Psicopedagogía",
    "Bibliotecología",
    "Licenciatura en Letras y Literatura",
    "Enfermería",
    "Fonoaudiología",
    "Kinesiología",
    "Medicina",
    "Nutrición y Dietética",
    "Obstetricia y Puericultura",
    "Odontología",
    "Química y Farmacia",
    "Tecnología Médica",
    "Terapia Ocupacional",
    "Construcción Civil",
    "Diseño Industrial",
    "Ingeniería Civil Ambiental",
    "Ingeniería Civil Eléctrica",
    "Ingeniería Civil Electrónica",
    "Ingeniería Civil en Biotecnología y/o Bioingeniería",
    "Ingeniería Civil en Computación e Informática",
    "Ingeniería Civil en Minas",
    "Ingeniería Civil en Obras Civiles",
    "Ingeniería Civil Industrial",
    "Ingeniería Civil Mecánica",
    "Ingeniería Civil Metalúrgica",
    "Ingeniería Civil Química",
    "Ingeniería Civil, plan común y licenciatura en Ciencias de la Ingeniería",
    "Ingeniería en Alimentos",
    "Ingeniería en Automatización, Instrumentación y Control",
    "Ingeniería en Biotecnología y Bioingeniería",
    "Ingeniería en Computación e Informática",
    "Ingeniería en Conectividad y Redes",
    "Ingeniería en Construcción",
    "Ingeniería en Electricidad",
    "Ingeniería en Electrónica",
    "Ingeniería en Geomensura y Cartografía",
    "Ingeniería en Matemática y Estadística",
    "Ingeniería en Mecánica Automotriz",
    "Ingeniería en Medio Ambiente",
    "Ingeniería en Minas y Metalurgia",
    "Ingeniería en Prevención de Riesgos",
    "Ingeniería en Química",
    "Ingeniería en Recursos Renovables",
    "Ingeniería en Sonido",
    "Ingeniería en Telecomunicaciones",
    "Ingeniería en Transporte y Tránsito",
    "Ingeniería Industrial",
    "Ingeniería Marina y Marítimo Portuaria",
    "Ingeniería Mecánica",
  
  ];
  $("#carrera").autocomplete({
    source: carrerasDisponibles,
   /*  minLength: 3,
    change: function (event,ui) {
      if (ui.item == null || ui.item == undefined) {
          $("#carrera").val("");
          
      }  
      
  }*/
});

const institucionesChile = [
"PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE",
"PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO",
"UNIVERSIDAD ADVENTISTA DE CHILE",
"UNIVERSIDAD ADOLFO IBÁÑEZ",
"UNIVERSIDAD ACADEMIA DE HUMANISMO CRISTIANO",
"UNIVERSIDAD ALBERTO HURTADO",
"UNIVERSIDAD ANDRÉS BELLO",
"UNIVERSIDAD ARTURO PRAT",
"UNIVERSIDAD AUSTRAL DE CHILE",
"UNIVERSIDAD AUTÓNOMA DE CHILE",
"UNIVERSIDAD BERNARDO O HIGGINS",
"UNIVERSIDAD BOLIVARIANA",
"UNIVERSIDAD CATÓLICA SILVA HENRÍQUEZ",
"UNIVERSIDAD CATÓLICA DE LA SANTÍSIMA CONCEPCIÓN",
"UNIVERSIDAD CATÓLICA DE TEMUCO",
"UNIVERSIDAD CATÓLICA DEL MAULE",
"UNIVERSIDAD CATÓLICA DEL NORTE",
"UNIVERSIDAD CENTRAL DE CHILE",
"UNIVERSIDAD DE ANTOFAGASTA",
"UNIVERSIDAD DE ARTE Y CIENCIAS SOCIALES ARCIS",
"UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACIÓN UNIACC",
"UNIVERSIDAD DE ATACAMA",
"UNIVERSIDAD UCINF",
"UNIVERSIDAD DE CHILE",
"UNIVERSIDAD DE CONCEPCIÓN",
"UNIVERSIDAD DE LA FRONTERA",
"UNIVERSIDAD DE LA SERENA",
"UNIVERSIDAD DE LAS AMÉRICAS",
"UNIVERSIDAD DE LOS ANDES",
"UNIVERSIDAD DE LOS LAGOS",
"UNIVERSIDAD DE MAGALLANES",
"UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACIÓN",
"UNIVERSIDAD DE SANTIAGO DE CHILE",
"UNIVERSIDAD DE TALCA",
"UNIVERSIDAD DE TARAPACÁ",
"UNIVERSIDAD DE VALPARAÍSO",
"UNIVERSIDAD DEL BÍO-BÍO",
"UNIVERSIDAD DE VIÑA DEL MAR",
"UNIVERSIDAD DEL MAR",
"UNIVERSIDAD DEL DESARROLLO",
"UNIVERSIDAD DEL PACÍFICO",
"UNIVERSIDAD DIEGO PORTALES",
"UNIVERSIDAD FINIS TERRAE",
"UNIVERSIDAD IBEROAMERICANA DE CIENCIAS Y TECNOLOGÍA UNICIT",
"UNIVERSIDAD LA REPÚBLICA",
"UNIVERSIDAD PEDRO DE VALDIVIA",
"UNIVERSIDAD METROPOLITANA DE CIENCIAS DE LA EDUCACIÓN",
"UNIVERSIDAD SAN SEBASTIÁN",
"UNIVERSIDAD TÉCNICA FEDERICO SANTA MARÍA",
"UNIVERSIDAD TECNOLÓGICA DE CHILE INACAP",
"UNIVERSIDAD TECNOLÓGICA METROPOLITANA",
"UNIVERSIDAD SANTO TOMÁS",
"UNIVERSIDAD MAYOR",
"UNIVERSIDAD SEK",
"UNIVERSIDAD GABRIELA MISTRAL",
"UNIVERSIDAD MIGUEL DE CERVANTES",
"INSTITUTO SUPERIOR DE ARTES Y CIENCIAS DE LA COMUNICACIÓN IACC",
"INSTITUTO NACIONAL DEL FÚTBOL, DEPORTE Y ACTIVIDAD FÍSICA INAF",
"INSTITUTO INTERNACIONAL DE ARTES CULINARIAS Y SERVICIOS",
"INSTITUTO PROFESIONAL AIEP",
"INSTITUTO PROFESIONAL DE ARTES Y COMUNICACIÓN ARCOS",
"INSTITUTO PROFESIONAL DE CHILE",
"INSTITUTO PROFESIONAL DIEGO PORTALES",
"INSTITUTO PROFESIONAL DUOC UC",
"INSTITUTO PROFESIONAL GUILLERMO SUBERCASEAUX",
"INSTITUTO PROFESIONAL INACAP",
"INSTITUTO PROFESIONAL LA ARAUCANA",
"INSTITUTO PROFESIONAL PROVIDENCIA",
"INSTITUTO PROFESIONAL SANTO TOMÁS",
"INSTITUTO PROFESIONAL VIRGINIO GÓMEZ",
"INSTITUTO PROFESIONAL CATEQUÍSTICO PUC",
"INSTITUTO PROFESIONAL ESCUELA MODERNA DE MÚSICA",
"INSTITUTO PROFESIONAL CARLOS CASANUEVA",
"INSTITUTO PROFESIONAL ESUCOMEX",
"INSTITUTO PROFESIONAL INCACEA",
"INSTITUTO PROFESIONAL EATRI",
"INSTITUTO PROFESIONAL AGRARIO ADOLFO MATTHEI",
"INSTITUTO PROFESIONAL CIISA",
"INSTITUTO PROFESIONAL LOS LAGOS",
"INSTITUTO PROFESIONAL ESCUELA DE CONTADORES AUDITORES DE SANTIAGO",
"INSTITUTO PROFESIONAL GALDÁMEZ, IPG",
"INSTITUTO PROFESIONAL LOS LEONES",
"INSTITUTO PROFESIONAL VALLE CENTRAL",
"INSTITUTO PROFESIONAL LATINOAMERICANO DE COMERCIO EXTERIOR, IPLACEX",
"CENTRO DE FORMACIÓN TÉCNICA PROANDES",
"CENTRO DE FORMACIÓN TÉCNICA MANPOWER",
"CENTRO DE FORMACIÓN TÉCNICA CANON",
"CENTRO DE FORMACIÓN TÉCNICA UVALPO",
"CENTRO DE FORMACIÓN TÉCNICA PROFASOC",
"CENTRO DE FORMACIÓN TÉCNICA ALPES",
"CENTRO DE FORMACIÓN TÉCNICA ANDRÉS BELLO",
"CENTRO DE FORMACIÓN TÉCNICA CEDUC - UCN",
"CENTRO DE FORMACIÓN TÉCNICA DEL MEDIO AMBIENTE IDMA",
"CENTRO DE FORMACIÓN TÉCNICA DUOC UC",
"CENTRO DE FORMACIÓN TÉCNICA INACAP",
"CENTRO DE FORMACIÓN TÉCNICA INSTITUTO TECNOLÓGICO DE CHILE ITC",
"CENTRO DE FORMACIÓN TÉCNICA IPROSEC",
"CENTRO DE FORMACIÓN TÉCNICA LOTA ARAUCO",
"CENTRO DE FORMACIÓN TÉCNICA SAN AGUSTÍN DE TALCA",
"CENTRO DE FORMACIÓN TÉCNICA SANTO TOMÁS",
"CENTRO DE FORMACIÓN TÉCNICA ICCE",
"CENTRO DE FORMACIÓN TÉCNICA TARAPACÁ",
"CENTRO DE FORMACIÓN TÉCNICA FONTANAR",
"CORPORACIÓN CENTRO DE FORMACIÓN TÉCNICA DE LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO O CFT PUCV",
"CENTRO DE FORMACIÓN TÉCNICA ICEL",
"CENTRO DE FORMACIÓN TÉCNICA INSEC",
"CENTRO DE FORMACIÓN TÉCNICA BARROS ARANA",
"CENTRO DE FORMACIÓN TÉCNICA JUAN BOHON",
"CENTRO DE FORMACIÓN TÉCNICA CEITEC",
"CENTRO DE FORMACIÓN TÉCNICA UDA",
"CENTRO DE FORMACIÓN TÉCNICA TEODORO WICKEL KLÜWEN",
"CENTRO DE FORMACIÓN TÉCNICA ENAC",
"CENTRO DE FORMACIÓN TÉCNICA ESCUELA DE COMERCIO DE SANTIAGO",



  
  ];
  $( "#institucion" ).autocomplete({
    source: institucionesChile,
    /* minLength: 3, */
    
  })

  const paisesResidencia =[
    "Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"
  ];

$( "#residencia" ).autocomplete({
    source: paisesResidencia,
   
  })

  function eliminarAntecedente(e){
    e.preventDefault();
    antecedentesCount--;
    selectAnios--;
  }


  function eliminarExperiencia(e){
    e.preventDefault();
    experienciasCount--;
    selectAniosExperiencia--;
  }

  function campoAnio(anio){
  minimo = anioActual - 60;
    let anioInicio;
    let anioFin;
  
  switch(anio){
    case 1:

       anioInicio = document.querySelector('#anio-inicio');
       anioFin = document.querySelector('#anio-fin');
      break;

    case 2:
       anioInicio = document.querySelector('#anio-inicio-2');
       anioFin = document.querySelector('#anio-fin-2');
      break;

    case 3:
        anioInicio = document.querySelector('#anio-inicio-3');
        anioFin = document.querySelector('#anio-fin-3');
        break;
    
    case 4:
         anioInicio = document.querySelector('#anio-inicio-experiencia');
         anioFin = document.querySelector('#anio-fin-experiencia');
        break;
  
      case 5:
         anioInicio = document.querySelector('#anio-inicio-experiencia-2');
         anioFin = document.querySelector('#anio-fin-experiencia-2');
        break;
  
      case 6:
          anioInicio = document.querySelector('#anio-inicio-experiencia-3');
          anioFin = document.querySelector('#anio-fin-experiencia-3');
          break;
      }

    for(let i = anioActual; i > minimo; i-- ){
        const option = document.createElement('option');
        const option2 = document.createElement('option');
        option.value = i;
        option.textContent = i;
        option2.value = i;
        option2.textContent = i;
        
        anioInicio.appendChild(option);
        anioFin.appendChild(option2);

    }

  }

  campoAnio(selectAnios);
  campoAnio(selectAniosExperiencia);
  

  function validarPueblos(){
    const pertenecePueblo = document.querySelector('input[name="originarios"]:checked');
    const pueblosOriginarios = document.querySelector('#pueblos-originarios');
    console.log(pertenecePueblo.value)
    if(pertenecePueblo.value === "no"){
      
      pueblosOriginarios.disabled = true;
    }else{
      pueblosOriginarios.disabled = false;
    }
  }

  function validarLicencia(){
    const tieneLicencia = document.querySelector('input[name="licencia"]:checked');
    const licenciaConducir = document.querySelector('#tipo-licencia');
    
    if(tieneLicencia.value === "no"){
      
      licenciaConducir.disabled = true;
    }else{
      licenciaConducir.disabled = false;
    }
  }
  
  function validarDiscapacidad(){
    const tieneDiscapacidad = document.querySelector('input[name="discapacidad"]:checked');
    const discapacidad = document.querySelector('#tipo-discapacidad');
    
    if(tieneDiscapacidad.value === "no"){
      
      discapacidad.disabled = true;
    }else{
      discapacidad.disabled = false;
    }
  }
  

  /* regiones y comunas */

  var RegionesYcomunas = {

    "regiones": [{
        "NombreRegion": "Arica y Parinacota",
        "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
      {
        "NombreRegion": "Tarapacá",
        "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
      {
        "NombreRegion": "Antofagasta",
        "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
      {
        "NombreRegion": "Atacama",
        "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
      {
        "NombreRegion": "Coquimbo",
        "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
      {
        "NombreRegion": "Valparaíso",
        "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
      {
        "NombreRegion": "Región del Libertador Gral. Bernardo O’Higgins",
        "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
      {
        "NombreRegion": "Región del Maule",
        "comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
      {
        "NombreRegion": "Región del Biobío",
        "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
    },
      {
        "NombreRegion": "Región de la Araucanía",
        "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
    },
      {
        "NombreRegion": "Región de Los Ríos",
        "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
      {
        "NombreRegion": "Región de Los Lagos",
        "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
      {
        "NombreRegion": "Región Aisén del Gral. Carlos Ibáñez del Campo",
        "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
      {
        "NombreRegion": "Región de Magallanes y de la AntárVca Chilena",
        "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
    },
      {
        "NombreRegion": "Región Metropolitana de Santiago",
        "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
    }]
  }
  
  
  jQuery(document).ready(function () {
  
    var iRegion = 0;
    var htmlRegion = '<option value="" disabled selected>Seleccione región</option>';
    var htmlComunas = '<option value="" disabled selected>Seleccione comuna</option>';
  
    jQuery.each(RegionesYcomunas.regiones, function () {
      htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
      iRegion++;
    });
  
    jQuery('#region').html(htmlRegion);
    jQuery('#comuna').html(htmlComunas);
  
    jQuery('#region').change(function () {
      var iRegiones = 0;
      var valorRegion = jQuery(this).val();
      var htmlComuna = '<option value="" disabled selected>Seleccione comuna</option>';
      jQuery.each(RegionesYcomunas.regiones, function () {
        if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
          var iComunas = 0;
          jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
            htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
            iComunas++;
          });
        }
        iRegiones++;
      });
      jQuery('#comuna').html(htmlComuna);
    });
   
  
  });