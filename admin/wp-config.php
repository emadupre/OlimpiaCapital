<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u308047236_t0LYS' );

/** Database username */
define( 'DB_USER', 'u308047236_ANL8r' );

/** Database password */
define( 'DB_PASSWORD', '4btnq84S9l' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'f$/H)><pXuh)y;AJRtZ<0s>Wigi8Uk>p%z# 3Q3o(mxhZ@xyy7}qC$z>Ec|UP7}_' );
define( 'SECURE_AUTH_KEY',   '7v9gG2_#^Le?&3A.}jHK{QTN*/n//~`{Rz@ev[9*dPBf$@8)G~;d}?.:71MM?vo:' );
define( 'LOGGED_IN_KEY',     'V/Qx~+}Btn8$Lk^uWs <VAU`2[Lyp|>+Gv;7c-=[%M5R$V{3w_6I7:h6s 1E.1Xc' );
define( 'NONCE_KEY',         '&8YI794j8z!|5yPNR5u]GI3y!<v-BA3:oWgw$f%x:s<]6jaH>B/dOBa2Mn0O)}S_' );
define( 'AUTH_SALT',         '{R QP#_~x|Prg%=Zy~(K.=owvX rh%hOXp.^omUE-E!3O<K?Yt_tGzGO{4TEY/`{' );
define( 'SECURE_AUTH_SALT',  '(AZnW`#[./q|=c~~W{N>y1bS1T7bTKl#k#dqpDU.:m3vS}I${bC| 546>[1hnU5y' );
define( 'LOGGED_IN_SALT',    '/5O)?!1$83N/,WX<*a~1>4}?d*6s_k|4tbO:t5,?N!]hvL(]=$4,0,u]riqD@5_8' );
define( 'NONCE_SALT',        'vnR?bfh%w*pu[Mgbu[?;L{K*p}W-[C px7.~ytXiqB7R:X86NqFMUO{`J$kR=PSQ' );
define( 'WP_CACHE_KEY_SALT', 'a1a)..pyXagx-.jxVo$uu~;$Q|9y<hvGl3?X3O)9CmH`o#>.>jZ}}J;/67pR?SGD' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', 'e55354e8d4256b468e40badbe8db8b05' );
define( 'WP_AUTO_UPDATE_CORE', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
