plugins.navigationBar.init();
  plugins.tabBar.init();

  plugins.navigationBar.create();
  plugins.tabBar.create()

  plugins.navigationBar.setTitle("Navigation Bar")
  plugins.navigationBar.showLeftButton()
  plugins.navigationBar.showRightButton()
  plugins.navigationBar.setupLeftButton("Back",
                                        "",
                                        function() {
                                          $(window).unbind("scrollstop");
                                          history.back();
                                          return false;
                                        });
  plugins.navigationBar.setupRightButton(
                                         "Alert",
                                         "barButton:Bookmarks",
                                         function() {
                                          alert("right nav button tapped")
                                         });
  plugins.navigationBar.show()

  plugins.tabBar.createItem("contacts", "", "tabButton:Contacts", {onSelect: app.loadNews});
  plugins.tabBar.createItem("recents", "", "tabButton:Recents")
  plugins.tabBar.createItem("another", "Branches", "www/images/map-marker.png",
                                        {
                                          onSelect: function() {
                                                            app.loadMap();
                                                        }});
  plugins.tabBar.show()
  plugins.tabBar.showItems("contacts", "recents", "another")