$('#rut').on('input', function() {
    this.value = this.value.replace(/[^kK0-9\_]/g, '');
    let value = this.value;
    $("#labelRut p").remove();

    if (value.length > 1) {
        value = value.substring(0, value.length - 1) + '-' + value.substring(value.length - 1, value.length);
    }
    if (value.length > 5) {
        value = value.substring(0, value.length - 5) + '.' + value.substring(value.length - 5, value.length);
    }
    if (value.length > 9) {
        value = value.substring(0, value.length - 9) + '.' + value.substring(value.length - 9, value.length);
    }
    this.value = value;
    if (value.length >= 11) {
        let valor = value.replace(".", "").replace(".", "");
        //Remueve y agrega texto error
       Fn.validaRut(valor) ? ($("#rut").addClass("success"), $("#rut").removeClass("error")): ($("#labelRut").append("<p style='color: red; font-size: 14px; margin: -15px 0 1em; font-family: 'Fjalla One', sans - serif;'> Rut inválido, por favor verifíquelo</p>"), $("#rut").removeClass('success'), $("#rut").addClass("error"));
    }
});
let Fn = {
    validaRut: function(rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        let tmp = rutCompleto.split('-');
        let digv = tmp[1];
        let rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function(T) {
        let M = 0,
            S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}