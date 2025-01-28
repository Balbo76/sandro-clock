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

$now = getdate(time());

$hours = $now['hours'];
$minutes = $now['minutes'];
$seconds = $now['seconds'];

$context = [
    'hours' => $hours,
    'minutes' => $minutes,
    'seconds' => $seconds,
];

wp_interactivity_state( 'sandro-clock', [
    'hdeg' => "rotate(" . ($hours * 30 + $minutes * (360/720)) . "deg)",
    'mdeg' => "rotate(" . ($minutes * 6 + $seconds * (360/3600)) . "deg)",
    'sdeg' => "rotate(" . ($seconds * 6) . "deg)"
]);
?>

<div <?php echo get_block_wrapper_attributes(); ?> data-wp-interactive="sandro-clock" data-wp-init="callbacks.initSandroClock"
    <?php echo wp_interactivity_data_wp_context( $context ); ?> >
    <div class="dot"></div>
    <div>
        <div data-wp-style--transform="state.hdeg" class="hour-hand"></div>
        <div data-wp-style--transform="state.mdeg" class="minute-hand"></div>
        <div data-wp-style--transform="state.sdeg" class="second-hand"></div>
    </div>
    <div>
        <span class="h3">3</span>
        <span class="h6">6</span>
        <span class="h9">9</span>
        <span class="h12">12</span>
    </div>
    <div class="diallines"></div>
</div>
