const ingresos=[];

const egresos= [];

const cargarCabecero=()=>{
    let saldo = totalIngresos()-totalEgresos();
    document.getElementById("totalIngresos").innerHTML=`${totalIngresos()}$`;
    document.getElementById("totalEgresos").innerHTML=`${totalEgresos()}$`;
    document.getElementById("saldoTotal").innerHTML=`${saldo}$`
}

const aggDato=()=>{
    let form=document.forms["form"];
    let tipo= form["tipo"];
    let descripcion= form["descripcion"]
    let valor = form["valor"];
    if(descripcion.value!== "" && valor.value !== ""){
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value, +valor.value))
            cargarCabecero();
            cargarIngresos();
        }
        if(tipo.value === "egreso"){
            egresos.push(new Egreso(descripcion.value, +valor.value))
            cargarCabecero();
            cargarEgresos();
        }
    }
}

const totalIngresos=()=>{
    let totalIngreso=0;
    for(let ingreso of ingresos){
        totalIngreso+=ingreso.valor;
    }
    return totalIngreso;
}

const totalEgresos=()=>{
    let totalEgreso=0;
    for(let egreso of egresos){
        totalEgreso+=egreso.valor;
    }
    return totalEgreso
}


const cargarIngresos=()=>{
    let ingresosHTML="";
    for( let ingreso of ingresos){
        ingresosHTML+=crearIngresos(ingreso);
    }
    document.getElementById("listaIngresos").innerHTML=ingresosHTML
    console.log(ingresos)
}


const crearIngresos=(ingreso)=>{
    let ingresoHTML=`
    <div class="list-container">
    <div>${ingreso.descripcion}</div>
    <div>
        <div>${ingreso.valor}$</div>
        <button onclick="eliminarIngreso(${ingreso.id})">Eliminar</button>
    </div>
    </div>
    `
    return ingresoHTML;
}

const cargarEgresos=()=>{
    let egresosHTML="";
    for(let egreso of egresos){
        egresosHTML+=crearEgreso(egreso);
    }
    document.getElementById("listaEgresos").innerHTML=egresosHTML;
}

const crearEgreso=(egreso)=>{
    let egresoHTML=`
    <div class="list-container">
    <div>${egreso.descripcion}</div>
    <div>${egreso.valor}$</div>
    <button onclick="eliminarEgreso(${egreso.id})">Eliminar</button>
    </div>
    `
    return egresoHTML;
}


const eliminarIngreso=(id)=>{
    // for(let ingreso of ingresos){
        /**
         * Basicamente el error es que estabas buscando el indice por cada elemento del arreglo cuando debias buscarlo solo una vez.
         * Lo mismo sucedía en el eliminarEgreso
         */
        let eliminar= ingresos.findIndex(ingreso => ingreso.id===id);
        ingresos.splice(eliminar,1);
        cargarCabecero();
        cargarIngresos();
        
    // }
}

const eliminarEgreso=(id)=>{
    // for(let egreso of egresos){
        let eliminar= egresos.findIndex(egreso => egreso.id===id);
        ingresos.splice(eliminar,1);
        cargarCabecero();
        cargarEgresos();
    // }
}


const cargarApp=() =>{
    cargarCabecero(),cargarIngresos(),cargarEgresos()
}
