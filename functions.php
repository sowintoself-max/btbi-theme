<?php
/**
 * functions.php — The Best Travel Biz Institute™
 *
 * ARCHITECTURE NOTE:
 * This site uses a hybrid WordPress + React architecture. WordPress serves a
 * minimal HTML shell (<div id="root"></div>) and the React app renders all
 * visible content client-side. Because Yoast SEO reads from WordPress page
 * content — which does not exist for React-rendered pages — we use Yoast's
 * own filter hooks to inject correct metadata, keeping Yoast as the output
 * layer while this file controls the actual values.
 *
 * SEO DATA FLOW:
 *   1. $tbtb_seo_data array (below) holds all per-page metadata in one place.
 *   2. tbtb_get_route() detects the current URL path on every request.
 *   3. Yoast filter callbacks read from $tbtb_seo_data and return correct values.
 *   4. Yoast outputs the final <head> tags exactly as it normally would.
 *
 * TO UPDATE SEO COPY: Edit only $tbtb_seo_data. Do not touch the filters.
 * TO ADD A NEW PAGE:  Add one new keyed entry to $tbtb_seo_data.
 */

defined('ABSPATH') || exit;


// ─── Theme support ───────────────────────────────────────────────────────────

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
});


// ─── Version bump after every new React build upload ─────────────────────────

define('BTBI_REACT_VER', '1.0.0');


// ─── Helpers ─────────────────────────────────────────────────────────────────

function btbi_is_react_page(): bool {
    return is_front_page() || is_page_template('page-react-app.php');
}

function btbi_react_app_url(string $path = ''): string {
    return get_template_directory_uri() . '/react-app/' . $path;
}


// ─── Enqueue assets ──────────────────────────────────────────────────────────

add_action('wp_enqueue_scripts', function () {
    $fonts_url = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700'
        . '&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400'
        . '&family=Montserrat:wght@300;400;500;600;700'
        . '&family=Mrs+Saint+Delafield&display=swap';

    if (btbi_is_react_page()) {
        wp_enqueue_style('btbi-fonts', $fonts_url, [], null);
        wp_enqueue_style('btbi-app', btbi_react_app_url('assets/app.css'), ['btbi-fonts'], BTBI_REACT_VER);
        wp_enqueue_script('btbi-samcart', 'https://static.samcart.com/checkouts/sc-slide-script.js', [], null, false);
        wp_enqueue_script('btbi-app', btbi_react_app_url('assets/app.js'), [], BTBI_REACT_VER, true);
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('global-styles');
    } else {
        wp_enqueue_style('btbi-fonts', $fonts_url, [], null);
        wp_enqueue_style('btbi-blog', get_template_directory_uri() . '/blog.css', ['btbi-fonts'], BTBI_REACT_VER);
    }
});

// Defer SamCart script
add_filter('script_loader_tag', function (string $tag, string $handle): string {
    if ($handle === 'btbi-samcart') {
        return str_replace(' src=', ' defer src=', $tag);
    }
    return $tag;
}, 10, 2);

// Font preconnect hints
add_action('wp_head', function () {
    if (!btbi_is_react_page()) return;
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}, 1);


// ─── Remove noise from React page <head> ─────────────────────────────────────

add_action('init', function () {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
});


// ════════════════════════════════════════════════════════════════════════════
// SEO DATA
//
// Edit this array to update all metadata sitewide.
// One entry per route slug (leading slash, no trailing slash except root).
// All canonical, og_image, and twitter_image values must be absolute URLs.
//
// og_type options:  'website' | 'article'
// robots options:   'index, follow' | 'noindex, nofollow'
// ════════════════════════════════════════════════════════════════════════════

$tbtb_seo_data = [

    '/' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/about' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/about/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/snapshot' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/snapshot/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/snapshot-intake' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/snapshot-intake/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'noindex, nofollow',
    ],

    '/challenge' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/challenge/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/ceo-vault' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/ceo-vault/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/contact' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/contact/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/media' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/media/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/careers' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/careers/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/bookstore' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/bookstore/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/ceo-letters' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/ceo-letters/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/terms-and-conditions' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/terms-and-conditions/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/student-non-disclosure' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/student-non-disclosure/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/privacy-policy' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/privacy-policy/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

    '/earnings-disclaimer' => [
        'title'               => '...',
        'meta_description'    => '...',
        'canonical'           => 'https://thebesttravelbiz.com/earnings-disclaimer/',
        'og_title'            => '...',
        'og_description'      => '...',
        'og_image'            => '...',
        'og_type'             => 'website',
        'twitter_title'       => '...',
        'twitter_description' => '...',
        'twitter_image'       => '...',
        'robots'              => 'index, follow',
    ],

];


