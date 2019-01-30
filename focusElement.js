/*
    Version: 1.0.0
    Author: Alefe Mafra
 */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    var methods = {
        show: function(variavel) {
            $(this).on('click', function() {
                if (!$('.focus-effect').hasClass('active')) {
                    $('.object.active').removeClass('object active');
                    $('.focus-effect').addClass('active');
                    $(variavel).addClass('object active');
                }
            });
        },
        showManual: function(variavel) {
            if (!$('.focus-effect').hasClass('active')) {
                $('.object.active').removeClass('object active');
                $('.focus-effect').addClass('active');
                $(variavel).addClass('object active');
            }
        },
        hide: function(variavel) {
            $(this).on('click', function() {
                if ($('.focus-effect').hasClass('active')) {
                    $('.focus-effect').removeClass('active');
                    $(variavel).removeClass('object active');
                }
            });
        },
        hideManual: function(variavel) {
            if ($('.focus-effect').hasClass('active')) {
                $('.focus-effect').removeClass('active');
                $(variavel).removeClass('object active');
            }
        },
        hideBackground: function() {
            $('.focus-effect').removeClass('active');
        }
    };

    $.fn.focus = function(methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init"
            return methods.hide.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
    };
}));