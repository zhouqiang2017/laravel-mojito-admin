<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class HighSenior
 *
 * @package \App\Models
 */
class HighSenior extends Model{
    protected $fillable = ['name', 'intro', 'cover', 'sequence', 'type', 'status'];
}
