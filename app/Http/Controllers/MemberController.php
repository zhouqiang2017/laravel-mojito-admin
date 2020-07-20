<?php

namespace App\Http\Controllers;

use App\Http\Resources\MemberResource;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller {

    public function index()
    {
        $query = Member::query();
        $query->when(request('keyword', false), function ($q, $keyword) {
            $keyword = "%{$keyword}%";
            $q->whereRaw('(nickname like ? or phone like ?)', [$keyword, $keyword]);
        });
        $members = $query->latest()->paginate();
        return MemberResource::collection($members);
    }
}
