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

//REQUIRE: trace.js

function ImageManager()
{
	this.successCount 	= 0;
	this.errorCount 	= 0;
	this.downloadQueue 	= [];
	this.cache 			= {};
}

ImageManager.prototype.queue = function(path)
{
	this.downloadQueue.push(path);
}

ImageManager.prototype.downloadAll = function(callback)
{
	if (this.downloadQueue.length === 0)
	{
		callback();
	}
	for (var i = 0; i < this.downloadQueue.length; i++)
	{
		var img = new Image();
		var path = this.downloadQueue[i];
		var that = this;
		img.addEventListener("load",function(){
			that.successCount += 1;
			if (that.isDone()){
				callback();
			}
		},false);
		img.addEventListener("error",function(){
			that.errorCount += 1;
			if (that.isDone()){
				callback();
			}
		},false);
		img.src = path;
		this.cache[path] = img;
	}
}

ImageManager.prototype.isDone = function()
{
	return (this.downloadQueue.length == 
		this.successCount + this.errorCount);
}

ImageManager.prototype.getImage = function(path)
{
	return this.cache[path];
}