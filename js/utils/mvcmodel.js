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

function MVC_Model()
{
    this.base = new Base;
    this.base();

    this.items = new Map;

    this.item_added_observer = new Observer(this);
    this.item_removed_observer = new Observer(this);
}
MVC_Model.prototype = new Base;

MVC_Model.prototype.getItem = function(key)
{
    return this.items.get(key);
}

MVC_Model.prototype.getItems = function()
{
    return this.items.values();
}

MVC_Model.prototype.getKeys = function()
{
    return this.items.keys();
}

MVC_Model.prototype.addItem = function(key,item)
{
    this.items.sey(key);
    SYSTEM("Item added to MVC_Model");
    this.item_added_observer.notify({"key":key,"item":item});
}

MVC_Model.prototype.removeItem = function(key)
{
    if (!this.items.has(key))
    {
        WARN("Item not found in MVC_Model, doing nothing");
        return;
    }
    
    var item = this.items.get(key);
    this.items.delete(key);
    SYSTEM("Item removed from MVC_Model");
    this.item_removed_observer.notify({"key":key,"item":item});
}