// ════════════════════════════════════════════════════════════════════════════
// SEO HELPERS
// ════════════════════════════════════════════════════════════════════════════

/**
 * Returns the current URL path, normalised to match the keys in $tbtb_seo_data.
 * Strips query strings and trailing slashes (except root '/').
 */
function tbtb_get_route(): string {
    $uri  = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
    $path = strtok($uri, '?');
    $path = '/' . trim($path, '/');
    return ($path === '//') ? '/' : $path;
}

/**
 * Returns a single metadata value for the current route.
 * Falls back to $fallback if the route or key is not found in $tbtb_seo_data.
 *
 * @param string $key      The metadata key (e.g. 'title', 'meta_description').
 * @param mixed  $fallback Value to return if no match is found — use the
 *                         original Yoast value so unregistered pages are unaffected.
 */
function tbtb_seo(string $key, $fallback = '') {
    global $tbtb_seo_data;
    if (!btbi_is_react_page()) return $fallback;
    $route = tbtb_get_route();
    return $tbtb_seo_data[$route][$key] ?? $fallback;
}


// ════════════════════════════════════════════════════════════════════════════
// YOAST FILTER CALLBACKS
//
// Each function intercepts one Yoast output tag and replaces it with the
// matching value from $tbtb_seo_data. If the current page is not in the
// array, the original Yoast value ($default) is returned unchanged —
// so any page not listed above continues to work normally.
// ════════════════════════════════════════════════════════════════════════════

/** Controls the <title> tag rendered in <head>. */
function tbtb_yoast_title(string $default): string {
    return tbtb_seo('title', $default);
}

/** Controls the <meta name="description"> tag. */
function tbtb_yoast_metadesc(string $default): string {
    return tbtb_seo('meta_description', $default);
}

/** Controls the <link rel="canonical"> href. Prevents staging URLs leaking. */
function tbtb_yoast_canonical(string $default): string {
    return tbtb_seo('canonical', $default);
}

/** Controls <meta property="og:title">. */
function tbtb_yoast_og_title(string $default): string {
    return tbtb_seo('og_title', $default);
}

/** Controls <meta property="og:description">. */
function tbtb_yoast_og_desc(string $default): string {
    return tbtb_seo('og_description', $default);
}

/** Controls <meta property="og:image">. Must be an absolute URL. */
function tbtb_yoast_og_image(string $default): string {
    return tbtb_seo('og_image', $default);
}

/** Controls <meta property="og:url">. */
function tbtb_yoast_og_url(string $default): string {
    return tbtb_seo('canonical', $default);
}

/** Controls <meta property="og:type"> (e.g. 'website', 'article'). */
function tbtb_yoast_og_type(string $default): string {
    return tbtb_seo('og_type', $default);
}

/** Controls <meta name="twitter:title">. */
function tbtb_yoast_twitter_title(string $default): string {
    return tbtb_seo('twitter_title', $default);
}

/** Controls <meta name="twitter:description">. */
function tbtb_yoast_twitter_description(string $default): string {
    return tbtb_seo('twitter_description', $default);
}

/** Controls <meta name="twitter:image">. Must be an absolute URL. */
function tbtb_yoast_twitter_image(string $default): string {
    return tbtb_seo('twitter_image', $default);
}

/** Controls <meta name="robots">. */
function tbtb_yoast_robots(string $default): string {
    return tbtb_seo('robots', $default);
}


// ─── Register all Yoast filters ──────────────────────────────────────────────

add_filter('wpseo_title',                'tbtb_yoast_title');
add_filter('wpseo_metadesc',             'tbtb_yoast_metadesc');
add_filter('wpseo_canonical',            'tbtb_yoast_canonical');
add_filter('wpseo_opengraph_title',      'tbtb_yoast_og_title');
add_filter('wpseo_opengraph_desc',       'tbtb_yoast_og_desc');
add_filter('wpseo_opengraph_image',      'tbtb_yoast_og_image');
add_filter('wpseo_opengraph_url',        'tbtb_yoast_og_url');
add_filter('wpseo_opengraph_type',       'tbtb_yoast_og_type');
add_filter('wpseo_twitter_title',        'tbtb_yoast_twitter_title');
add_filter('wpseo_twitter_description',  'tbtb_yoast_twitter_description');
add_filter('wpseo_twitter_image',        'tbtb_yoast_twitter_image');
add_filter('wpseo_robots',               'tbtb_yoast_robots');


