var getData = function () {
    var nom = document.getElementById("nombre").value;
    var cip = document.getElementById("cedula").value;

    var sexo = "ninguno";
    var genero = document.getElementsByName("sexo");
    for (var i = 0; i < genero.length; i++) {
        if (genero[i].checked)
            sexo = genero[i].value;
    }

    var gustos = []
    var jobi = document.getElementsByName("aficion")
    for (var i = 0; i < jobi.length; i++) {
        if (jobi[i].checked)
            var nuevaLongitud = gustos.push(" " + jobi[i].value);
    }

    var provincia = document.getElementsByName("provincia")[0].value;

    function isValidDate(day, month, year) {
        var dteDate;
        month = month - 1;
        dteDate = new Date(year, month, day);
        return ((day == dteDate.getDate()) && (month == dteDate.getMonth()) && (year == dteDate.getFullYear()));
    }

    function validate_fecha(fecha) {
        var patron = new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");

        if (fecha.search(patron) == 0) {
            var values = fecha.split("-");
            if (isValidDate(values[2], values[1], values[0])) {
                return true;
            }
        }
        return false;
    }

    var fecha = document.getElementById("user_date").value;
    if (validate_fecha(fecha) == true) {
        var values = fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];

        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth() + 1;
        var ahora_dia = fecha_hoy.getDate();

        var edad = (ahora_ano + 1900) - ano;
        if (ahora_mes < mes) {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia)) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }

        var meses = 0;
        if (ahora_mes > mes)
            meses = ahora_mes - mes;
        if (ahora_mes < mes)
            meses = 12 - (mes - ahora_mes);
        if (ahora_mes == mes && dia > ahora_dia)
            meses = 11;

        var dias = 0;
        if (ahora_dia > dia)
            dias = ahora_dia - dia;
        if (ahora_dia < dia) {
            ultimoDiaMes = new Date(ahora_ano, ahora_mes, 0);
            dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
        }

    } else {
        document.getElementById("result").innerHTML = "La fecha " + fecha + " es incorrecta";
    }

    var mayorEdad = " ";
    if (edad > 18) {
        mayorEdad = "Mayor de Edad";
    } else {
        mayorEdad = "Menor de Edad";
    }
    document.getElementById("resultado").innerHTML = " \
    <br>Nombre Completo: " + nom + " \
    <br>Cedula: " + cip + "\
    <br>Sexo: " + sexo + " \
    <br>Aficiones: " + gustos + " \
    <br>Provincia: " + provincia + " \
    <br>Tiene: " + edad + " años, " + meses + " meses y " + dias + " días" + "\
    <br>" + mayorEdad;
}
