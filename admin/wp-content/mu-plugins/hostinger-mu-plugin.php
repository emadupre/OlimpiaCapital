<?php
/**
 * Plugin Name: Hostinger Smart Auto Updates
 * Plugin URI:  https://www.hostinger.com
 * Description: Faster and more secure updates for your themes, plugins, and core files. Managed entirely by Hostinger.
 * Version:     1.0.5
 * Author:      Hostinger
 * Author URI:  https://www.hostinger.com
 * License:     GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: hostinger-auto-updates-plugin
 * Domain Path: /languages
 * Requires at least: 5.0
 * Requires PHP: 7.4
 * Network:     true
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Disable automatic updates
 */
add_filter( 'automatic_updater_disabled', '__return_true' ); // Core updates
add_filter( 'auto_update_theme', '__return_false' );         // Theme updates
add_filter( 'auto_update_plugin', '__return_false' );        // Plugin updates

/**
 * Use Hostinger's proxy services for WordPress.org API and download requests.
 *
 * @param mixed  $response_override Response to replace with.
 * @param array  $args    HTTP request arguments.
 * @param string $url     Request URL.
 * @return mixed
 */
if ( ! function_exists( 'hostinger_use_proxy_services' ) ) {
    function hostinger_use_proxy_services( $response_override, $args, $url ) {
        $proxy_domains = [
            'api.wordpress.org'       => 'wpapi.hostinger.io',
            'downloads.wordpress.org' => 'wpdownloads.hostinger.io',
        ];

        foreach ( $proxy_domains as $original_domain => $proxy_domain ) {
            if ( strpos( $url, $original_domain ) !== false ) {
                $proxy_url = str_replace( $original_domain, $proxy_domain, $url );
                $response  = wp_remote_request( $proxy_url, $args );

                return $response;
            }
        }

        return $response_override;
    }
}

add_filter( 'pre_http_request', 'hostinger_use_proxy_services', 10, 3 );
