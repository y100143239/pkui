define(function(a){"use strict";a("./config/systemUrl"),a("./config/globalSetting"),a("./config/shortcut");var b=a("jquery"),c=a("./common/launchpad"),d=a("./common/app"),e=(a("template"),a("./common/app-search")),f=a("./common/app-sidebar");a("./common/menuSource");window.isIE8&&seajs.use("./css/page/ie8-hack.css"),b(document).ready(function(){c.init(),d.init(),new e({targetSelector:"#topbar-toolbar-search"}),new f({toggleSelector:"#topbar-history",sidebarSelector:"#daSidebar",sidebarBodySelecotr:"#da-sidebar-body",oftenUsedUrl:"__CTX__/admin/oftenUsedSysMenu",recentUsedUrl:"__CTX__/admin/recentUsedSysMenu",saveUsedMenuUrl:"__CTX__/admin/saveUsedMenu",maxOftenUsedItemNum:6,maxRecentUsedItemNum:10})})});