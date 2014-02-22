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

//REQUIRE: base.js
#ifndef BANK_JS
#define BANK_JS

#include "../../utils/base.js"

function Bank(){
    this.base = Base;
    this.base();

    this.bits_current       = 0;
    this.bits_lost          = 0;
    this.bits_converted     = 0;

    this.primes_current     = 0;
    this.primes_spent       = 0;

    this.conversion_rate    = 8;
    //8 bits per prime

    this.bits_per_second    = 1;
    this.primes_per_second  = 0;

    this.bit_count_change;
    this.prime_count_change;
}
Bank.prototype = new Base;

Bank.prototype.bit_gain = function(num){
    if (num < 0){
        ERROR("Bank only accepts positive numbers: "+num);
        return false;
    }
    this.bits_current   += num;
    if(this.bit_count_change)this.bit_count_change();
    return true;
}

Bank.prototype.bit_loss = function(num){
    if (num < 0){
        ERROR("Bank only accepts positive numbers: "+num);
        return false;
    }
    if (num > this.bits_current){
        ERROR("Insufficient bits to lose");
        return false;
    }
    this.bits_current   -= num;
    this.bits_lost      += num;
    if(this.bit_count_change)this.bit_count_change();
    return true;
}

Bank.prototype.bit_convert = function(num){
    if (num < 0){
        ERROR("Bank only accepts positive numbers: "+num);
        return false;
    }
    if (this.conversion_rate*num > this.bits_current){
        ERROR("Insufficient bits to convert");
        return false;
    }
    this.bits_current   -= this.conversion_rate*num;
    this.bits_converted += this.conversion_rate*num;
    this.primes_current += num;
    if(this.bit_count_change)this.bit_count_change();
    if(this.prime_count_change)this.prime_count_change();
    return true;
}

Bank.prototype.prime_spend = function(num){
    if (num < 0){
        ERROR("Bank only accepts positive numbers: "+num);
        return false;
    }
    if (num > this.primes_current){
        ERROR("Insufficient primes to spend");
        return false;
    }
    this.primes_current -= num;
    this.primes_spent   += num;
    if(this.prime_count_change)this.prime_count_change();
    return true;
}

Bank.prototype.increase_bps = function(num){
    if (num < 0){
        ERROR("Bank only accepts positive numbers: "+num);
        return false;
    }
    this.bits_per_second += num;
    return true;
}

Bank.prototype.decrease_bps = function(num){
    if (num < 0){
        ERROR("Bank only accepts positive numbers: "+num);
        return false;
    }
    if (this.bits_per_second-num <= 0){
        ERROR("BPS can't be zero");
        return false;
    }
    this.bits_per_second -= num;
    return true;
}

Bank.prototype.increase_pps = function(num){
    if (num < 0){
        ERROR("Bank only accepts positive numbers: "+num);
        return false;
    }
    this.primes_per_second += num;
    return true;
}

Bank.prototype.decrease_bps = function(num){
    if (num < 0){
        ERROR("Bank only accepts positive numbers: "+num);
        return false;
    }
    if (this.primes_per_second-num < 0){
        ERROR("PPS can't be less than zero");
        return false;
    }
    this.primes_per_second -= num;
    return true;
}

Bank.prototype.log_stats = function(){
    INFO(
        "Bank: " +
        "bits=" + this.bits_current + "; " +
        "primes=" + this.primes_current
    );
}

#endif

