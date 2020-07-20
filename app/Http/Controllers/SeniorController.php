<?php

namespace App\Http\Controllers;

use App\Http\Requests\Senior\CreateOrUpdateRequest;
use App\Http\Resources\SeniorResource;
use App\Models\HighSenior;

/**
 * Class SeniorController
 *
 * @package \App\Http\Controllers
 */
class SeniorController extends Controller{

    public function index()
    {
        $query = HighSenior::query();
        $query->when(request('keyword', false), function ($q, $keyword) {
            $keyword = "%{$keyword}%";
            $q->whereRaw('(name like ? or intro like ?)', [$keyword, $keyword]);
        });
        $status = request('status', '');
        $query->when($status!=='', function ($q) use ($status){
            $q->whereStatus($status);
        });
        $seniors = $query->where('status', '>', '-1')
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
