

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
			var item;
			if ((typeof linkText != 'undefined') && (href != '')) {
				item = "<li><a href=\"#" + href + "\">" + linkText + "</a></li>";
				ul.append(item);
				console.log(linkText)
			} else {
				console.log("no link text or ID")
			}
		});
		$(this.selector + ">li").addClass(options.liClasses);
		$(this.selector + ">li>a").addClass(options.aClasses);

        return true;
    };
})(jQuery);
