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

function MVC_Controller(model, view)
{
    this.base = new Base;
    this.base();

    this.model = model;
    this.view = view;

}
MVC_Controller.prototype = new Base;

MVC_Controller.prototype.addItem = function(key,item)
{
    this.model.addItem(key,item);
}

MVC_Controller.prototype.removeItem = function(key)
{
    this.model.removeItem(key);
}