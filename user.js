/* Free keys: x, most punctuation */
/* TODO? Ctrl-X, Ctrl-A */

user_pref("browser.autofocus", false);
user_pref("browser.ctrlTab.previews", true);
user_pref("browser.fullscreen.animate", false);
user_pref("browser.tabs.animate", false);
user_pref("general.autoScroll", true);
user_pref("general.smoothScroll", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("reader.color_scheme", "dark");
user_pref("signon.rememberSignons", false);

user_pref("extensions.dorandoKeyConfig.main.addBookmarkAsKb", "shift][B][");
user_pref("extensions.dorandoKeyConfig.main.goBackKb", "][H][");
user_pref("extensions.dorandoKeyConfig.main.goForwardKb", "][L][");
user_pref("extensions.dorandoKeyConfig.main.key_close", "][D][");
user_pref("extensions.dorandoKeyConfig.main.key_findAgain", "][N][");
user_pref("extensions.dorandoKeyConfig.main.key_findPrevious", "shift][N][");
user_pref("extensions.dorandoKeyConfig.main.key_fullScreen", "][Z][");
user_pref("extensions.dorandoKeyConfig.main.key_fullZoomEnlarge", "shift][+][");
user_pref("extensions.dorandoKeyConfig.main.key_fullZoomReduce", "][-][");
user_pref("extensions.dorandoKeyConfig.main.key_fullZoomReset", "][=][");
user_pref("extensions.dorandoKeyConfig.main.key_keyconfig", "][C][");
user_pref("extensions.dorandoKeyConfig.main.key_newNavigator", "][W][");
user_pref("extensions.dorandoKeyConfig.main.key_newNavigatorTab", "][T][");
user_pref("extensions.dorandoKeyConfig.main.key_openAddons", "][A][");
user_pref("extensions.dorandoKeyConfig.main.key_openDownloads", "][V][");
user_pref("extensions.dorandoKeyConfig.main.key_privatebrowsing", "shift][W][");
user_pref("extensions.dorandoKeyConfig.main.key_selectLastTab", "][)][");
user_pref("extensions.dorandoKeyConfig.main.key_selectTab1", "][&][");
user_pref("extensions.dorandoKeyConfig.main.key_selectTab2", "][É][");
user_pref("extensions.dorandoKeyConfig.main.key_selectTab3", "][\"][");
user_pref("extensions.dorandoKeyConfig.main.key_stop", "][S][");
user_pref("extensions.dorandoKeyConfig.main.key_toggleMute", "][M][");
user_pref("extensions.dorandoKeyConfig.main.key_undoCloseTab", "][U][");
user_pref("extensions.dorandoKeyConfig.main.manBookmarkKb", "][B][");
user_pref("extensions.dorandoKeyConfig.main.tabGroups-key-tabView", "][E][");
user_pref("extensions.dorandoKeyConfig.main.esc", "][][VK_ESCAPE][w = gBrowser.contentWindow; w.focus(); w.document.activeElement.blur()");
user_pref("extensions.dorandoKeyConfig.main.f", "][F][][gFindBar.startFind(gFindBar.FIND_LINKS)");
user_pref("extensions.dorandoKeyConfig.main.g", "][g][][gBrowser.mTabContainer.advanceSelectedTab(1,true)");
user_pref("extensions.dorandoKeyConfig.main.G", "shift][G][][gBrowser.mTabContainer.advanceSelectedTab(-1,true)");
user_pref("extensions.dorandoKeyConfig.main.i", "][I][][[].slice.apply(gBrowser.contentWindow.document.querySelectorAll('input,textarea')).filter((i) => i.clientWidth && i.clientHeight && !i.disabled)[0].focus(); goDoCommand('cmd_endLine')");
user_pref("extensions.dorandoKeyConfig.main.j", "][J][][goDoCommand('cmd_scrollLineDown')");
user_pref("extensions.dorandoKeyConfig.main.k", "][K][][goDoCommand('cmd_scrollLineUp')");
user_pref("extensions.dorandoKeyConfig.main.mru", "control][^][][ctrlTab.open(); ctrlTab.pick()");
user_pref("extensions.dorandoKeyConfig.main.o", "][O][][openLocation(); goDoCommand('cmd_delete')");
user_pref("extensions.dorandoKeyConfig.main.O", "shift][O][][openLocation(); goDoCommand('cmd_endLine')");
user_pref("extensions.dorandoKeyConfig.main.p", "][P][][openLocation(); goDoCommand('cmd_paste')");
user_pref("extensions.dorandoKeyConfig.main.P", "shift][P][][BrowserOpenTab(); goDoCommand('cmd_paste')");
user_pref("extensions.dorandoKeyConfig.main.q", "][Q][][ReaderParent.toggleReaderMode(event)");
user_pref("extensions.dorandoKeyConfig.main.y", "][Y][][Components.classes['@mozilla.org/widget/clipboardhelper;1'].getService(Components.interfaces.nsIClipboardHelper).copyString(content.location)");
user_pref("extensions.dorandoKeyConfig.main.xxx_key28_Browser:Reload", "][R][");
user_pref("extensions.dorandoKeyConfig.main.xxx_key30_Browser:ReloadSkipCache", "shift][R][");
