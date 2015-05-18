<?php
function twentytwelve_child_widgets_init()
{
	register_sidebar( array(
		'name' => __( 'Blog Index Template', 'twentytwelve-child' ),
		'id' => 'blog-index-template',
		'description' => __( 'Appears when using the Blog Index template with a page set as Static', 'twentytwelve-child' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => '</aside>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	));

	register_sidebar( array(
		'name' => __( 'Default', 'twentytwelve-child' ),
		'id' => 'default-template',
		'description' => __( 'Appears when using the Home Page template with a page set as Static', 'twentytwelve-child' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => '</aside>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	));

}
add_action( 'widgets_init', 'twentytwelve_child_widgets_init' )
?>
