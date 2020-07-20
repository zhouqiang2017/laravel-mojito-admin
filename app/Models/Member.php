<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Member
 *
 * @package \App\Models
 */
class Member extends Model {
    protected $fillable = ['nickname', 'openid', 'session_key', 'union_id', 'phone', 'gender',
        'district', 'avatar', 'location', 'status', 'balance', 'cash', 'is_coach'];

}
