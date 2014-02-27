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

#include "base.js"
#include "observer.js"

function MVC_View(model)
{
    this.base = new Base;
    this.base();

    if (!model instanceof MVC_Model)
    {
        ERROR("MVC_View must take an MVC_Model, creating default");
        this.model = new MVC_Model;
    }
    else
    {
        this.model = model;
    }

    var that = this;

    this.model.item_added_observer.attach(function(sender,argv)
    {
        args = new argv;
        args["type"] = "added";
        that.rebuild(args);
    });

    this.model.item_added_observer.attach(function(sender,argv)
    {
        args = new argv;
        args["type"] = "removed";
        that.rebuild(args);
    });

}
MVC_View.prototype = new Base;

MVC_View.prototype.addItem = function(key,item)
{
    this.model.addItem(key,item);
}

MVC_View.prototype.removeItem = function(key)
{
    this.model.removeItem(key);
}

MVC_View.prototype.rebuild = function(args)
{
    ERROR("MVC_View rebuild function not overridden");
}