// ════════════════════════════════════════════════════════════════════════════
// SCHEMA MARKUP
//
// Yoast outputs JSON-LD schema via the wpseo_schema_graph filter, which
// receives the full @graph array. We modify or append pieces here per page.
//
// Schema types used on this site:
//   /          → Organization
//   /about     → Person (Bobbie A. Self)
//   /snapshot  → Service
//   /ceo-vault → Service
//   /challenge → Course
//   all others → WebPage (Yoast default — no override needed)
//
// Fill in the placeholder values below when ready. The @id values must be
// unique absolute URLs — using the canonical + '#type' is the convention.
// ════════════════════════════════════════════════════════════════════════════

add_filter('wpseo_schema_graph', function (array $graph): array {
    if (!btbi_is_react_page()) return $graph;

    $route = tbtb_get_route();

    // ── Organization schema (homepage) ───────────────────────────────────────
    if ($route === '/') {
        $graph[] = [
            '@type'       => 'Organization',
            '@id'         => 'https://thebesttravelbiz.com/#organization',
            'name'        => 'The Best Travel Biz Institute™',
            'url'         => 'https://thebesttravelbiz.com/',
            'logo'        => '...',   // absolute URL to logo image
            'description' => '...',
            'sameAs'      => [
                '...',   // Facebook URL
                '...',   // Instagram URL
                '...',   // LinkedIn URL
            ],
        ];
    }

    // ── Person schema (About page) ────────────────────────────────────────────
    if ($route === '/about') {
        $graph[] = [
            '@type'       => 'Person',
            '@id'         => 'https://thebesttravelbiz.com/about/#person',
            'name'        => 'Bobbie A. Self',
            'jobTitle'    => 'Founder & CEO',
            'worksFor'    => ['@id' => 'https://thebesttravelbiz.com/#organization'],
            'url'         => 'https://thebesttravelbiz.com/about/',
            'image'       => '...',   // absolute URL to founder photo
            'description' => '...',
            'sameAs'      => [
                '...',   // LinkedIn profile URL
            ],
        ];
    }

    // ── Service schema (Snapshot page) ───────────────────────────────────────
    if ($route === '/snapshot') {
        $graph[] = [
            '@type'            => 'Service',
            '@id'              => 'https://thebesttravelbiz.com/snapshot/#service',
            'name'             => 'Travel Business Snapshot™',
            'url'              => 'https://thebesttravelbiz.com/snapshot/',
            'provider'         => ['@id' => 'https://thebesttravelbiz.com/#organization'],
            'description'      => '...',
            'serviceType'      => 'Business Diagnostic',
            'areaServed'       => 'US',
        ];
    }

    // ── Service schema (CEO Vault page) ──────────────────────────────────────
    if ($route === '/ceo-vault') {
        $graph[] = [
            '@type'            => 'Service',
            '@id'              => 'https://thebesttravelbiz.com/ceo-vault/#service',
            'name'             => 'VIP CEO Vault',
            'url'              => 'https://thebesttravelbiz.com/ceo-vault/',
            'provider'         => ['@id' => 'https://thebesttravelbiz.com/#organization'],
            'description'      => '...',
            'serviceType'      => 'Advisory Program',
            'offers' => [
                '@type'         => 'Offer',
                'price'         => '997.00',
                'priceCurrency' => 'USD',
                'priceSpecification' => [
                    '@type'           => 'UnitPriceSpecification',
                    'price'           => '997.00',
                    'priceCurrency'   => 'USD',
                    'unitText'        => 'MONTH',
                ],
            ],
        ];
    }

    // ── Course schema (Challenge page) ───────────────────────────────────────
    if ($route === '/challenge') {
        $graph[] = [
            '@type'          => 'Course',
            '@id'            => 'https://thebesttravelbiz.com/challenge/#course',
            'name'           => '14-Day Travel Agent to CEO Challenge',
            'url'            => 'https://thebesttravelbiz.com/challenge/',
            'provider'       => ['@id' => 'https://thebesttravelbiz.com/#organization'],
            'description'    => '...',
            'hasCourseInstance' => [
                '@type'           => 'CourseInstance',
                'courseMode'      => 'online',
                'instructor'      => ['@id' => 'https://thebesttravelbiz.com/about/#person'],
            ],
            'offers' => [
                '@type'         => 'Offer',
                'price'         => '0',
                'priceCurrency' => 'USD',
                'availability'  => 'https://schema.org/InStock',
            ],
        ];
    }

    return $graph;
});
