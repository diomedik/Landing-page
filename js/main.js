$(document).ready(function(){
  $('.header-sliders').slick({
    prevArrow: $('.cord .header-slider__cord__arrow-prev, .prev'),
    nextArrow: $('.cord .header-slider__cord__arrow-next, .next'),
    dots: true
  });

  const slider = $('.header-sliders');
  $('.sl-count__total').text('0' + slider.slick("getSlick").slideCount );
  $(".header-sliders").on('afterChange', function(event, slick, currentSlide){
    let result = currentSlide + 1;
     $(".sl-count__num").text('0' + result);
   });


  function submitForm(){
    $('.next-step').click(function(){
       $('.contact-form').submit(function(e){
          e.preventDefault();
            let form_data = $(this).serialize(); // Собираем все данные из формы
            $.ajax({
                type: "POST", // Метод отправки
                url: "mail.php", // Путь до php файла отправителя
                data: form_data,
            });
       }); 
    });
  };

  const progressbar = $('progress'),
  value = progressbar.val();
  function loading(){
    value += 1;
    addValue = progressbar.val(value);
  };

  let steps = $("form").children(".step"); // находим все шаги формы
  $(steps[0]).show(); // показываем первый шаг
  let current_step = 0;
  let current_value = 1; // задаем текущий шаг
  function changeStep(i) { // функция смены шага
    $(steps).hide(); // скрываем все шаги
    $(steps[i]).show(); // показываем текущий
  };
 
  $(".next-step").click(function(){
    loading();
    current_step++; 
    current_value++;
    $('.progress-value .current-value').text(current_value );
    if(current_step == 3){
       submitForm();
    };
    if(current_step == 4){
      $('.progress-value').hide();
      $('progress').hide();
      $('.next-step').hide();
      $('.contact__content').hide();
      $('.contact-form').css({'text-align':'center', 'padding-top':'0px', 'padding-left':'0px'});
      $('.contact-form').addClass('col-md-12');
    };
    changeStep(current_step);
    changeStep(i);
  });

  $('.cross').click(function(){
    $('.contact-form').hide();
    $('.gradient').css({'padding-bottom':'300px'});
  });
  
  

});


    




