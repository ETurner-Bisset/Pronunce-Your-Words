$("#word").keydown(function() {
    const word = this.value;
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '17a4263315msh39504e48d2c31dap1b5ea9jsnd0d5fb6cf396',
            'X-RapidAPI-Host': 'lingua-robot.p.rapidapi.com'
        }
    };
    $(".search").on("click", function(e) {
        e.preventDefault();
        $.ajax(settings).done(function (response) {
            console.log(response);
            $("h3").text(response.entries[0].entry);
            $("p").text(response.entries[0].lexemes.senses.definition);
            $("audio source").attr("src", response.entries[0][1].pronunciations[0].audio.url);
            var audio = $("audio");
            audio[0].load();
        });
    });
});









