$("#clock")
   .countdown("2016/04/21", function(event) {
     $(this).text(
       event.strftime('%D днів %H годин %M хвилин %S секунд')
     );
   });
