<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function wallet(){
        return $this->belongsTo(Wallet::class);
    }
}
