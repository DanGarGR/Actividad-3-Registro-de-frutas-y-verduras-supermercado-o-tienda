const app1 = {
    data() {
        return {
            frutas: [
                { nombre: 'Manzana', cantidad: 15, precioUnitario: 5 }
            ],
            nuevaFruta: '',
            nuevaCantidad: 0,
            nuevoPrecio: 0.0,
            tasaIVA: 0.16
        };
    },
    computed: {
        subtotal() {
            return this.frutas.reduce((sum, fruta) => sum + (fruta.cantidad * fruta.precioUnitario), 0);
        },
        iva() {
            return this.subtotal * this.tasaIVA;
        },
        total() {
            return this.subtotal + this.iva;
        }
    },
    methods: {
        montoFruta(index) {
            return this.frutas[index].cantidad * this.frutas[index].precioUnitario;
        },
        agregar() {
            if (this.nuevaFruta && this.nuevoPrecio > 0) {
                this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad: this.nuevaCantidad || 0,
                    precioUnitario: this.nuevoPrecio
                });
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0;
            } else {
                alert("Por favor, completa todos los campos correctamente.");
            }
        }
    }
};

Vue.createApp(app1).mount('#seccion');
