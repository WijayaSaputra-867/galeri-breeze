<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $id = Auth::user()->id;
        $galleries = Gallery::where('user_id', $id)->paginate(10);
        return Inertia::render('Gallery/Index', [
            'galleries' => $galleries,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Gallery/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'gallery_title' => 'required|string|min:4|max:50',
            'gallery_image' => 'required|image|max:5120|mimes:png,jpg,jpeg',
            'gallery_description' => 'required|string|min:10'
        ]);

        Gallery::create([
            'user_id' => Auth::user()->id,
            'title' => $request->gallery_title,
            'description' => $request->gallery_description,
            'image' => $request->File('gallery_image')->store('uploads/galleries')
        ]);

        return Redirect::route('galleries.create');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
