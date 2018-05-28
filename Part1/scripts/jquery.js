$( "#clickme" ).click(function() {
    $( "#book" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
      alert('animation complete!');
    });
  });