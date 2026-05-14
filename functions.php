<?php
defined('ABSPATH') || exit;

// ─── Theme support ───────────────────────────────────────────────────────────
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
});

// ─── Version bump this after every new React build upload ────────────────────
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
        // Preconnect hints injected via wp_head filter below
        wp_enqueue_style('btbi-fonts', $fonts_url, [], null);
        wp_enqueue_style('btbi-app', btbi_react_app_url('assets/app.css'), ['btbi-fonts'], BTBI_REACT_VER);
        wp_enqueue_script('btbi-samcart', 'https://static.samcart.com/checkouts/sc-slide-script.js', [], null, false);
        wp_enqueue_script('btbi-app', btbi_react_app_url('assets/app.js'), [], BTBI_REACT_VER, true);
        // Dequeue default WP block styles — not needed for React pages
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('global-styles');
    } else {
        // Blog / archive pages still get brand fonts
        wp_enqueue_style('btbi-fonts', $fonts_url, [], null);
        wp_enqueue_style('btbi-blog', get_template_directory_uri() . '/blog.css', ['btbi-fonts'], BTBI_REACT_VER);
    }
});

// Add defer to SamCart (must be deferred, not in footer)
add_filter('script_loader_tag', function (string $tag, string $handle): string {
    if ($handle === 'btbi-samcart') {
        return str_replace(' src=', ' defer src=', $tag);
    }
    return $tag;
}, 10, 2);

// Inject font preconnect hints before wp_head styles
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

// ─── SEO: per-route title and meta tags ──────────────────────────────────────
function btbi_get_route(): string {
    $uri  = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
    $path = strtok($uri, '?');
    $path = '/' . trim($path, '/');
    if ($path === '//') $path = '/';
    return $path;
}

$btbi_seo = [
    '/' => [
        'title' => 'The Best Travel Biz Institute™ | Travel CEO Education for Independent Agents',
        'desc'  => 'Education for independent travel agents transitioning to true CEO-level business ownership — without host-agency dependence, recruiting, or downlines.',
    ],
    '/about' => [
        'title' => 'About Bobbie A. Self, MBA — The Travel CEO Architect | The Best Travel Biz Institute',
        'desc'  => 'MBA. Fortune 100 luxury travel executive. Founder of The Best Travel Biz Institute & Sow Into Self Wellness Travel. 25 years building structures that develop people into business owners.',
    ],
    '/snapshot' => [
        'title' => 'Travel Business Snapshot™ — CEO-Level Diagnostic | The Best Travel Biz Institute',
        'desc'  => 'The Travel Business Snapshot™ assesses your business across 7 executive dimensions. Find out exactly where you stand before applying to VIP CEO Vault.',
    ],
    '/snapshot-intake' => [
        'title' => 'Snapshot Intake Form | The Best Travel Biz Institute™',
        'desc'  => 'Complete your Travel Business Snapshot™ intake form. Share your business details to receive your personalized CEO-level diagnostic assessment.',
    ],
    '/challenge' => [
        'title' => 'Free 14-Day Travel Agent to CEO Challenge | The Best Travel Biz Institute™',
        'desc'  => 'Free 14-Day Challenge. Access training, community, and worksheets designed to shift your mindset from travel agent to business owner. No cost to join.',
    ],
    '/ceo-vault' => [
        'title' => 'VIP CEO Vault — By Invitation Only | The Best Travel Biz Institute™',
        'desc'  => 'Invitation-based advisory for qualified travel operators. Quarterly CEO sessions, annual retreat, and executive-level scaling guidance. Apply today.',
    ],
    '/contact' => [
        'title' => 'Contact | The Best Travel Biz Institute™',
        'desc'  => 'Reach The Best Travel Biz Institute™ for general inquiries, speaking requests, or media opportunities. Email: institute@thebesttravelbiz.com.',
    ],
    '/media' => [
        'title' => 'Media & Press | The Best Travel Biz Institute™',
        'desc'  => 'Media and press inquiries for The Best Travel Biz Institute™ and Bobbie A. Self, MBA. Contact our team at media@thebesttravelbiz.com.',
    ],
    '/careers' => [
        'title' => 'Careers | The Best Travel Biz Institute™',
        'desc'  => 'Career opportunities at The Best Travel Biz Institute™. Join the team helping travel agents transition to true business ownership.',
    ],
    '/bookstore' => [
        'title' => 'Bookstore | The Best Travel Biz Institute™',
        'desc'  => 'The Best Travel Biz Institute™ Bookstore. Educational resources and guides for independent travel agents building toward true ownership.',
    ],
    '/ceo-letters' => [
        'title' => 'CEO Letters | The Best Travel Biz Institute™',
        'desc'  => 'Strategic letters and communications from Bobbie A. Self, MBA, Founder of The Best Travel Biz Institute™, to the travel CEO community.',
    ],
    '/terms-and-conditions' => [
        'title' => 'Terms and Conditions | The Best Travel Biz Institute™',
        'desc'  => 'Terms and Conditions for The Best Travel Biz Institute™. Review membership tiers, billing, cancellation, and intellectual property guidelines.',
    ],
    '/student-non-disclosure' => [
        'title' => 'Student Non-Disclosure Agreement | The Best Travel Biz Institute™',
        'desc'  => 'Student NDA for Premium and VIP members of The Best Travel Biz Institute™. Governs use of proprietary methods, strategies, and educational materials.',
    ],
    '/privacy-policy' => [
        'title' => 'Privacy Policy | The Best Travel Biz Institute™',
        'desc'  => 'Privacy Policy for The Best Travel Biz Institute™, operated by Sow Into Self Wellness & Travel Group, LLC. How we collect, use, and protect your information.',
    ],
    '/earnings-disclaimer' => [
        'title' => 'Earnings Disclaimer | The Best Travel Biz Institute™',
        'desc'  => 'Earnings Disclaimer for The Best Travel Biz Institute™. Individual results vary. Income outcomes depend on individual effort, experience, and market conditions.',
    ],
];

