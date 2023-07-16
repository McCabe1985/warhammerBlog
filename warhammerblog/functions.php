<?php

function load_as_ES6($tag, $handle, $source) {
    if ($handle === 'hero_background') {
        $tag = '<script src="' . $source . '" type="module"></script>';
    }
    return $tag;
}
add_filter('script_loader_tag', 'load_as_ES6', 10, 3);

function header_anim(){
    wp_enqueue_script('fpHeaderUtils', get_theme_file_uri('/js/front-page-header/utils.js'), array(), '1.0', true);
    wp_enqueue_script('headerTemplate', get_theme_file_uri('/js/front-page-header/headerTemplate.js'), array(), '1.0', true);
    wp_enqueue_script('embers', get_theme_file_uri('/js/front-page-header/ember.js'), array(), '1.0', true);
    wp_enqueue_script('backgroundAnim', get_theme_file_uri('/js/front-page-header/backgroundAnim.js'), array(), '1.0', true);
    wp_enqueue_script('hero_background', get_theme_file_uri('/js/front-page-header/index.js'), array('backgroundAnim', 'embers','headerTemplate', 'fpHeaderUtils',), '1.0', true);
}
add_action('wp_enqueue_scripts', 'header_anim');

function blog_files() {
    wp_enqueue_style("blog_styles", get_theme_file_uri('/styles/styles.css'));
}

add_action('wp_enqueue_scripts', 'blog_files');


