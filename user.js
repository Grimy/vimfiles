user_pref("beacon.enabled", false);
user_pref("browser.autofocus", false);
user_pref("browser.ctrlTab.previews", true);
user_pref("browser.fullscreen.animate", false);
user_pref("browser.tabs.animate", false);
user_pref("general.autoScroll", true);
user_pref("general.smoothScroll", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("reader.color_scheme", "dark");
user_pref("signon.rememberSignons", false);

user_pref("extensions.dorandoKeyConfig.main.+", "shift][+][][FullZoom.enlarge()");
user_pref("extensions.dorandoKeyConfig.main.-", "][-][][FullZoom.reduce()");
user_pref("extensions.dorandoKeyConfig.main.=", "][=][][FullZoom.reset()");
user_pref("extensions.dorandoKeyConfig.main.^", "][^][][ctrlTab.open(); ctrlTab.pick()");
user_pref("extensions.dorandoKeyConfig.main.,", "][,][][gBrowser.mTabContainer.advanceSelectedTab(-1, true)");
user_pref("extensions.dorandoKeyConfig.main.;", "][;][][gBrowser.mTabContainer.advanceSelectedTab(1, true)");
user_pref("extensions.dorandoKeyConfig.main.1", "][&][][gBrowser.mTabContainer.selectedIndex = 0");
user_pref("extensions.dorandoKeyConfig.main.2", "][É][][gBrowser.mTabContainer.selectedIndex = 1");
user_pref("extensions.dorandoKeyConfig.main.3", "][\"][][gBrowser.mTabContainer.selectedIndex = 2");
user_pref("extensions.dorandoKeyConfig.main.b", "][B][][PlacesCommandHook.showPlacesOrganizer('UnfiledBookmarks')");
user_pref("extensions.dorandoKeyConfig.main.B", "shift][B][][PlacesCommandHook.bookmarkCurrentPage(true)");
user_pref("extensions.dorandoKeyConfig.main.d", "][D][][BrowserCloseTabOrWindow()");
user_pref("extensions.dorandoKeyConfig.main.e", "][E][][tabGroups.TabView.toggle()");
user_pref("extensions.dorandoKeyConfig.main.f", "][F][][gFindBar.startFind(gFindBar.FIND_LINKS)");
user_pref("extensions.dorandoKeyConfig.main.g", "][g][][goDoCommand('cmd_scrollTop')");
user_pref("extensions.dorandoKeyConfig.main.G", "shift][G][][goDoCommand('cmd_scrollBottom')");
user_pref("extensions.dorandoKeyConfig.main.h", "][H][][gBrowser.goBack()");
user_pref("extensions.dorandoKeyConfig.main.i", "][I][][[].slice.apply(content.document.querySelectorAll('input,textarea')).filter((i) => i.clientWidth && i.clientHeight && !i.disabled)[0].focus(); goDoCommand('cmd_endLine')");
user_pref("extensions.dorandoKeyConfig.main.j", "][J][][goDoCommand('cmd_scrollLineDown')");
user_pref("extensions.dorandoKeyConfig.main.k", "][K][][goDoCommand('cmd_scrollLineUp')");
user_pref("extensions.dorandoKeyConfig.main.l", "][L][][gBrowser.goForward()");
user_pref("extensions.dorandoKeyConfig.main.m", "][M][][gBrowser.selectedTab.toggleMuteAudio()");
user_pref("extensions.dorandoKeyConfig.main.n", "][N][][gFindBar.onFindAgainCommand()");
user_pref("extensions.dorandoKeyConfig.main.N", "shift][N][][gFindBar.onFindAgainCommand(true)");
user_pref("extensions.dorandoKeyConfig.main.o", "][O][][openLocation(); goDoCommand('cmd_delete')");
user_pref("extensions.dorandoKeyConfig.main.O", "shift][O][][openLocation(); goDoCommand('cmd_endLine')");
user_pref("extensions.dorandoKeyConfig.main.p", "][P][][gURLBar.value = readFromClipboard(); gURLBar.handleCommand()");
user_pref("extensions.dorandoKeyConfig.main.P", "shift][P][][BrowserOpenTab(); gURLBar.value = readFromClipboard(); gURLBar.handleCommand()");
user_pref("extensions.dorandoKeyConfig.main.q", "][Q][][ReaderParent.toggleReaderMode(event)");
user_pref("extensions.dorandoKeyConfig.main.r", "][R][][gBrowser.reload()");
user_pref("extensions.dorandoKeyConfig.main.R", "shift][R][][gBrowser.reloadWithFlags(512)");
user_pref("extensions.dorandoKeyConfig.main.s", "][S][][stop()");
user_pref("extensions.dorandoKeyConfig.main.t", "][T][][BrowserOpenTab()");
user_pref("extensions.dorandoKeyConfig.main.u", "][U][][undoCloseTab()");
user_pref("extensions.dorandoKeyConfig.main.w", "shift][W][][OpenBrowserWindow({private: true})");
user_pref("extensions.dorandoKeyConfig.main.X", "][][VK_ESCAPE][content.focus(); content.document.activeElement.blur()");
user_pref("extensions.dorandoKeyConfig.main.y", "][Y][][Components.classes['@mozilla.org/widget/clipboardhelper;1'].getService(Components.interfaces.nsIClipboardHelper).copyString(content.location)");
user_pref("extensions.dorandoKeyConfig.main.z", "][Z][][BrowserFullScreen()");
