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

var BROWSER_CHROME  = false;
var BROWSER_SAFARI  = false;
var BROWSER_FIREFOX = false;
var BROWSER_UNKNOWN = false;

function browser(){
	if(navigator.userAgent.indexOf("Chrome")>0){
	 	BROWSER_CHROME=true;
		return "Chrome";
	}else if(navigator.userAgent.indexOf("Safari")>0){
		BROWSER_SAFARI=true;
		return "Safari";
	}else if(navigator.userAgent.indexOf("Firefox")>0){
		BROWSER_FIREFOX=true;
		return "Firefox";
	}else{ 
		BROWSER_UNKNOWN=true;
		return "unknown";
	}
}

var BROWSER = browser();
