<?php

namespace App\Http\Controllers;

use App\Http\Requests\Banner\CreateOrUpdateRequest;
use App\Http\Resources\BannerResource;
use App\Models\Banner;
use Illuminate\Http\Request;

/**
 * Class BannerController
 *
 * @package \App\Http\Controllers
 */
class BannerController extends Controller {

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return mixed
     */
    public function index()
    {
        $query = Banner::query();
        $query->when(request('keyword', false), function ($q, $keyword) {
            $keyword = "%{$keyword}%";
            $q->whereRaw('(name like ? or intro like ?)', [$keyword, $keyword]);
        });
        $status = request('status', '');
        $query->when($status!=='', function ($q) use ($status){
            $q->whereStatus($status);
        });
        $banners = $query->where('status', '>', '-1')
            ->orderByDesc('sequence')
            ->orderByDesc('status')
            ->latest()
            ->paginate();

        return BannerResource::collection($banners);
    }

    /**
     * @param $id
     *
     * @return mixed
     */
    public function show($id)
    {
        $banner = Banner::query()->findOrFail($id);
        return new BannerResource($banner);
    }

    /**
     * @param \App\Http\Requests\Banner\CreateOrUpdateRequest $request
     *
     * @return mixed
     */
    public function store(CreateOrUpdateRequest $request)
    {
        Banner::create($request->all());
        return $this->success('');
    }


    /**
     * @param \App\Http\Requests\Banner\CreateOrUpdateRequest $request
     * @param                                                 $id
     *
     * @return mixed
     */
    public function update(CreateOrUpdateRequest $request, $id)
    {
        $banner = Banner::query()->findOrFail($id);
        $banner->update($request->toArray());
        return $this->success('');
    }


    /**
     * @param $id
     *
     * @return mixed
     */
    public function destroy($id)
    {
        $banner = Banner::query()->findOrFail($id);
        $banner->update(['status' => -1]);
        return $this->success('');
    }

}
