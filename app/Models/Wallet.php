<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;
    public $timestamps = false;
    
    public function transfers(){
        return $this->hasMany(Transfer::class);
    }
}
