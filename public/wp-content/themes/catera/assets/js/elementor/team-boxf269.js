(function($){"use strict";$(window).on('elementor/frontend/init',()=>{const addHandler=($element)=>{elementorFrontend.elementsHandler.addHandler(cateraSwiperBase,{$element,});};elementorFrontend.hooks.addAction('frontend/element_ready/catera-team-box.default',addHandler);});})(jQuery);