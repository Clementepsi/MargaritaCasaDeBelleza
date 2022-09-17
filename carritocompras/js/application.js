var productos = [
    {
        id: 1,
        nombre: 'Shampoo Crecimiento extremo',
        precio: 280.00
    },
    {
        id: 2,
        nombre: 'Acondicionador de Lavanda',
        precio: 280.00
    },
    {
        id: 3,
        nombre: 'Keratina artesanal',
        precio: 90.00
    },
    {
        id: 4,
        nombre: 'Crema para peinar',
        precio: 90.00
    },
    {
        id: 5,
        nombre: 'Gotas de Seda',
        precio: 90.00
    },
    {
        id: 6,
        nombre: 'Botox capilar',
        precio: 120.00
    },
    {
        id: 7,
        nombre: 'Jabón de lavanda',
        precio: 90.00
    },
    {
        id: 8,
        nombre: 'Jabón de avena',
        precio: 90.00
    },
    {
        id: 9,
        nombre: 'Jabón de romero',
        precio: 90.00
    },
    {
        id: 10,
        nombre: 'Suero para pestañas',
        precio: 160.00
    },
    {
        id: 11,
        nombre: 'Mascarilla de arcilla',
        precio: 159.00
    },
    {
        id: 12,
        nombre: 'Mascarilla de carbón activado',
        precio: 99.00
    },
    {
        id: 13,
        nombre: 'Tónico Facial',
        precio: 180.00
    },
    {
        id: 14,
        nombre: 'Crema Hidratante',
        precio: 200.00
    },
    {
        id: 15,
        nombre: 'Crema Anti edad',
        precio: 180.00
    },
    {
        id: 16,
        nombre: 'Loción para barba',
        precio: 250.00
    },
    {
        id: 17,
        nombre: 'Crema anti irritaciones ',
        precio: 200.00
    },
    {
        id: 18,
        nombre: 'Crema humectante con coco y lavanda',
        precio: 240.00
    }
];

function Carrito() {
    if (localStorage.getItem('carrito')) {
        var json = localStorage.getItem('carrito');
        this.elementos = JSON.parse(json);
    } else {
        this.elementos = [];
    }

    this.agregar = function(id, cantidad) {
        if (id === 0) return;

        var check = false;

        this.elementos.forEach(function(elemento, indice) {
            if (elemento.id === id) {
                elemento.cantidad += cantidad;
                check = true;
            }
        });

        if (!check) {
            this.elementos.push({
                id: id,
                cantidad: cantidad
            });
        }

        this.actualizar();
    };

    this.cambiarCantidad = function(id, cantidad) {
        this.elementos.forEach(function (elemento, indice) {
            if (elemento.id === id) {
                elemento.cantidad = cantidad;
            }
        });

        this.actualizar();
    };

    this.eliminar = function(id) {
        this.elementos = this.elementos.filter(function (el) {
            return el.id !== id;
        });

        this.actualizar();
    };

    this.actualizar = function() {
        var json = JSON.stringify(this.elementos);
        localStorage.setItem("carrito", json);
    };

    this.limpiar = function() {
        this.elementos = [];
        this.actualizar();
    };
}

function eliminarProducto(id) {
    var carrito = new Carrito();
    carrito.eliminar(id);
    actualizarHtmlTabla(carrito.elementos);
}

function cambiarCantidad(elemento, id) {
    var cantidad = parseInt($(elemento.target).val());

    if (cantidad <= 0) {
        eliminarProducto(id);
    } else {
        var carrito = new Carrito();
        carrito.cambiarCantidad(id, cantidad);
        actualizarHtmlTabla(carrito.elementos);
    }
}

function actualizarHtmlTabla(elementos) {
    if (elementos.length === 0) {
        $('#tblCarrito').html('<tr><td colspan="5">No hay productos en el carrito</td></tr>');
        return;
    }

    $('#tblCarrito').html('');

    var totalCarrito = 0;

    elementos.forEach(function(elemento, indice) {
        var producto = productos.filter(function (el) {
            return el.id === elemento.id;
        })[0];

        var total = elemento.cantidad * producto.precio;
        totalCarrito += total;

        var html =
        '<tr>' +
        '   <td>' + producto.nombre + '</td>' +
        '   <td><input type="number" class="form-control" onchange="cambiarCantidad(event, ' + elemento.id + ')" min="0" value="' + elemento.cantidad + '" /></td>' +
        '   <td class="text-right">$ ' + producto.precio.toFixed(2) + '</td>' +
        '   <td class="text-right">$ ' + total.toFixed(2) + '</td>' +
        '   <td><button class="btn btn-default btn-sm" onclick="eliminarProducto(' + elemento.id + ')"><i class="fa fa-trash-o"></i></button></td>' +
        '</tr>';

        $('#tblCarrito').append(html);
    });

    var renglonTotal =
    '<tr>' +
    '   <td colspan="3" class="text-right"><h4>TOTAL EN EL CARRITO:</h4></td>' +
    '   <td colspan="2"><h3 style="margin:0;"><label class="label label-success">$ ' + totalCarrito.toFixed(2) + '</label></h3></td>' +
    '</tr>';

    $('#tblCarrito').append(renglonTotal);
}

$(document).ready(function() {
    var carrito = new Carrito();

    $('#cmbProductos').html('<option value="0" selected="selected">Seleccione un producto</option>');

    productos.forEach(function(producto, indice) {
        $('#cmbProductos').append('<option value="' + producto.id + '">' + producto.nombre + ' - ($' + producto.precio.toFixed(2) + ')</option>');
    });

    $('#frmAgregar').submit(function (e) {
        e.preventDefault();

        var id = parseInt($('#cmbProductos').val());
        var cantidad = parseInt($('#txtCantidad').val());

        var carrito = new Carrito();

        carrito.agregar(id, cantidad);

        actualizarHtmlTabla(carrito.elementos);
    });

    $('#btnLimpiar').click(function (e) {
        e.preventDefault();

        var carrito = new Carrito();
        carrito.limpiar();
        actualizarHtmlTabla([]);
    });

    actualizarHtmlTabla(carrito.elementos);
});
