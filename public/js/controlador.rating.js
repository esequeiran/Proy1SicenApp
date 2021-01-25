// 'use strict';

$('#estrellas').starrr({
    rating: 3,
    change: function(e, valor) {
        alert(valor);
    }
});