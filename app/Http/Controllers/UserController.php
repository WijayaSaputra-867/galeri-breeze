<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();  // Mengambil semua data user dari database
        // ->paginate(5) ambil semua data dan pisahkan sesuai yang diinginkan
        // ->orderBy('name', 'desc') mengurutkan data
        // $users = User::latest()->get();
        // $users = User::find(1)->get();
        // $users= User::where('name', 'Wijaya')->get();
        return Inertia::render('User/Index', [
            'users' => $users
        ]); // Mengirim data ke view Inertia
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // membuat validasi
        $request->validate([
            'name' => 'required|string|min:5|max:100',
            'email' => 'required|string|email|unique:users,email|max:100',
            'password' => 'required|string|min:8|confirmed'
        ]);

        // menambahkan data user ke dalam database
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        // kembalikan kehalaman user index
        return Redirect::route('user.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        // find atau where
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        // mengambil semua data user untuk mengirim data
        $users = User::all();

        // mengembalikan data user dan semua user ke view
        return Inertia::render('User/Index', [
            'users' => $users,
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        // melakukan validasi untuk ubdah data
        $request->validate([
            'name' => 'required|string|min:5|max:100',
            'email' => 'required|string|email|max:100|unique:users,email,' . $user->id,
        ]);

        // mengubah data sesuai dari post
        $user->update([
            'name' => $request->name,
            'email' => $request->email
        ]);

        return Redirect::route('user.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //delete
    }
}
