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
#include "trace.js"

function MVC_Controller(model, view)
{
    this.base = new Base;
    this.base();

    if (!model instanceof MVC_Model)
    {
        throw new Error("MVC_Controller must take an MVC_Model");
    }
    else
    {
        this.model = model;
    }
    if (!view instanceof MVC_View)
    {
        throw new Error("MVC_Controller must take an MVC_View");
    }
    else
    {
        this.view = view;
    }

    var that = this;

    this.model.item_added_observer.attach(function(sender,argv)
    {
        args = new argv;
        args["type"] = "added";
        that.view.update(args);
    });

    this.model.item_added_observer.attach(function(sender,argv)
    {
        args = new argv;
        args["type"] = "removed";
        that.view.update(args);
    });

    this.view.item_added_observer.attach(function(sender,argv)
    {
        that.model.addItem(argv["key"],argv["value"]);
    });

    this.view.item_added_observer.attach(function(sender,argv)
    {
        that.model.removeItem(argv["key"]);
    });

}
MVC_Controller.prototype = new Base;
