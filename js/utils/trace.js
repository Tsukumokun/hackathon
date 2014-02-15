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

//REQUIRE: browser.js

function getErrorObject(){
    try { throw Error('') } catch(err) { return err; }
}

function trace_log(type,message,css){
	if(BROWSER_UNKNOWN)
		return;

	var callbacks = 3;
	if(BROWSER_CHROME)callbacks+=2;

	var trace = getErrorObject().stack.split("\n")[callbacks];
	var line = trace.split(":")[2];

	var func;

	if(BROWSER_CHROME){
		func = trace.substring(trace.indexOf("at ")+3,trace.indexOf(" ("));
	}else if(BROWSER_SAFARI){
		func = trace.substring(0,trace.indexOf("@"));
	}
	console.log("%c"+type+" @ "+func+"("+line+"):"+message,css);
}

function ERROR 	(message){trace_log("[ERROR] ",message,'color: #E74C3C');}
function SEVERE	(message){trace_log("[SEVERE]",message,'color: #C0392B');}
function WARN 	(message){trace_log("[WARN]  ",message,'color: #F1C40F');}
function INFO 	(message){trace_log("[INFO]  ",message,'color: #3498DB');}
function SYSTEM	(message){trace_log("[SYSTEM]",message,'color: #9B59B6');}
function NOTE	(message){trace_log("[NOTE]  ",message,'color: #95A5A6');}
function TODO	(message){trace_log("[TODO]  ",message,'color: #2ECC71');}
function XXX	(message){trace_log("[XXX]   ",message,'color: #1ABC9C');}
function TEXT	(message){trace_log("[TEXT]  ",message,'color: #34495E');}

