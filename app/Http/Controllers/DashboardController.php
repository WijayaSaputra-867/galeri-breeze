<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Gallery;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function dashboard(){
        $galleries = Gallery::latest()->with('user')->get();
        return Inertia::render('Dashboard', [
            'galleries' => $galleries
        ]);
    }
}
