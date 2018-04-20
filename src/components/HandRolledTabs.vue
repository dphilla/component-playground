
<template id="VueTabs">
  <div class="ui small form segment">
    <div id="tabs">
      <div class="ui  menu tabsName">
         <div class="ui label blue item">
           <i class="file outline icon"></i> Paginas:
        </div>
        <a class="item tabx" id="tAdd">
          <i class="add square icon"></i></a>
      </div>
    </div>
  </div>
  <div class="ui dimmer modals page">
    <div class="ui small modal">
      <div class="header">
        Cerrando..
      </div>
      <div class="content">
        <p>¿Esta seguro de cerrar esta página?</p>
      </div>
      <div class="actions">
        <div class="ui positive right labeled icon button">
          Si
          <i class="checkmark icon"></i>
        </div>
        <div class="ui negative button right labeled icon button">
          No
          <i class="close icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

var numberTabs = 1;
$(document).on('ready', function() {
  $('#tabs .menu .tab').tab({});
  appendTab('tabs', 'Tab 1');
  appendTab('tabs', 'Demo 2', 'Custom content <u>Cool</u>');
  appendTab('tabs', 'Demo 3', null, 'https://codepen.io');
});

function closeLoad(e) {
  $("#" + 'loader-' + e).removeClass('active');
}

$(document).on('click', '#tAdd', function() {
  appendTab('tabs');
});

$(document).on('click', '.btnx', function(e) {
  deleteTab('tabs', e.target.id.replace('btnx-', ''));
});

function appendTab(tab, nombre, contenido, url) {
  var t = $("#" + tab + " .tabsName");
  var tt = $("#" + tab);
  //var tl = t.find('.item').length;
  var n = (!!nombre ? nombre : ("tab " + (numberTabs).toString()));
  var tn = (!!nombre ? nombre.replace(/\s/g, '') : ("tab" + (numberTabs).toString()));
  contenido = !!contenido ? contenido : 'Content ' + tn;
  numberTabs++;
  if (!$("#tab-" + tn).length) {
    contenido = (!!url ? ('<iframe src="' + url + '" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;border:none;" onload="closeLoad(\'' + tn + '\')"></iframe><div class="ui active dimmer" id="loader-' + tn + '"><div class="ui large text loader">Cargando ...</div></div>') : contenido);

    t.find('#tAdd').remove();
    t.append('<a class="item tab" data-tab="' + tn + '" id="tab-' + tn + '">' + n + ' <i class="close icon btnx" id="btnx-' + tn + '"></i></a>')
      .append('<a class="item tabx" id="tAdd"><i class="add square icon"></i></a>');

    tt.append('<div class="ui tab tabc segment" data-tab="' + tn + '" id="tab-c-' + tn + '">' + contenido + ' </div>')
    $('#tabs .menu .tab').tab({});
  }
  $("#tab-" + tn).click();
}

function deleteTab(tab, nombre) {
    var n = nombre;
    var tt = $("#" + tab + " .tabsName");
    var tl = tt.find('.item').length;
    var t = $("#tab-" + n);
    var tc = $("#tab-c-" + n);
    if (!!n) {
      $('.small.modal').modal({
        closable: false,
        onDeny: function() {
          //alert('No!');
          //return false;
        },
        onApprove: function() {
          t.remove();
          tc.remove();
          if (tl > 0) {
            var tb = $("#" + tab + " div a.tab")[tl - 4];
            console.log(tb)
            $(tb.click());
            var u ="#"+tb.id;
            console.log(u);
            location.href=u;
          }
          $('#tabs .menu .tab').tab({});
        }
      }).modal('show');
    }
  }

</script>



<style scoped>

</style>
