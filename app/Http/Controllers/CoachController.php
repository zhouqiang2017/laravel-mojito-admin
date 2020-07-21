<?php

namespace App\Http\Controllers;

use App\Models\Coach;
use Illuminate\Http\Request;

class CoachController extends Controller
{
    public function index()
    {
        $query = Coach::query();
        $query->when(request('keyword', false), function ($q, $keyword) {
            $keyword = "%{$keyword}%";
            $q->whereRaw('(name like ? or intro like ?)', [$keyword, $keyword]);
        });
        $status = request('status', '');
        $query->when($status!=='', function ($q) use ($status){
            $q->whereStatus($status);
        });
        $seniors = $query->where('status', '>', '-1')
            ->whereType(1)
            ->orderByDesc('sequence')
            ->orderByDesc('status')
            ->latest()
            ->paginate();
        return SeniorResource::collection($seniors);
    }


    public function show($id)
    {
        $model = HighSenior::query()->findOrFail($id);
        return new SeniorResource($model);
    }

    public function store(CreateOrUpdateRequest $request)
    {
        HighSenior::create($request->all());
        return $this->success('');
    }

    public function update(CreateOrUpdateRequest $request, $id)
    {
        $banner = HighSenior::query()->findOrFail($id);
        $banner->update($request->toArray());
        return $this->success('');
    }


    public function destroy($id)
    {
        $banner = HighSenior::query()->findOrFail($id);
        $banner->update(['status' => -1]);
        return $this->success('');
    }
}
