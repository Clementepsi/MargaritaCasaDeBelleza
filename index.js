// dont use row as a container anymore, take the parent element
const teamData = [
    {
        category: "cabello",
        img: "./Assets/shampoo_crecimiento.png",
        name: "Shampoo Crecimiento extremo",
        description: "Con el poder del aceite de Bergamota Y romero ayuda a prevenir la caida formando un cabello más fuerte desde la raíz hasta las puntas, estimulado tres veces más el crecimiento natural. ",
        isPromo: false,
        isNew: false,
        size: "1lt",
        price: 280
    },
    {
        category: "cabello",
        img: "./Assets/acondicionador_lavanda.png",
        name: "Acondicionador lavanda",
        description: "• 10 veces menos caída en cada uso <br>• Fórmula sin sal <br> • Ayuda a reducir la caída del cabello debido al quiebre Libre de químicos. <br>• Ayuda a prevenir la caída formando un cabello más fuertes desde la raíz hasta las puntas. ",
        isPromo: false,
        isNew: false,
        size: "500ml",
        price: 280
    },
    {
        category: "cabello",
        img: "./Assets/keratina_artesanal.png",
        name: "Keratina artesanal ",
        description: "No se enjuaga para que sus activos continúen reparando y es ideal para cabello extremadamente dañado, seco, poroso y sobre procesado. Fórmula inteligente que rellena, repara y sella las zonas débiles, porosas y dañadas del cabello, en un solo paso y sin enjuague.",
        isPromo: false,
        isNew: false,
        size: "330ml",
        price: 90
    },
    {
        category: "cabello",
        img: "./Assets/crema_peinar.jpg",
        name: "Crema para peinar",
        description: "Crema con extractos de frambuesas y fresas que repara las puntas, donde normalmente el cabello suelte estar más seco. Puede usarse para controlar un cabello rebelde y mejorarlo desde la raíz hasta la punta. Experimenta mejor control de tu cabello desde la mañana hasta la noche, con la nueva crema para peinar Reparación de MARGARITA. repara las puntas, donde normalmente el cabello suele estar más seco. Puedes utilizarlo para controlar el cabello rebelde y mejorarlo desde la raíz hasta la punta, mientras despide una fragancia activa que actúa durante todo el día. ",
        isPromo: true,
        isNew: false,
        size: "330ml",
        price: 90
    },
    {
        category: "cabello",
        img: "./Assets/gotas_seda.jpg",
        name: "Gotas de seda",
        description: "las gotas de seda MARGARITA ofrecen un brillo excepcional y controlan el esponjado del cabello. Su formula lijera es ideal para todo tipo de cabello y no deja residuos. ",
        isPromo: false,
        isNew: false,
        size: "90ml",
        price: 120
    },
    {
        category: "cabello",
        img: "./Assets/botox_capilar.png",
        name: "Botox Capilar",
        description: "hidrata y le da brillo al cabello, dejandolo más bonito, un poco más liso, sin frizz y sin horquetillas. A pesar de que el nombre de este tratamiento contiene la palabra botox, estos productos no contienen la toxina botulinica. Teniendo este nombre porque renueva el cabello corriguiendo daños. ",
        isPromo: true,
        isNew: false,
        size: "50ml",
        price: 120
    },

    {
        category: "jabones",
        img: "./Assets/jabon_lavanda.png",
        name: "Jabon de lavanda",
        description: " Jabon de lavanda 100% natural libre de toxicos, brinda suavidad a la piel, Tiene propiedades antisépticas, previene el acné y ayuda a tratar inflamaciones, quemaduras y afecciones cutáneas como la psoriasis.",
        isPromo: false,
        isNew: false,
        size: "15g",
        price: 160
    },
    {
        category: "jabones",
        img: "./Assets/jabon_avena.png",
        name: "Jabon de avena",
        description: "El jabón de avena tiene un efecto astringente, ayuda a reducir los niveles de grasa en la piel, por lo que es muy útil para tratar espinillas, barros y otras imperfecciones relacionadas con la acumulación de sebo en el cutis. ",
        isPromo: false,
        isNew: false,
        size: "15g",
        price: 160
    },
    {
        category: "jabones",
        img: "./Assets/jabon_romero.png",
        name: "Jabon de romero",
        description: "Te va a encantar el jabón de romero si tu piel tiene tendencia grasa o acnéica, ya que está especialmente indicado para este tipo de pieles. Además, puedes usarlo en las zonas más grasas del cuerpo, como la espalda. ",
        isPromo: false,
        isNew: false,
        size: "15g",
        price: 160
    },
    {
        category: "skinCare",
        img: "./Assets/suero_pestañas.png",
        name: "Suero para pestañas",
        description: "El suero crecimiento de pestañas, MARGARITA ha sido formulado para las mujeres que desean tener pestañas mas largas, abundantes y fuertes. Es perfecto para esas mujeres que tienen pestañas naturalmente pequeñas y debiles, que usan pestañas postizas o han usado extensiones de pestañas. La formula hace pestañas mas largas y gruesas. se puede tener hermosas pestañas en muy poco tiempo. ",
        isPromo: false,
        isNew: false,
        size: "15g",
        price: 160
    },
    {
        category: "paraEllos",
        img: "./Assets/losion_barba.jpg",
        name: "Losion para barba",
        description: "Estimula el Crecimiento de Cabello y Barba <br>•Auxiliar para el tratamiento de la alopecia androgenética <br>•Ayuda a incrementar la densidad del cabello, barba y bigote. <br>•Ayuda a alargar la fase de crecimiento del cabello y barba <br>•Es seguro por su baja absorción en la sangre ",
        isPromo: true,
        isNew: false,
        size: "330ml",
        price: 250
    },
    
   
    {
        category: "skinCare",
        img: "./Assets/crema_humectante.png",
        name: "Crema Hidratante",
        description: "Las cremas hidratantes son un producto cosmético que calma y evita la sequedad de la piel, es decir que hidrata la piel, aunque no son efectivas en el tratamiento de las arrugas. Es un preparado semisólido de uso tópico. Este producto puede aplicarse en el rostro, cuerpo y manos.",
        isPromo: false,
        isNew: false,
        size: "500ml",
        price: 200
    },
    {
        category: "skinCare",
        img: "./Assets/crema_antiedad.png",
        name: "Crema Antiedad",
        description: "Un suero antiedad para hombres, que reafirma visiblemente la piel y reduce la aparición de líneas de expresión",
        isPromo: true,
        isNew: false,
        size: "70ml",
        price: 180
    },
    {
        category: "skinCare",
        img: "./Assets/crema_antirritante.png",
        name: "Crema anti irritante",
        description: "Una crema para después del afeitado que evita irritaciones y alivia la piel al instante",
        isPromo: false,
        isNew: false,
        size: "75ml",
        price: 200
    },
    {
        category: "skinCare",
        img: "./Assets/mascarilla_arcilla.png",
        name: "Mascarilla de arcilla",
        description: "Formulada para limpiar a profundidad cualquier tipo de piel y eliminar poros obstruidos. La ariclla purifica la piel y se seca por completo 20 minutos después de usarla, dejando la piel libre de bacterias y poros obstruidos.",
        isPromo: false,
        isNew: false,
        size: "100ml",
        price: 159
    }, 
    {
        category: "skinCare",
        img: "./Assets/mascarilla_carbon.png",
        name: "Mascarilla de carbón activado",
        description: "Mascarilla infundida con carbón que purifica los poros desde adentro, penetrando a profundidad y eliminando las impurezas.",
        isPromo: false,
        isNew: false,
        size: "100ml",
        price: 99
    }, 
    {
        category: "skinCare",
        img: "./Assets/tonico_facial.png",
        name: "Tónico facial",
        description: "Tónico hidratante de agua de rosas y aceite esencial de geranio perfecto para preparar la piel antes del aceite facial o para traer en la bolsa y refrescarte durante el día. También sirve para refrescar el maquillaje o preparar la piel para el maquillaje.",
        isPromo: false,
        isNew: false,
        size: "100ml",
        price: 180
    }, 

    {
        category: "skinCare",
        img: "./Assets/crema_coco.png",
        name: "Crema humectante coco-lavanda",
        description:"La mezcla de coco y aceite esencial de lavanda es exquisita y  muy agradable, sino también muy relajante (por el toque de lavanda). Para prepararla solamente tienes que mezclar estos ingredientes con un poco de cera de abeja.",
        isPromo: false,
        isNew: false,
        size: "100ml",
        price: 180
    }, 
];