// Override WordPress document title per route
add_filter('pre_get_document_title', function (string $title) use ($btbi_seo): string {
    if (!btbi_is_react_page()) return $title;
    $route = btbi_get_route();
    return isset($btbi_seo[$route]) ? $btbi_seo[$route]['title'] : 'The Best Travel Biz Institute™';
});

// Inject meta description, Open Graph, Twitter Card, and canonical per route
add_action('wp_head', function () use ($btbi_seo): void {
    if (!btbi_is_react_page()) return;

    $route  = btbi_get_route();
    $page   = isset($btbi_seo[$route]) ? $btbi_seo[$route] : [
        'title' => 'The Best Travel Biz Institute™',
        'desc'  => 'Travel business education for independent agents transitioning to true CEO-level ownership.',
    ];
    $title  = esc_attr($page['title']);
    $desc   = esc_attr($page['desc']);
    $url    = esc_attr('https://thebesttravelbiz.com' . $route . '/');
    $img    = esc_attr(get_template_directory_uri() . '/react-app/assets/og-image.jpg');

    echo '<meta name="description" content="' . $desc . '">' . "\n";
    echo '<meta name="robots" content="index, follow">' . "\n";
    echo '<link rel="canonical" href="' . $url . '">' . "\n";
    echo '<meta property="og:type" content="website">' . "\n";
    echo '<meta property="og:title" content="' . $title . '">' . "\n";
    echo '<meta property="og:description" content="' . $desc . '">' . "\n";
    echo '<meta property="og:url" content="' . $url . '">' . "\n";
    echo '<meta property="og:image" content="' . $img . '">' . "\n";
    echo '<meta property="og:site_name" content="The Best Travel Biz Institute™">' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
    echo '<meta name="twitter:title" content="' . $title . '">' . "\n";
    echo '<meta name="twitter:description" content="' . $desc . '">' . "\n";
    echo '<meta name="twitter:image" content="' . $img . '">' . "\n";
}, 2);
