/**
 * Created by PhpStorm.
 * User:  lm
 * Date:
 */
$(function () {
    var Masonry = require('masonry-layout');
    var msnry = new Masonry('.product_list_grid', {
        itemSelector: '.grid-item',
        columnWidth: 289,
        gutter: 10
    });

})