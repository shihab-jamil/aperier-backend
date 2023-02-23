<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use mysql_xdevapi\Table;

class PasswordReset extends Model
{
    protected $table = "password_resets";
    use HasFactory;
    protected $guarded = [
        'id',
    ];

}
