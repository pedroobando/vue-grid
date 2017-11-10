new Vue({
  el: '#app',
  data: {
    nuevoName: "",
    nuevoAmount: 0,
    items:[
      { name: 'Servicios', amount: 200, paid: false },
      { name: 'Hosting de Anexsoft', amount: 90, paid: true },
      { name: 'Internet', amount: 3, paid: false }
    ]
  },
  methods: {
    agregarItem: function() {
      if (this.nuevoName.length >=1) {
        this.items.push({ name: this.nuevoName, amount:parseFloat(this.nuevoAmount), paid: false});
        this.nuevoName = '';
        this.nuevoAmount = 0;
      }
    },
    deleteTarea: function(index, elitem) {
      console.log(elitem.name);
      console.log(index);
      this.items.splice(index, 1);
    },
    TotMontoCancelado: function () {
      let _montoCancelado = 0
      this.items.forEach(function(element) {
        _montoCancelado += element.paid ? element.amount: 0
      }, this);
      return _montoCancelado;
    },
    totalAmount: function (t) {
      let total = this.items.reduce(function(a, b) {
        switch(t) {
          case 0: return a + (!b.paid ? b.amount : 0);
          case 1: return a + (b.paid ? b.amount : 0);
          case 2: return a + b.amount;
        }
      }, 0);
      return total.toFixed(2);
    },


  }
})


// new Vue({
//   el: '#app',
//   data: {
//     tareas : [
      
//     ],
//     nuevaTarea: ''
//   },
//   methods: {
//     agregarTarea: function () {
//       if (this.nuevaTarea.length >=1) {
//         this.tareas.push({ nombre: this.nuevaTarea, completado: false });
//         this.nuevaTarea = '';
//       }
//     },
//     deleteTarea: function (index, laTarea) {
//       console.log(laTarea);
//       this.tareas.splice(index, 1);
//     }

//   }
// })