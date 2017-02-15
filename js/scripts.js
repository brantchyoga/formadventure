$(function() {
  $("form#formOne").submit(function(event) {
    var person1Input = $("input#person1").val().toUpperCase();
    var person2Input = $("input#person2").val().toUpperCase();
    var animalInput = $("input#animal").val().toUpperCase();
    var exclamationInput = $("input#exclamation").val().toUpperCase();
    var verbInput = $("input#verb").val().toUpperCase();
    var placeInput = $("input#place").val().toUpperCase();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".place").text(placeInput);
    // $("#story").show();
    event.preventDefault();
    $("#story").show();

  });
});
