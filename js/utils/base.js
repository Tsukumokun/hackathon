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

//REQUIRE: trace.js guid.js

function Base()
{
	var uuid 		= guid();
	INFO("UUID generated: "+uuid);

	this.getUUID 	= function()
	{
		return uuid;
	}

	this.print 		= function()
	{
		return "[Object UUID="+uuid+"]";
	}

	this.instanceof = function(constructor){

		var obj = this;

		while (obj!=null)
		{
			if (obj == constructor.prototype)
				return true;
			obj = obj.__proto__;
		}

		return false;
	}
}
