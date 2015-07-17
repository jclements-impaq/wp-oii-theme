jQuery( document ).ready(function() {
    var itemmenu = jQuery('.nav-menu > .menu-item-has-children > .sub-menu');
    var top_submenus = itemmenu.children().length;
    var total_submenus = itemmenu.find("li").length;
    var i = 0, n = 0, r = 0;
    var menu_height = 35;
    var new_top=0;
    var add_menuclass = false;
    itemmenu.find("li").each(function(index){
        var $this = jQuery(this);
        if ($this.hasClass("menu-item-has-children")) {
            if (index <(total_submenus/2))
                add_menuclass = true;
            else
                add_menuclass = false;
            n++;
        }
        if (i>=total_submenus/2) {
            if (add_menuclass) {
                $this.addClass("menu-left");
                add_menuclass=false;
            } else {
                new_top = r*menu_height;
                if ($this.hasClass("menu-item-has-children")){
                    $this.addClass("menu-right").attr("style","position:absolute !important;top:" + new_top + "px");
                    r++;
                } else {
                    $this.addClass("menu-right").attr("style","position:absolute !important;top:" + new_top + "px;");
                }
            }
        } else {
            $this.addClass("menu-left");
        }
        i++;
    });
});