if (annyang) {

  console.log("annyang loaded.")
  var sceneHouse = function() {
    console.log("loading scene house.")
    viewer.loadScene('house');
  };
  var sceneCircle = function() {
    console.log("loading scene circle.")
    viewer.loadScene('circle');
  };



  var commands = {
    'show house': sceneHouse,
    'show circle': sceneCircle,
  };


  annyang.debug(); //shows console messages
  annyang.addCommands(commands);
  annyang.setLanguage('en');
  annyang.start();

} else {
  $(document).ready(function() {
    $('#unsupported').fadeIn('fast');
  });
}

$('#skitt-listening-text__instructions').html('Say "Send message.." to start sending your message.');
