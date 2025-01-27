<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generates a unique id for aria-controls.
$unique_id = wp_unique_id( 'clock-' );
$ora = date('d/m/Y H:i:s');
// Adds the global state.
wp_interactivity_state( 'sandro-clock', [
    'ora'    => $ora
]);
?>

<div <?php echo get_block_wrapper_attributes(); ?> data-wp-interactive="sandro-clock" data-wp-init="callbacks.initSandroClock" >
    <div>
        <div class="info date"></div>
        <div class="info day"></div>
    </div>
    <div class="dot"></div>
    <div>
        <div class="hour-hand"></div>
        <div class="minute-hand"></div>
        <div class="second-hand"></div>
    </div>
    <div>
        <span class="h3">3</span>
        <span class="h6">6</span>
        <span class="h9">9</span>
        <span class="h12">12</span>
    </div>
    <div class="diallines"></div>
</div>
