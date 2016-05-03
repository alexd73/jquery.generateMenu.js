/**
 * Created by alexey on 02.05.16.
 */

(function( $ ){
	/**
	 * Плагин необходимо навешивать на пустой элемент <ul>, в нем будут сгенерированы ссылки.
	 * Пример вызова:
	 * 	$("ui.main-menu).generateMenu();
	 * @returns {boolean}
     */
    $.fn.generateMenu = function() {

		// Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
		var options = $.extend( {
			"defSection": "section",
			"liClasses": "",
			"aClasses": ""
	}, options);

		ul = this;
		$(options.defSection).each( function(index, element) {
			var linkText = $(element).data("linkText");
			var href = element.id;
			/**
			 * TODO: Добавить проверку на присутсвие ID
			 *
			 * TODO: Добавить добавление классов с проверкой на существование переменной.
             */
			item = "";
			if (typeof linkText != 'undefined') {
				item = "<li><a href=\"#" + href + "\">" + linkText + "</a></li>";
				ul.append(item);
				console.log(linkText)
			} else {
				console.log("no link text")
			}
		});


        return true;
    };
})( jQuery );
