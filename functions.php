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

// Home page only. All other pages are managed via Yoast Bulk Editor and
// individual page meta boxes in wp-admin — Yoast handles their <head> natively.
// To add PHP control for an additional page, add a new keyed entry here.
$tbtb_seo_data = [

    '/' => [
        'title'               => 'The Best Travel Biz Institute™ | Travel CEO Education for Independent Agents',
        'meta_description'    => 'Executive education for travel entrepreneurs. Stop renting a desk — learn how to own the building with structure, ownership, and systems that build long-term wealth.',
        'canonical'           => 'https://thebesttravelbiz.com/',
        'og_title'            => 'The Best Travel Biz Institute™',
        'og_description'      => 'Executive education for travel entrepreneurs. Stop renting a desk — learn how to own the building with structure, ownership, and systems that build long-term wealth.',
        'og_image'            => 'https://thebesttravelbiz.com/wp-content/uploads/2026/05/the-best-travel-biz-institute-meta.png',
        'og_type'             => 'website',
        'twitter_title'       => 'The Best Travel Biz Institute™',
        'twitter_description' => 'Executive education for travel entrepreneurs. From travel agent to CEO — with structure, ownership, and systems that build long-term wealth.',
        'twitter_image'       => 'https://thebesttravelbiz.com/wp-content/uploads/2026/05/the-best-travel-biz-institute-meta.png',
        'robots'              => 'index, follow, max-image-preview:large',
    ],

    '/premium' => [
        'title'               => 'Premium Membership — Travel CEO Education Tier | The Best Travel Biz Institute™',
        'meta_description'    => 'Premium Membership is the CEO education and foundational setup tier of The Best Travel Biz Institute™. Learn the structure, systems, and positioning of a true Institute-grade travel business. $97/month, cancel anytime.',
        'canonical'           => 'https://thebesttravelbiz.com/premium/',
        'og_title'            => 'Premium Membership — Travel CEO Education Tier | The Best Travel Biz Institute™',
        'og_description'      => 'The CEO education and foundational setup tier of The Best Travel Biz Institute™. $97/month, cancel anytime.',
        'og_image'            => 'https://thebesttravelbiz.com/wp-content/uploads/travel-agent-premium_membership.png',
        'og_type'             => 'website',
        'twitter_title'       => 'Premium Membership — Travel CEO Education Tier | The Best Travel Biz Institute™',
        'twitter_description' => 'The CEO education and foundational setup tier of The Best Travel Biz Institute™. $97/month, cancel anytime.',
        'twitter_image'       => 'https://thebesttravelbiz.com/wp-content/uploads/travel-agent-premium_membership.png',
        'robots'              => 'index, follow, max-image-preview:large',
    ],

    '/ceo-vault' => [
        'title'               => 'VIP CEO Vault™ — Private 12-Month Advisory Cohort for Independent Travel Business Owners | The Best Travel Biz Institute™',
        'meta_description'    => 'The Best Travel Biz Institute\'s private 12-month advisory cohort for established travel professionals completing their structural transition to independent ownership. Phased executive implementation. Quarterly 1:1 with founder Bobbie A. Self. Group trip launch support. AI Executive Assistant Implementation. Limited to 24 members. Founding Cohort opens July 1, 2026. By application only.',
        'canonical'           => 'https://thebesttravelbiz.com/ceo-vault/',
        'og_title'            => 'VIP CEO Vault™ — Private 12-Month Advisory Cohort | The Best Travel Biz Institute™',
        'og_description'      => 'A private 12-month advisory cohort for established travel professionals completing the transition to independent ownership. Limited to 24 members. By application only.',
        'og_image'            => '',
        'og_type'             => 'website',
        'twitter_title'       => 'VIP CEO Vault™ — Private 12-Month Advisory Cohort | The Best Travel Biz Institute™',
        'twitter_description' => 'A private 12-month advisory cohort for established travel professionals completing the transition to independent ownership. Limited to 24 members. By application only.',
        'twitter_image'       => '',
        'robots'              => 'index, follow, max-image-preview:large',
    ],

    '/fast-track' => [
        'title'               => '100% Commission Fast Track™ — Self-Paced Ownership Implementation System | The Best Travel Biz Institute™',
        'meta_description'    => 'The structured self-paced implementation system for travel professionals walking the path to 100% commission ownership. The 4 Paths to 100% Ownership™ framework, Snapshot-informed starting pathway, implementation templates, and operational setup guidance. $1,997 one-time or 3 × $697. Travel Business Snapshot™ required before enrollment.',
        'canonical'           => 'https://thebesttravelbiz.com/fast-track/',
        'og_title'            => '100% Commission Fast Track™ — Self-Paced Ownership Implementation System | The Best Travel Biz Institute™',
        'og_description'      => 'The structured self-paced implementation system for travel professionals walking the path to 100% commission ownership. $1,997 one-time or 3 × $697. Travel Business Snapshot™ required before enrollment.',
        'og_image'            => '',
        'og_type'             => 'website',
        'twitter_title'       => '100% Commission Fast Track™ — Self-Paced Ownership Implementation System',
        'twitter_description' => 'The structured self-paced implementation system for travel professionals walking the path to 100% commission ownership. $1,997 one-time or 3 × $697.',
        'twitter_image'       => '',
        'robots'              => 'index, follow, max-image-preview:large',
    ],

    '/bookstore' => [
        'title'               => 'The Bookstore | The Best Travel Biz Institute™',
        'meta_description'    => 'Books, workbooks, and guides for travel agents building ownership. Business education you can hold — from The Best Travel Biz Institute™.',
        'canonical'           => 'https://thebesttravelbiz.com/bookstore/',
        'og_title'            => 'The Bookstore | The Best Travel Biz Institute™',
        'og_description'      => 'Books, workbooks, and guides for travel agents building ownership. Business education you can hold.',
        'og_image'            => 'https://thebesttravelbiz.com/wp-content/themes/btbi-theme/react-app/assets/ebook-cover-ipad.png',
        'og_type'             => 'website',
        'twitter_title'       => 'The Bookstore | The Best Travel Biz Institute™',
        'twitter_description' => 'Books, workbooks, and guides for travel agents building ownership.',
        'twitter_image'       => 'https://thebesttravelbiz.com/wp-content/themes/btbi-theme/react-app/assets/ebook-cover-ipad.png',
        'robots'              => 'index, follow, max-image-preview:large',
    ],

    '/why-are-you-splitting-commission' => [
        'title'               => 'Why Are You Splitting Commission? | The Best Travel Biz Institute™',
        'meta_description'    => 'The $7 guide that shows travel agents what their commission structure is actually costing them. Ownership Audit, Five Profit Leaks, and a 90-Day Ownership Plan.',
        'canonical'           => 'https://thebesttravelbiz.com/why-are-you-splitting-commission/',
        'og_title'            => 'Why Are You Splitting Commission If You Do All the Work?',
        'og_description'      => 'A $7 wake-up guide for hosted and independent travel agents. Ownership Audit, Profit Leak Breakdown, and a 90-Day Plan.',
        'og_image'            => 'https://thebesttravelbiz.com/wp-content/themes/btbi-theme/react-app/assets/ebook-cover-ipad.png',
        'og_type'             => 'article',
        'twitter_title'       => 'Why Are You Splitting Commission If You Do All the Work?',
        'twitter_description' => 'The $7 clarity guide for hosted and independent travel agents.',
        'twitter_image'       => 'https://thebesttravelbiz.com/wp-content/themes/btbi-theme/react-app/assets/ebook-cover-ipad.png',
        'robots'              => 'index, follow, max-image-preview:large',
    ],

    '/snapshot' => [
        'title'               => 'Travel Business Snapshot™ | The Best Travel Biz Institute™',
        'meta_description'    => 'A structured business assessment for travel agents. Know exactly where you stand across the ownership domains — and which path fits your business.',
        'canonical'           => 'https://thebesttravelbiz.com/snapshot/',
        'og_title'            => 'Travel Business Snapshot™ — Executive Diagnostic',
        'og_description'      => 'A structured business assessment for travel agents. Full private executive analysis, 20–30 minute Loom video, and strategic roadmap deliverable. Personally reviewed by Bobbie within 7 business days.',
        'og_image'            => 'https://thebesttravelbiz.com/wp-content/uploads/2026/05/the-best-travel-biz-institute-meta.png',
        'og_type'             => 'website',
        'twitter_title'       => 'Travel Business Snapshot™ — Executive Diagnostic',
        'twitter_description' => 'A structured business assessment for travel agents — reviewed personally by Bobbie within 7 business days.',
        'twitter_image'       => 'https://thebesttravelbiz.com/wp-content/uploads/2026/05/the-best-travel-biz-institute-meta.png',
        'robots'              => 'index, follow, max-image-preview:large',
    ],

    '/challenge' => [
        'title'               => '14-Day Travel Agent to CEO Challenge™ | Free | The Best Travel Biz Institute™',
        'meta_description'    => 'Fourteen days of guided ownership work for travel agents. Free. No commitment. Shift how you think about your business before you change a single thing about it.',
        'canonical'           => 'https://thebesttravelbiz.com/challenge/',
        'og_title'            => '14-Day Travel Agent to CEO Challenge™ — Free',
        'og_description'      => 'Fourteen days of guided ownership work for travel agents. Daily worksheets, signed CEO declarations, and a Virtual Graduation Ceremony at the end.',
        'og_image'            => 'https://thebesttravelbiz.com/wp-content/uploads/2026/05/the-best-travel-biz-institute-meta.png',
        'og_type'             => 'website',
        'twitter_title'       => '14-Day Travel Agent to CEO Challenge™ — Free',
        'twitter_description' => 'Fourteen days of guided ownership work for travel agents. Free to join.',
        'twitter_image'       => 'https://thebesttravelbiz.com/wp-content/uploads/2026/05/the-best-travel-biz-institute-meta.png',
        'robots'              => 'index, follow, max-image-preview:large',
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
    // ?? handles missing keys without a notice; ?: then catches empty strings
    // so an empty og_image/twitter_image falls back to Yoast's default instead
    // of outputting an empty meta tag.
    return ($tbtb_seo_data[$route][$key] ?? null) ?: $fallback;
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
// PRODUCT SCHEMA — Bookstore + Sales page
//
// Social crawlers (Facebook, LinkedIn, Slack, Twitter) and Google's structured
// data parser do NOT execute JavaScript. The React-rendered page body is
// invisible to them. We inject Product JSON-LD into the PHP-rendered <head>
// so search engines see price/availability/author and can show rich results.
//
// Mirrors the SEO data pattern: route-keyed, falls back to nothing if the
// route isn't matched.
// ════════════════════════════════════════════════════════════════════════════

add_action('wp_head', function () {
    if (!btbi_is_react_page()) return;

    $route = tbtb_get_route();

    $schemas = [
        '/bookstore' => [
            '@context'    => 'https://schema.org',
            '@type'       => 'Product',
            'name'        => 'Why Are You Splitting Commission If You Do All the Work?',
            'description' => "A Travel Agent's Wake-Up Guide to Ownership, Branding, and Keeping What You Earn",
            'image'       => 'https://thebesttravelbiz.com/wp-content/themes/btbi-theme/react-app/assets/ebook-cover-ipad.png',
            'brand'       => ['@type' => 'Brand', 'name' => 'The Best Travel Biz Institute™'],
            'author'      => ['@type' => 'Person', 'name' => 'Bobbie A. Self'],
            'offers'      => [
                '@type'         => 'Offer',
                'price'         => '7.00',
                'priceCurrency' => 'USD',
                'availability'  => 'https://schema.org/InStock',
                'url'           => 'https://thebesttravelbiz.com/bookstore/',
            ],
        ],
        '/why-are-you-splitting-commission' => [
            '@context'    => 'https://schema.org',
            '@type'       => 'Product',
            'name'        => 'Why Are You Splitting Commission If You Do All the Work?',
            'description' => "A $7 wake-up guide for hosted and independent travel agents. Ownership Audit, Five Profit Leaks, and a 90-Day Ownership Plan.",
            'image'       => 'https://thebesttravelbiz.com/wp-content/themes/btbi-theme/react-app/assets/ebook-cover-ipad.png',
            'brand'       => ['@type' => 'Brand', 'name' => 'The Best Travel Biz Institute™'],
            'author'      => ['@type' => 'Person', 'name' => 'Bobbie A. Self'],
            'offers'      => [
                '@type'         => 'Offer',
                'price'         => '7.00',
                'priceCurrency' => 'USD',
                'availability'  => 'https://schema.org/InStock',
                'url'           => 'https://thebesttravelbiz.com/why-are-you-splitting-commission/',
            ],
        ],
    ];

    if (!isset($schemas[$route])) return;

    echo "\n<script type=\"application/ld+json\">\n";
    echo wp_json_encode($schemas[$route], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    echo "\n</script>\n";
}, 50);


// ════════════════════════════════════════════════════════════════════════════
// X-ROBOTS-TAG — block PDFs and member resources from search indexing
//
// Yoast handles HTML pages but cannot stop Google from indexing a PDF if
// someone links to it directly. This header is set on every request whose
// path matches a protected resource directory.
//
// (The same rules also live in .htaccess as a defense-in-depth — see the
// X-Robots-Tag block in the theme's .htaccess snippet.)
// ════════════════════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════════════════════════
// PRERENDERED BODY SNAPSHOTS — for ad-platform crawlers and faster indexing
//
// Meta and Google ad crawlers DO NOT execute JavaScript. When they scrape
// landing pages to approve ads or score landing page quality, they see only
// the empty <div id="root"></div> shell. That can lower ad reach, raise CPC,
// and delay ad approval.
//
// For the routes that ad campaigns target, we inject a pre-rendered HTML
// snapshot of the React-rendered body INSIDE #root. React's render() replaces
// the children of #root the moment it boots, so humans never see the snapshot.
//
// Snapshots live in /react-app/prerendered-snapshots.php and are generated
// by /react-app/prerender-snapshots.js. Re-run that script if content drifts.
// ════════════════════════════════════════════════════════════════════════════

add_action('template_redirect', function () {
    if (!btbi_is_react_page()) return;

    $snapshot_file = get_template_directory() . '/react-app/prerendered-snapshots.php';
    if (!file_exists($snapshot_file)) return;

    $snapshots = include $snapshot_file;
    $route = tbtb_get_route();
    if (empty($snapshots[$route])) return;

    $body = $snapshots[$route];

    // Buffer the entire page output, then surgically inject the snapshot
    // inside <div id="root">…</div>. Matches whether the div is empty or
    // contains whitespace; preserves any extra attributes the template added.
    ob_start(function ($html) use ($body) {
        return preg_replace(
            '#(<div\s+id="root"[^>]*>)\s*(</div>)#i',
            '$1' . $body . '$2',
            $html,
            1
        );
    });
});

add_action('send_headers', function () {
    $uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
    $protected_prefixes = [
        '/worksheets/',
        '/challenge-resources/',
        '/member-resources/',
        '/wp-content/uploads/private/',
    ];
    foreach ($protected_prefixes as $prefix) {
        if (strpos($uri, $prefix) === 0) {
            header('X-Robots-Tag: noindex, nofollow', true);
            return;
        }
    }
    // Also catch any PDF served from /wp-content/uploads/ that lives in a
    // year/month folder labelled "private" or "members".
    if (preg_match('#\.pdf(\?|$)#i', $uri) && preg_match('#/(private|members|gated|protected)/#i', $uri)) {
        header('X-Robots-Tag: noindex, nofollow', true);
    }
});
