function loadData(request, targetId, sourceId) {
    $.ajax({
        url: 'https://web1-api.herokuapp.com/api/' + request,
        cache: false,
        success: function (data) {
            let jsonData= {data:data};
            var source = $(sourceId).html();
            var template = Handlebars.compile(source);
            var html = template(jsonData);
            var target =  $(targetId);
            $(target).html(html);
        }
    });
}