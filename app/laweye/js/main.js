/**
 * @fileOverview 应用入口
 * @author 吴钦飞(wuqf@pkusoft.net)
 * @module module:main
 * @requires jquery
 * @requires module:common/launchpad
 * @requires module:common/app
 */
define( function ( require ) {
    "use strict";

    // 载入系统功能URL配置文件
    require( "../../desktop/js/config/systemUrl" );
    // 载入通用功能URL配置文件
    require( "../../desktop/js/config/commonUrl" );
    // 载入通用功能URL配置文件
    require( "../../desktop/js/config/serviceUrl" );

    // 载入全局设置的配置文件
    require( "../../desktop/js/config/globalSetting" );

    // 载入配置文件
    require( "../../desktop/js/config/shortcut" );

    // 菜单数据源
    require( "../../desktop/js/common/menuSource" );

    // 预载入
    require( "template" );

    var
        $ = require( "jquery" ),
        Launchpad = require( "../../desktop/js/common/launchpad" ),
        App = require( "../../desktop/js/common/app" ),
        AppSearch = require( "../../desktop/js/common/app-search" ),
        AppSidebar = require( "../../desktop/js/common/app-sidebar" )

    ;

    require( "placeholderHandler" );

    if ( window.PKUI.isIE8 ) {
        require.async( "../../desktop/css/page/ie8-hack.css" );
    }




    // DOM树构建完毕后执行
    $( document ).ready( function () {

        // 会话有效性验证（自动初始化）
        require.async( "../../desktop/js/page/sessionValidityManager" );

        // 启动 Launchpad
        Launchpad.init();

        // 启动 应用（App）系统
        App.init();

        // 启动搜索功能
        new AppSearch( {
            targetSelector: "#da-top-search"
        } );
        new AppSearch( {
            mode: "private",
            targetSelector: "#starter-search-input"
        } );



        // 启动应用侧边栏
        new AppSidebar( {
            toggleSelector: "#topbar-history",
            sidebarSelector: "#daSidebar",
            sidebarBodySelecotr: "#da-sidebar-body",
            oftenUsedUrl: "__CTX__/admin/oftenUsedSysMenu",
            recentUsedUrl: "__CTX__/admin/recentUsedSysMenu",
            saveUsedMenuUrl: "__CTX__/admin/saveUsedMenu",

            maxOftenUsedItemNum: 6,
            maxRecentUsedItemNum: 10
        } );

        // 右下角下拉菜单功能（自动初始化）
        // require( "../../desktop/js/page/toolbarUserDropdown" );

        require.async( [
            "../../desktop/js/page/toolbar/userInfo",
            "../../desktop/js/page/toolbar/exitSystem",
            "../../desktop/js/page/toolbar/modifyPassword"
        ], function ( UserInfo, ExitSystem, ModifyPassword ) {
            // 所属单位
            UserInfo.inject( "#daTopDeptName", "deptId", "DIC_DEPT" );

            // 用户名
            UserInfo.inject( "#daTopUsername", "userName" );

            // 退出
            $( "#da-top-exit" ).on( "click.exit", function () {
                ExitSystem.exitAndGotoLoginPage( true );
            } );

            // 修改密码
            $( "#da-top-modifyPassword" ).on( "click.modifyPassword", function () {
                ModifyPassword.open();
            } );
        } );

    } );

    // 处理离开网页的情况
    // 当IE8注册“beforeunload”后，点击任何链接，都会提示“是否离开”。
    if ( ! window.PKUI.isIE8 ) {
        $( window ).on( "beforeunload", function () {
            return "确认要离开?";
        } );
    }


} );
