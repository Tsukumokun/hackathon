//
// Hackathon - a web based fight and collect game.
// Copyright (C) 2014 Christopher Kelley   <tsukumokun(at)icloud.com>
//                    Till Smejkal         <till.smejkal(at)gmail.com>
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http:// www.gnu.org/licenses/>
//

#pragma once

#include "../../utils/base.js"

var visualmap = function(container)
{
    this.base = Base
    this.base()

    this.container = container
    this.map = $('<section id="draggable-map" class="yellow-background"></section>')

    $(this.container).append(this.map)
    $(this.map).css({
        "border":"1px solid transparent",
        "background":"transparent",
        "width":"100%",
        "height":"100%"
    })

    $(this.container).overscroll({showThumbs:false});



    //var that = this;
    //setInterval(function(){
    //    $(that.map).append('<div style="display:block;width:50px;height:50px;"></div>')
    //    $(that.container).overscroll({showThumbs:false});
    //},400)
}
visualmap.prototype = new Base;

visualmap.prototype.insert = function(x,y,inner,callback)
{
    var size=50

    var article = $('<article></article>')
    $(article).css({
        "display":"inline-block",
        "position":"relative",
        "width":size+"px",
        "height":size+"px",
        "top":y*size+"px",
        "left":x*size+"px"
    })
    if(inner)
        $(article).append(inner)
    if(callback)
        $(article).click(callback)
    $(this.map).append(article)
}