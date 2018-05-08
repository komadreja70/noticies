var fichLoaded = 0;
var fichName = ["1.json", "2.json", "3.json"];
var alturaJumb;
var alturaBar;
var intervalPub;
var imgPub = ["img/publi/1h.jpg", "img/publi/2h.jpg", "img/publi/3h.jpg"];
var inxPub = 1;

/*al carregar la pàgina*/
$(document).ready(function () {

    //scroll fins dalt per evitar càrregues automàtiques
    
    $("h1").fadeIn(1500);
    $('html, body').animate({ scrollTop: 0 }, 400);

    cargarEfectos();
    $(window).resize(function () {
        alturaJumb = $('#jumb').outerHeight();
        cargarEfectos();
    });


    //carrega noticies mitjançant botó
    $("#btnLoad").click(function () {
        cargarNoticias();
    });


    alturaJumb = $('#jumb').outerHeight();
    alturaBar = $('#mybar').outerHeight() + 20;

	// carrega noticies mitjançant scroll 
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            cargarNoticias();
        }
        if ($(window).scrollTop() > alturaJumb) {
            $('#mybar').css('position', 'fixed').css('top', '0').css('width', '100%');
            $('#mainC').css('margin-top', alturaBar);
        } else {
            $('#mybar').css('position', 'relative');
            $('#mainC').css('margin-top', '20px');
        }

    });
	// interval de publicitat vertical
    intervalPub = setInterval(function () {

        if ($(window).width() > 750) {
            $("#pubV").stop(true, true).fadeOut(200);
            $("#pubV").attr("src", imgPub[inxPub % imgPub.length]);
            $("#pubV").stop(true, true).fadeIn(200);
            inxPub++;
        } else {
            $("#pubV").stop(true, true).hide();
        }

    }, 15000);
});


//canviam efectes en funció del tamany de la pantalla
function cargarEfectos() {
    if ($(window).width() < 750) {
        $(".not .desc").stop(true, true).show();

        $(".not").mouseenter(function () {
            $("img", this).stop(true, true).fadeIn(1);
            $(".desc", this).stop(true, true).fadeIn(1);
        });

        $(".not").mouseleave(function () {
            $("img", this).stop(true, true).fadeIn(1);
            $(".desc", this).stop(true, true).fadeIn(1);
        });
    }
    else {
        $(".not .desc").stop(true, true).hide();
        $(".not").mouseenter(function () {
            $("img", this).stop(true, true).fadeTo(0.5, 0.2);
            $(".desc", this).stop(true, true).fadeIn(200);
        });

        $(".not").mouseleave(function () {
            $("img", this).stop(true, true).fadeTo(0.5, 1);
            $(".desc", this).stop(true, true).fadeOut(200)
        });
    }

}


function cargarNoticias() {
    if ((fichLoaded < fichName.length) && (cargarFichero(fichName[fichLoaded]))) {
        fichLoaded++;
    } else {
        $("#btnLoad").html("NO HI HA MÉS NOTÍCIES DISPONIBLES");
    }
}

function cargarFichero(nombreFichero) {
    var path = "https://raw.githubusercontent.com/komadreja70/noticies/master/data/" + nombreFichero;

    //carrega noticia
    $.getJSON(path, function (jsonObject) {
        crearNoticia(jsonObject, nombreFichero);
    });
    return true;
}
// crea la noticia al html
function crearNoticia(json, nombreFichero) {
    var m = document.getElementById("notCargar");
    var row = document.createElement("div");
    row.id = "row" + nombreFichero;
    row.className = "row";
    m.appendChild(row);

    for (i = 0; i < 2; i++) {
        var col = document.createElement("div");
        col.className = "col col-sm-6";
        var a = document.createElement("a");
        a.setAttribute('href', "#");
        var h3 = document.createElement("h3");
        h3.className = "notTitle";
        h3.textContent = json[i].title;
        var h5 = document.createElement("h5");
        h5.className = "date";
        h5.textContent = json[i].date;
        var n = document.createElement("div");
        n.className = "not img-rounded";
        var img = document.createElement("img");
        img.src = json[i].img;
        img.alt = "image New";
        var des = document.createElement("p");
        des.className = "desc";
        des.textContent = json[i].desc;

        n.appendChild(img);
        n.appendChild(des);
        a.appendChild(h3);
        a.appendChild(h5);
        a.appendChild(n);
        col.appendChild(a);
        row.appendChild(col);

        cargarEfectos();
    }
}