function onClickCategory(categoria) {
    switch (categoria.toString()) {
        case "jabones":
            loadProducts(teamData.filter(function (item) { return item.category == "jabones"; }))
            hideLanding(true);
            break;
        case "cabello":
            loadProducts(teamData.filter(function (item) { return item.category == "cabello"; }))
            hideLanding(true);
            break;
        case "skinCare":
            loadProducts(teamData.filter(function (item) { return item.category == "skinCare"; }))
            hideLanding(true);
            break;
        case "paraEllos":
            loadProducts(teamData.filter(function (item) { return item.category == "paraEllos"; }))
            hideLanding(true);
            break;
        default:
            loadProducts(teamData.filter(function (item) { return item.isPromo; }).slice(0,4));
            hideLanding(false);
            break;
    }
}

function hideLanding(hide){
    var container = document.getElementById("container-landing");
    if (hide) {
        container.style.display = "none";
    }else{
        container.style.display = "block";
    }
}

function loadProducts(productsData) {
    var container = document.getElementById("product-container");
    var content = "";
    content += `<div class="row">`
    productsData.forEach(function (result, i) {
        if (i == 0) {
            //add start row 
        }
        // add content
        content += `<div style="margin-top:8px;" class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
<div class="card h-100">
  <img src="${result.img}" class="card-img-top product-image" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.name}</h5>
    <p class="card-text ">${result.description}</a>`
        if (result.isNew) {
            content += `<img src="./Assets/1.svg" class="promo-img" alt="...">`
        } else if (result.isPromo) {
            content += `<img src="./Assets/2.svg" class="promo-img" alt="...">`
        }
    content += `<div class="row">
    <p class="card-text col-md-4 col-sm-6 col-xs-12">$${result.price}</p>
    <br>
    <a href="#" class="card-btn btn btn-primary col-md-8 col-sm-6 col-xs-12">Agregar al carrito</a>
    </div>
    `
    content += `</div>
    </div> </div>`;

    });
    // after looping dont forget to close the last row 
    content += '</div>'
    container.innerHTML = ""
    container.innerHTML += content;
}

loadProducts(teamData.filter(function (item) { return item.isPromo; }).slice(0,4));
