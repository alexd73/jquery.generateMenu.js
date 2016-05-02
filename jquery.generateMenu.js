/**
 * Created by alexey on 02.05.16.
 */

(function( $ ){
	/**
	 * Плагин необходимо навешивать на пустой элемент <ul>, в нем будут сгенерированы ссылки.
	 * Пример вызова:
	 * 	$("#navbar ui.nav).generateMenu();
	 * @returns {boolean}
     */
    $.fn.generateMenu = function() {

		// Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
		var options = $.extend( {
			"defSection": "section",
			"liClasses": ""
		}, options);

		t = this;
		$(options.defSection).each( function(index, element) {
			console.log( "id:", $(element).attr("id"));
			var linkText = $(element).data("linkText");
			var href = element.id;
			item = "";
			if (typeof linkText != 'undefined') {
				item = "<li><a href=\"#" + href + "\">" + linkText + "</a></li>";
				t.append(item);
				console.log(linkText)
			} else {
				console.log("no link text")
			}
		});
        return true;
    };
})( jQuery );
