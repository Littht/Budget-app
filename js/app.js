const ingresos=[new Ingreso("salario",2000)];

const egresos= [new Egreso("compra",1000)];

cargarApp(cargarCabecero(),cargarIngresos(),cargarEgresos());

const cargarCabecero=()=>{
    let saldo = totalIngresos()-totalEgresos();
    document.getElementById("totalIngresos").innerHTML=`${totalIngresos()}$`;
    document.getElementById("totalEgresos").innerHTML=`${totalEgresos()}$`;
    document.getElementById("totalSaldo").innerHTML=`${saldo}$`
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

const crearIngreso=()=>{
    let ingresoHTML=`
    <div>
    <div>${ingreso.descripcion}</div>
    <div>${ingreso.valor}$</div>
    <button onclick="eliminarIngreso">x</button>
    </div>
    `
    return ingresoHTML;
}

const cargarIngresos=()=>{
    let ingresosHTML="";
    for( let ingreso of ingresos){
        ingresosHTML+=crearIngresos(ingreso);
    }
    document.getElementById("listaIngresos").innerHTML=ingresosHTML
}

const crearEgreso=()=>{
    let egresoHTML=`
    <div>
    <div>${egreso.descripcion}</div>
    <div>${egreso.valor}$</div>
    <button onclick="eliminarIngreso">x</button>
    </div>
    `
    return egresoHTML;
}

const cargarEgresos=()=>{
    let egresosHTML="";
    for(let egreso of egresos){
        egresosHTML+=crearEgreso(egreso);
    }
    document.getElementById("listaEgresos").innerHTML=egresosHTML;
}