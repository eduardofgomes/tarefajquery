$(document).ready(function(){

  $('#mudar-amarelo')
    .click(function(event){

      event.preventDefault()
      
      $('#fotinha')
        .attr('src', 'img/camaleao2.png');

  });

  $('#mudar-azul')
    .click(function(event){

      event.preventDefault()
      
      $('#fotinha')
        .attr('src', 'img/camaleao3.png');

  });

  $('#mudar-verde')
    .click(function(event){

      event.preventDefault()
      
      $('#fotinha')
        .attr('src', 'img/camaleao1.png');

  });

  $('#mudar-foto')
    .click(function(event){

      event.preventDefault()

        $(this)
          .attr('src', 'img/camaleaoColorido.jpg');
        $('#fechar-video')
          .attr('src', 'camaleao.mp4');
    });

    
  $('#mudar-foto')
    .dblclick(function(event){

      event.preventDefault()

        $(this)
          .attr('data-toggle', 'modal')
          .attr('data-target', '#modal-info');
        
    });

    $('.btn-fechar')
      .click(function(){

        $('#fechar-video')
          .attr('src', 'nothing');

      });

    
})

// o método .pause não funcionou para pausar o vídeo do modal por conta de que o vídeo está em uma tag iframe, por isso alterei o source do vídeo na hora que o usuário clica para sair do modal.
